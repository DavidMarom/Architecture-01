import React from 'react'
import { Error, Form } from './EditItemForm.styles'
import { updateItem, getList, closeEditDialog } from '../../features/list/listSlice'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import Button from '../Button/Button'
import { Input } from './EditItemForm.styles'
import * as Yup from 'yup'

const EditItemForm = ({ data }) => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: data ? data.name : '',
            age: data ? data.age : '',
            address: data ? data.address : '',
            id: data ? data.id : ''
        },
        validationSchema: Yup.object({
            name: Yup.string().max(10, 'Must be 10 characters or less').required('Required'),
            age: Yup.number().required('Required'),
            address: Yup.string().required('Required'),
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(closeEditDialog())
            dispatch(updateItem(
                { ...values, id: data.id }
            ));
            dispatch(getList())
        }
    })

    return (
        <>
            <Form onSubmit={formik.handleSubmit}>

                <div className="imput-container">
                    <Input
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
                    <Input
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
                    <Input
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

                <Button
                    type="submit"
                    backgroundColor="#3576cc"
                    label="Edit"
                    onclick={function noRefCheck() { }}
                    rounded
                    size="small"
                    width="100px"
                />
            </Form>

        </>
    )
}

export default EditItemForm