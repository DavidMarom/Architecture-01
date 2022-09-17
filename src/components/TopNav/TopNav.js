import React from 'react'
import { NavContainer } from './TopNav.styles'
import { Row, TopNavItem } from '../StyledComponents'
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
            <h1>Logo</h1>
            <Row>
                <TopNavItem>Page 01</TopNavItem>
                <TopNavItem>Page 02</TopNavItem>
                <TopNavItem>Page 03</TopNavItem>

            </Row>
            <Row>
                <Toggle color="#00aaff" func={() => { dispatch(darkToggle()) }} />
            </Row>
        </NavContainer>
    )
}
