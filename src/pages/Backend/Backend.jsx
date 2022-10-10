import React from 'react'
import { useSelector } from 'react-redux'
import { Col, PageContainer } from './Backend.styles'


export const Backend = () => {
    const isDark = useSelector(state => state.settings.dark)

    const callAPI = () => {
        const res = fetch('https://davidmaromapi.com/api/files/add')
        res.then(res => res.json())
            .then(res => window.open('https://davidmaromapi.com/zip/' + res.file))

                
    }


return (
    <PageContainer darkMode={isDark} >
        <Col>
            <h2>Backend Demonstration</h2>
            <p>Host: Digital Ocean {`(`}Ubuntu{`)`}</p>
            <p>Server: nginx + systemd</p>
            <p>Process Manager: pm2</p>
            <p>API: <span><a href="https://davidmaromapi.com" target="_blank" rel="noreferrer">https://davidmaromapi.com</a></span></p>

            <button onClick={callAPI}>Download file</button>

        </Col>
    </PageContainer>
)
}
