import { NavContainer, Img } from './TopNav.styles'
import { Row, Col } from '../StyledComponents'
import { NavLink } from "react-router-dom";
import Toggle from '../Toggle/Toggle'
import { useDispatch, useSelector } from 'react-redux'
import { darkToggle } from '../../features/settings/settingsSlice'

export default function TopNav() {
    const dispatch = useDispatch()
    const isDark = useSelector(state => state.settings.dark)

    return (
        <NavContainer darkMode={isDark} >
            <Col>
                <Img src="logo192.png" alt="David Marom"></Img>
            </Col>
            <Row>
                <NavLink to="/antd" className={(navData) => navData.isActive ? 'active-route' : 'inactive-route'}><p>AntD</p></NavLink>
                <NavLink to="/form" className={ (navData )=> navData.isActive ? 'active-route' : 'inactive-route' }><p>Form</p></NavLink>
                <NavLink to="/FakeStore" className={ (navData )=> navData.isActive ? 'active-route' : 'inactive-route' }><p>Fake Store</p></NavLink>
            </Row>
            <Row>
                <Toggle color="#00aaff" func={() => { dispatch(darkToggle()) }} symbol={isDark ? '🌒' : '☀️'} />
            </Row>
        </NavContainer>
    )
}
