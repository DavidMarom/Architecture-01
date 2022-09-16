import React, { useState } from 'react'
import { Container, Knoba, Knobb } from "./Toggle.style"

function Toggle({ color, func }) {
    console.log('toggle')
    const [toggle, setToggle] = useState(true)
    return (
        <Container onClick={() => { setToggle(!toggle); func() }}>
            {toggle ? <Knoba color={color} /> : <Knobb />}
        </Container>
    )
}


export default Toggle