import React from 'react'
import { PageContainer } from './Next.styles'
import { useSelector } from 'react-redux'

const Next = () => {
    const isDark = useSelector(state => state.settings.dark)

    return (
        <PageContainer darkMode={isDark} >
            <h1>Next.JS</h1>
            <p>Experimenting with Next.JS</p>
            <a href="https://next-crm-two.vercel.app/" target="_blank" rel="noreferrer"><b>👉 Click here</b></a>
        </PageContainer>
    )
}

export default Next