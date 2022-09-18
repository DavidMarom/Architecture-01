import React, { useState, useEffect } from 'react'
import { PageContainer } from './PageComp.styles'
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

// Components

// Redux
import { useSelector } from 'react-redux'

export const PageComp02 = () => {
    const isDark = useSelector(state => state.settings.dark)
    const [items, setItems] = useState([])
    const listCollectionRef = collection(db, "list")

    // const async createItem

    useEffect(() => {
        const getList = async () => {
            const data = await getDocs(listCollectionRef);
            setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log(items)
        }
        getList()
    }, [])

    return (
        <PageContainer darkMode={isDark} >
            <h1>Page 02</h1>
            {items.map((item) => item.item01)}
        </PageContainer>
    )
}
