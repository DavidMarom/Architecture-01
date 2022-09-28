import React from 'react'
import { PageContainer } from './Home.styles'
import { useSelector } from 'react-redux'

export const Home = () => {
    const isDark = useSelector(state => state.settings.dark)

    return (
        <PageContainer darkMode={isDark} >
            <p>Home</p>
        </PageContainer>
    )
}
