import React from 'react'
import { useSelector } from 'react-redux'
import { Col, PageContainer } from './Backend.styles'

export const Backend = () => {
    const isDark = useSelector(state => state.settings.dark)
    return (
        <PageContainer darkMode={isDark} >
            <Col>
                <h2>Backend Demonstration</h2>
                <p>Host: Digital Ocean {`(`}Ubuntu{`)`}</p>
                <p>Server: nginx + systemd</p>
                <p>Process Manager: pm2</p>
                <p>API: <span><a href="https://documenter.getpostman.com/view/10340861/2s83zguQk7" target="_blank" rel="noreferrer">https://documenter.getpostman.com/view/10340861/2s83zguQk7</a></span></p>
                

            </Col>
        </PageContainer>
    )
}
