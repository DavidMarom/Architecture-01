import React, { useState, useEffect } from 'react'
import { PageContainer } from './PageComp.styles'
import { db } from '../../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore'
import { useSelector } from 'react-redux'

export const PageComp02 = () => {
    const isDark = useSelector(state => state.settings.dark)
    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState()
    const listCollectionRef = collection(db, "list")

    const createNew = async () => {
        await addDoc(listCollectionRef, {
            item01: newItem
        })
        setNewItem("")
    }

    const updateItem = async (id) => {
        const itemDoc = doc(db, "list", id)
        const newFields = { item01: 'aaaaaaaaaa' }
        await updateDoc(itemDoc, newFields);
    }

    useEffect(() => {
        const getList = async () => {
            const data = await getDocs(listCollectionRef);
            setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getList()
    }, [])

    return (
        <PageContainer darkMode={isDark} >
            {console.log(items)}
            <h1>Page 02</h1>

            <input type="text" onChange={(ev) => { setNewItem(ev.target.value) }} />
            <button onClick={createNew}>Add</button>


            {items.map((item, idx) => {
                return <div key={idx}>
                    <p>{item.item01}</p>
                    <button onClick={() => { updateItem(item.id) }}>Update</button>
                </div>
            })}


        </PageContainer >
    )
}
