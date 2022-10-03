import React from 'react'
import { PageContainer, Col } from './Home.styles'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

export const Home = () => {
    const isDark = useSelector(state => state.settings.dark)

    return (
        <PageContainer darkMode={isDark} >
            <Col>
                <h2>Welcome</h2>
                <p><b>This app (WIP) serves as a test for the latest versions of:</b></p>
                <li>Redux toolkit</li>
                <li>React-router</li>
                <li>React 18 updates.</li>
                <p></p>
                <p><b>It also uses</b> Firebase for authentication, Axios, Styled Components, AntD, Formik etc...</p>
                <p></p>
                <p>Make sure to <Link to="/login">login</Link> in order to see all the inner pages and demonstrations</p>
                <p></p>
                <p><b>Take a look at some of my other projects:</b></p>
                <a href="https://health-e.herokuapp.com/#/" target="_blank">Health-e</a>
                <a href="https://clock-in-demo.herokuapp.com/" target="_blank">Clock-In Demo</a>
                <a href="https://www.karmanow.com/" target="_blank">Karma Shopping</a>
            </Col>
        </PageContainer>
    )
}
