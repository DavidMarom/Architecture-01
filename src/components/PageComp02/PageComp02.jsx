import React, { useState, useEffect } from 'react'
import { PageContainer } from './PageComp.styles'
import { db } from '../../firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'
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

    useEffect(() => {
        const getList = async () => {
            const data = await getDocs(listCollectionRef);
            setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getList()
    }, [])

    return (
        <PageContainer darkMode={isDark} >
            <h1>Page 02</h1>

            <input type="text" onChange={(ev) => { setNewItem(ev.target.value) }} />
            <button onClick={createNew}>Add</button>

            {items.map((item, idx) => <h1 key={idx}>{item.item01}</h1>)}
        </PageContainer>
    )
}
