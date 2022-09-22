import React, { useState, useEffect } from 'react'
import { PageContainer } from './PageComp.styles'
import { useSelector } from 'react-redux'
import { getList, createNew, updateItem, deleteItem } from '../../services/fireStore'

export const PageComp02 = () => {
    const isDark = useSelector(state => state.settings.dark)
    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState()

    const handleCreateNew = () => {
        createNew(newItem)
        setNewItem("")
    }

    const handleSeleteItem = async (id) => {
        await deleteItem(id);
    }

    useEffect(() => {
        getList().then(ggg => setItems(ggg))
    }, [])

    return (
        <PageContainer darkMode={isDark} >
            <input type="text" onChange={(ev) => { setNewItem(ev.target.value) }} />
            <button onClick={handleCreateNew}>Add</button>

            {items.map((item, idx) => {
                return <div key={idx}>
                    <p>{item.item01}</p>
                    <button onClick={() => { updateItem(item.id) }}>Update</button>
                    <button onClick={() => { handleSeleteItem(item.id) }}>Delete</button>
                </div>
            })}

        </PageContainer >
    )
}
