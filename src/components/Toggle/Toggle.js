import React, { useState } from 'react'
import { Container, Knoba, Knobb } from "./Toggle.style"

// Redux

function Toggle({ color, func }) {
    const [toggle, setToggle] = useState(false)

    return (
        <Container onClick={() => { setToggle(!toggle); func() }}>
            {toggle ? <Knoba color={color} /> : <Knobb />}
        </Container>
    )
}

export default Toggle