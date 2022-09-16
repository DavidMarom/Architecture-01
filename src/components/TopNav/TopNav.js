import React, { useState } from 'react'
import Toggle from '../Toggle/Toggle'
import { Container } from './TopNav.styles'

export default function TopNav({ darkMode }) {
    console.log('Top bar loaded')

    const func = () =>{
        console.log('func activated')
    }

    return (
        <Container darkMode={darkMode}>
            <Toggle color="#ff0000" func={func}/>
            <Toggle color="#ffff00" />
            <Toggle color="#ff00ff" />

        </Container>
    )
}