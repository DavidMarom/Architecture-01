import React from 'react'
import { NavContainer } from './TopNav.styles'

// Components
import Toggle from '../Toggle/Toggle'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { darkToggle } from '../../features/settings/settingsSlice'


export default function TopNav() {
    const dispatch = useDispatch()
    const isDark = useSelector(state => state.settings.dark)


    return (
        <NavContainer darkMode={isDark} >
            <Toggle color="#00aaff" func={() => { dispatch(darkToggle()) }} />
            <h1>{isDark ? 'dark' : 'light'}</h1>
        </NavContainer>
    )
}