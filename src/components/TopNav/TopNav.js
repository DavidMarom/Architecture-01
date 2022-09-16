import React, { useState } from 'react'
import { NavContainer } from './TopNav.styles'

// Components
import Toggle from '../Toggle/Toggle'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { darkToggle } from '../../features/settings/settingsSlice'


export default function TopNav() {
    const dispatch = useDispatch()
    const isDark = useSelector(state => state.settings.dark)
    const [toggle, setToggle] = useState(false)




    return (
        <NavContainer darkMode={toggle} >
            <Toggle color="#00aaff" func={() => { setToggle(!toggle); dispatch(darkToggle()) }} />
            <h1>{isDark ? 'a' : 'b'}</h1>
        </NavContainer>
    )
}