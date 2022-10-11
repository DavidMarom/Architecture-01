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
                <p>Git: <a href="https://github.com/DavidMarom/Architecture-01" target="_blank" rel="noopener noreferrer">https://github.com/DavidMarom/Architecture-01</a></p>
                <p></p>
                <p>Make sure to <Link to="/login">login</Link> in order to see all the inner pages and demonstrations</p>
                <p></p>
                <h3><b>For UI-oriented projects:</b></h3>
                <a href="https://health-e.herokuapp.com/#/" target="_blank" rel="noopener noreferrer">Health-e</a>
                <a href="https://clock-in-demo.herokuapp.com/" target="_blank" rel="noopener noreferrer">Clock-In Demo</a>
                <a href="https://www.karmanow.com/" target="_blank" rel="noopener noreferrer">Karma Shopping</a>
                <p></p>
                <a href="https://davidmarom.com/infrafstructure.png" target="_blank" rel="noopener noreferrer">
                    <img src="infrastructure.png" alt="infrastructure" width="500px" />
                </a>
            </Col>
        </PageContainer>
    )
}
