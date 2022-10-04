import { NavContainer, Img, Img2, LoginBtn } from './TopNav.styles'
import { Row, Col } from '../StyledComponents'
import { NavLink, Link } from "react-router-dom";
import Toggle from '../Toggle/Toggle'
import { useDispatch, useSelector } from 'react-redux'
import { darkToggle } from '../../features/settings/settingsSlice'

export default function TopNav() {
    const dispatch = useDispatch()
    const isDark = useSelector(state => state.settings.dark)
    const user = useSelector(state => state.user.user)

    return (
        <NavContainer darkMode={isDark} >
            <Col>
                <Link to="/">
                    <Img src="logo192.png" alt="David Marom"></Img>
                </Link>
            </Col>
            <Row>
                <NavLink to="/antd" className={(navData) => navData.isActive ? 'active-route' : 'inactive-route'}><p>AntD</p></NavLink>
                {/* <NavLink to="/form" className={(navData) => navData.isActive ? 'active-route' : 'inactive-route'}><p>Form</p></NavLink> */}
                <NavLink to="/FakeStore" className={(navData) => navData.isActive ? 'active-route' : 'inactive-route'}><p>Fake Store</p></NavLink>
                <NavLink to="/MongoDB" className={(navData) => navData.isActive ? 'active-route' : 'inactive-route'}><p>MongoDB</p></NavLink>
            </Row>
            <Row>
                <Link to="/Login">
                    {user ? <Img2 src={user.photoURL} alt="user" /> : <LoginBtn>Login</LoginBtn>}
                </Link>
                <Toggle color="#00aaff" func={() => { dispatch(darkToggle()) }} symbol={isDark ? '🌒' : '☀️'} />
            </Row>
        </NavContainer>
    )
}
