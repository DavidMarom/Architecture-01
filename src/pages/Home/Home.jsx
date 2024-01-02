import React from "react";
import { PageContainer, Col, Row } from "./Home.styles";
import { useSelector } from "react-redux";

const Home = () => {
    const isDark = useSelector((state) => state.settings.dark);

    return (
        <PageContainer darkMode={isDark}>
            <Col>
                <h2><b>Welcome</b></h2>
                <p><b>This app is my sandbox for:</b></p>
                <li>Redux toolkit, React-router, React 18 updates, Firebase, Axios, Styled Components, AntD, Formik etc...</li>
                <p>Git:{" "}<a href="https://github.com/DavidMarom/Architecture-01" target="_blank" rel="noopener noreferrer">https://github.com/DavidMarom/Architecture-01</a></p>
                <br />


                <br />

                <h3><b>My projects:</b></h3>


                <Row>
                    <Col>
                        <a href="https://www.karmanow.com/" target="_blank" rel="noopener noreferrer">
                            <img src="https://res.cloudinary.com/dojmo7vcc/image/upload/v1665567545/davidmarom.com/th02_u3mn6z.png" height="150px" alt="th02" border="0" />
                        </a>
                        <p><b>karmanow.com</b></p>
                    </Col>
                    <Col>
                        <a href="https://www.redberry-crm.com/" target="_blank" rel="noopener noreferrer">
                            <img src="https://res.cloudinary.com/dojmo7vcc/image/upload/v1704109984/rb-th_h8bgsc.png" height="150px" alt="th02" border="0" />
                        </a>
                        <p><b>redberry-crm.com</b></p>
                        <p>My own side project written with</p>
                        <p>Next.JS</p>
                        <a href="https://github.com/DavidMarom/redberry-crm" target="_blank" rel="noopener noreferrer">Code on github</a>
                    </Col>

                </Row>
                <br /><br />
                <br /><br />
                <h2>
                    🌈 I'm currently looking for a job as a fullstack / frontend developer
                </h2>
                <Row>
                    <p>David Marom:</p>
                    <p>054 - 8762043 | </p>
                    <a href="mailto:maromdavid7@gmail.com">maromdavid7@gmail.com</a>
                </Row>
            </Col>
        </PageContainer>
    );
};

export default Home;
