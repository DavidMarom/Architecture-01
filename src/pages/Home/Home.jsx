import React from 'react'
import { PageContainer } from './Home.styles'
import { useSelector } from 'react-redux'
import { Col } from './Home.styles'
import { Link } from "react-router-dom";

export const Home = () => {
    const isDark = useSelector(state => state.settings.dark)

    return (
        <PageContainer darkMode={isDark} >
            <Col>
                <h1>Hi</h1>
                <p>This app serves as a test for the latest Redux toolkit, React-router and React 18 updates.</p>
                <p>It also uses Firebase for authentication, AntD and Formik libraries etc...</p>
                <p>It is a work in progress.</p>
                <p></p>
                <p>Make sure to <Link to="/login">login</Link> in order to see all the inner pages and demonstrations</p>
            </Col>
        </PageContainer>
    )
}
