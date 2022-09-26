import React, { useState } from 'react'
import { PageContainer } from './Form.styles'
import { getList, addItemToList, updateItem, deleteItem } from '../../features/list/listSlice'
import { useSelector, useDispatch } from 'react-redux'

export const Form = () => {
    const dispatch = useDispatch();

    const items = useSelector(state => state.list.list)
    const isDark = useSelector(state => state.settings.dark)
    const [newName, setNewName] = useState('')
    const [newAge, setNewAge] = useState('')
    const [newAddress, setNewAddress] = useState('')

    const handleCreateNew = () => {
        dispatch(addItemToList(
            {
                name: newName,
                age: newAge,
                address: newAddress
            }
        ));
        dispatch(getList())
        setNewName("")
        setNewAge("")
        setNewAddress("")
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
                <input type="text" onChange={(ev) => { setNewName(ev.target.value) }} />
                <input type="text" onChange={(ev) => { setNewAge(ev.target.value) }} />
                <input type="text" onChange={(ev) => { setNewAddress(ev.target.value) }} />
                <button onClick={handleCreateNew}>Add</button>

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
