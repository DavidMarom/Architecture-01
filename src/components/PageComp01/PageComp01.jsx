import React from 'react'
import { PageContainer } from './PageComp.styles'

// Components

// Redux
import { useSelector } from 'react-redux'

export const PageComp01 = () => {
    const isDark = useSelector(state => state.settings.dark)

    return (
        <PageContainer darkMode={isDark} >
            <h1>Page 01</h1>
        </PageContainer>
    )
}
