import React from 'react'
import { PageContainer, Col, Row } from './Home.styles'
import { useSelector } from 'react-redux'

const Home = () => {
    const isDark = useSelector(state => state.settings.dark)

    return (
        <PageContainer darkMode={isDark} >
            <Col>
                <h2><b>Welcome</b></h2>
                <p><b>This app (WIP) serves as a test for the latest versions of:</b></p>
                <li>Redux toolkit</li>
                <li>React-router</li>
                <li>React 18 updates.</li>
                <li>Next.JS (link to other site)</li>
                <br />
                <p></p>
                <p><b>It also uses</b> Firebase for authentication, Axios, Styled Components, AntD, Formik etc...</p>
                <p>Git: <a href="https://github.com/DavidMarom/Architecture-01" target="_blank" rel="noopener noreferrer">https://github.com/DavidMarom/Architecture-01</a></p>
                <h1></h1><h1></h1><h1></h1>
                <h3><b>For UI demonstartion, please see my past projects:</b></h3>

                <p></p>
                <Row>
                    <Col>
                        <a href="https://www.karmanow.com/" target="_blank" rel="noopener noreferrer">
                            <img src="https://res.cloudinary.com/dojmo7vcc/image/upload/v1665567545/davidmarom.com/th02_u3mn6z.png" width="270px" alt="th02" border="0" />
                        </a>
                        <p>karmanow.com</p>
                    </Col>

                    <Col>
                        <a href="https://health-e.herokuapp.com/#/" target="_blank" rel="noopener noreferrer">
                            <img src="https://res.cloudinary.com/dojmo7vcc/image/upload/v1665567393/davidmarom.com/th01_o9z1yb.png" width="270px" alt="th01" border="0" />
                        </a>
                        <p>Health Events</p>
                    </Col>
                </Row>

            </Col >
        </PageContainer >
    )
}

export default Home