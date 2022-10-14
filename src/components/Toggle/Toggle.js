import React, { useState } from 'react'
import { Container, Knoba, Knobb, Symb } from "./Toggle.style"

export const Toggle = ({ color, func, symbol }) => {
    const [toggle, setToggle] = useState(false)

    return (
        <Container onClick={() => { setToggle(!toggle); func() }}>
            <Symb>{symbol}</Symb>
            {toggle ? <Knoba color={color} /> : <Knobb />}
        </Container>
    )
}
