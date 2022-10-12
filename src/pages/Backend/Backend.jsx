import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Col, PageContainer, Input, Button, P, H2 } from './Backend.styles'


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
                <H2 darkMode={isDark}>Backend Demonstration</H2>
                <P darkMode={isDark}>Demos on this page are using the node server on the Digital Ocean host (left side of the chart)</P>
                <P darkMode={isDark}>API: <span><a href="https://davidmaromapi.com" target="_blank" rel="noreferrer">https://davidmaromapi.com</a></span></P>
                <P darkMode={isDark}>GIT: <span><a href="https://github.com/DavidMarom/node-02" target="_blank" rel="noreferrer">git@github.com:DavidMarom/node-02.git</a></span></P>
                <p></p>
                <P darkMode={isDark}><b>Demonstration 01:</b></P>
                <P darkMode={isDark}>Enter your name, the server will append it to template.txt, and will send it to you in Your_File.zip</P>
                <p></p>
                <Input type="text" id="name" placeholder="Enter a name" onChange={(ev) => { setName(ev.target.value) }} />
                <Button onClick={() => callAPI(name)}>Download file</Button>
                <p></p>

                <a href="https://res.cloudinary.com/dojmo7vcc/image/upload/v1665487077/davidmarom.com/infrastructure_yvlbtv.png" target="_blank" rel="noopener noreferrer">
                    <img src="infrastructure.png" alt="infrastructure" width="800px" />
                </a>
            </Col>
        </PageContainer>
    )
}
