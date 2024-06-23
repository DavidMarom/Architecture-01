import React from "react";
import { PageContainer, Col, Row } from "./Home.styles";
import { useSelector } from "react-redux";

const Home = () => {
    const isDark = useSelector((state) => state.settings.dark);

    return (
        <PageContainer darkMode={isDark}>
            <Col>
                <h2><b>David Marom</b> | Freelance web developer</h2>
                <p><b>React, Angular (Typescript)</b>, Next.js, Redux, TanStack, All modern libraries…</p>
                <p>Node.js (express), Python, Flask, Open api</p>
                <p>Vue, PHP Laravel, Wordpress</p>
                <br/>
                <p>GitHub:{" "}<a href="https://github.com/DavidMarom" target="_blank" rel="noopener">https://github.com/DavidMarom</a></p>
                <p>LinkedIn:{" "}<a href="https://www.linkedin.com/in/maromdavid/" target="_blank" rel="noopener">https://www.linkedin.com/in/maromdavid/</a></p>
                <p>+972 54 5779917</p>
                <br />
                <br />
                <h3><b>Some of my projects:</b></h3>
                <Row>
                    <Col>
                        <a href="https://www.karmanow.com/" target="_blank" rel="noopener noreferrer">
                            <img src="https://res.cloudinary.com/dojmo7vcc/image/upload/v1719121758/davidmarom.com/u1gq4sbvfchjzj20khx5.jpg" height="150px" alt="th02" border="0" />
                        </a>
                        <p><b>karmanow.com</b></p>
                    </Col>
                    <Col>
                        <a href="https://www.redberry-crm.com/" target="_blank" rel="noopener noreferrer">
                            <img src="https://res.cloudinary.com/dojmo7vcc/image/upload/v1719122419/davidmarom.com/vth0u72rigibchidqegu.jpg" height="150px" alt="th02" border="0" />
                        </a>
                        <p><b>redberry-crm.com</b></p>
                        <a href="https://github.com/DavidMarom/redberry-crm" target="_blank" rel="noopener noreferrer">Code on github</a>
                    </Col>

                </Row>
                <br /><br />


            </Col>
        </PageContainer>
    );
};

export default Home;
