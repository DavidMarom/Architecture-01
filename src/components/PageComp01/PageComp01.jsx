import React from 'react'
import { PageContainer } from './PageComp.styles'

// Redux
import { useSelector } from 'react-redux'


export const PageComp01 = () => {
    const isDark = useSelector(state => state.settings.dark)
    const items = useSelector(state => state.items.items )

    console.log(333, items)

    return (
        <PageContainer darkMode={isDark} >
            <h1>Page 01</h1>
        </PageContainer>
    )
}
