import React from 'react'
import { PageContainer } from './Home.styles'
import { useSelector } from 'react-redux'
import { Row } from './Home.styles'

export const Home = () => {
    const isDark = useSelector(state => state.settings.dark)

    return (
        <PageContainer darkMode={isDark} >
            <Row>

                <img src="logo512.png" alt="logo" width="312" />
            </Row>
        </PageContainer>
    )
}
