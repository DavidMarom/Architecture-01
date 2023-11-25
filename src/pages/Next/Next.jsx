import React from 'react'
import { PageContainer } from './Next.styles'
import { useSelector } from 'react-redux'

const Next = () => {
    const isDark = useSelector(state => state.settings.dark)

    return (
        <PageContainer darkMode={isDark} >
            <h1>Next.JS</h1>
            <a href="https://www.redberry-crm.com/" target="_blank" rel="noreferrer">
                <img src="https://res.cloudinary.com/dojmo7vcc/image/upload/v1700753410/redberry/nfh60jh8ivasyeya5x40.jpg" width="300px" alt="Next.js logo" />
            </a>
            <p>Redberry CRM is a project i'm currently working on.</p>
            <p>It is written with Next.js 14 (latest)</p>
            <h2>Take a look:<b> </b><a href="https://www.redberry-crm.com/" target="_blank" rel="noreferrer"><b>redberry-crm.com</b></a></h2>
        </PageContainer>
    )
}

export default Next