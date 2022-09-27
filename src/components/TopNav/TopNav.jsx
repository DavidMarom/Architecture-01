import { useContext } from 'react'
import { PageContext } from "../../Context.jsx"

import { NavContainer, Img } from './TopNav.styles'
import { Row, TopNavItem, Col } from '../StyledComponents'

import { Link } from "react-router-dom";

// Components
import Toggle from '../Toggle/Toggle'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { darkToggle } from '../../features/settings/settingsSlice'


export default function TopNav() {
    const dispatch = useDispatch()
    const isDark = useSelector(state => state.settings.dark)
    const { value } = useContext(PageContext);

    return (
        <NavContainer darkMode={isDark} >
            <Col>
                <Img src="logo192.png" alt="David Marom"></Img>
            </Col>
            <Row>
                <TopNavItem><Link to="/"><p>Antd</p></Link></TopNavItem>
                <TopNavItem><Link to="/form"><p>Form</p></Link></TopNavItem>
                <TopNavItem><Link to="/FakeStore"><p>Fake Store</p></Link></TopNavItem>
            </Row>
            <Row>
                <Toggle color="#00aaff" func={() => { dispatch(darkToggle()) }} symbol={isDark ? '🌒' : '☀️'} />
            </Row>
        </NavContainer>
    )
}
