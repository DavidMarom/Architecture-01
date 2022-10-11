import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Col, PageContainer } from './Backend.styles'


export const Backend = () => {
    const isDark = useSelector(state => state.settings.dark)
    const [name, setName] = useState('')
    const callAPI = (name) => {
        const res = fetch('https://davidmaromapi.com/api/files/add?name=' + name)
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
                <p></p>
                <p><b>Demonstration 01:</b></p>
                <p>Enter your name, the server will append it to template.txt, and will send it to you in Your_File.zip</p>
                <p></p>
                <input type="text" id="name" placeholder="Enter a name" onChange={(ev) => { setName(ev.target.value) }} />
                <button onClick={() => callAPI(name)}>Download file</button>
                <p></p>
                <img src="infrastructure.png" alt="infrastructure" width="500px" />

            </Col>
        </PageContainer>
    )
}
