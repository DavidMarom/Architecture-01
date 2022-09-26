import React from 'react'
import { PageContainer, Error } from './Form.styles'
import { getList, addItemToList, updateItem, deleteItem } from '../../features/list/listSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const AddItemForm = () => {
    const dispatch = useDispatch();

    const items = useSelector(state => state.list.list)
    const isDark = useSelector(state => state.settings.dark)


    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            address: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().max(10, 'Must be 10 characters or less').required('Required'),
            age: Yup.number().required('Required'),
            address: Yup.string().required('Required'),
        }),
        onSubmit: (values, { resetForm }) => {
            handleCreateNew(values)
            resetForm();
        }
    })

    const handleCreateNew = (values) => {

        dispatch(addItemToList(
            {
                name: values.name,
                age: values.age,
                address: values.address,
            }
        ));
        dispatch(getList())
    }

    const handleDeleteItem = async (id) => {
        dispatch(deleteItem(id))
        dispatch(getList())
    }

    const handleUpdateItem = async (id) => {
        dispatch(updateItem(id));
        dispatch(getList())
    }

    if (items) {
        return (
            <PageContainer darkMode={isDark} >
                <form onSubmit={formik.handleSubmit}>

                    <div className="imput-container">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (<Error>{formik.errors.name}</Error>) : null}
                    </div>
                    <div className="imput-container">
                        <input
                            id="age"
                            name="age"
                            type="number"
                            placeholder="Age"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.age}
                        />
                        {formik.touched.age && formik.errors.age ? (<Error>{formik.errors.age}</Error>) : null}
                    </div>
                    <div className="imput-container">
                        <input
                            id="address"
                            name="address"
                            type="text"
                            placeholder="address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                        />
                        {formik.touched.address && formik.errors.address ? (<Error>{formik.errors.address}</Error>) : null}
                    </div>

                    <button type="submit">Add</button>
                </form>

                {items.map((item, idx) => {
                    return <div key={idx}>
                        <p>{item.name} - {item.age} - {item.address} - {item.id}</p>
                        <button onClick={() => { handleUpdateItem(item.id) }}>Update</button>
                        <button onClick={() => { handleDeleteItem(item.id) }}>Delete</button>
                    </div>
                })}

            </PageContainer >
        )
    } else return <p>Loading</p>
}
