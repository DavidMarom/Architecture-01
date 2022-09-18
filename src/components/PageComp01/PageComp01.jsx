import React, { useEffect } from 'react'
import { PageContainer } from './PageComp.styles'
import { getItems } from '../../features/items/itemsSlice'

// Redux
import { useSelector, useDispatch } from 'react-redux'
export const PageComp01 = () => {
    const dispatch = useDispatch();

    const isDark = useSelector(state => state.settings.dark)
    const items = useSelector(state => state.items.items)
    const ready = useSelector(state => state.items.isLoading)

    useEffect(() => { dispatch(getItems()) }, [dispatch])

    console.log(444, items)

    if (items) {
        return (
            <PageContainer darkMode={isDark} >
                <h1>Page 01</h1>
                <p>{items[0].title}</p>
            </PageContainer>
        )
    }
}
