import React from "react";
import { PageContainer, Col, Row } from "./Home.styles";
import { useSelector } from "react-redux";

const Home = () => {
    const isDark = useSelector((state) => state.settings.dark);

    return (
        <PageContainer darkMode={isDark}>
            <Col>
                <h2>
                    <b>Welcome</b>
                </h2>
                <p>
                    <b>This app (WIP) serves as a test for the latest versions of:</b>
                </p>
                <li>Redux toolkit</li>
                <li>React-router</li>
                <li>React 18 updates.</li>
                <li>Next.js - take a look at my latest side-project: 
                    <a
                        href="https://www.redberry-crm.com"
                        target="_blank"
                        rel="noopener noreferrer">
                        <b>redberry-crm.com</b>
                    </a></li>
                <br />
                <p></p>
                <p>
                    <b>It also uses</b> Firebase for authentication, Axios, Styled
                    Components, AntD, Formik etc...
                </p>
                <p>
                    Git:{" "}
                    <a
                        href="https://github.com/DavidMarom/Architecture-01"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://github.com/DavidMarom/Architecture-01
                    </a>
                </p>
                <h1></h1>
                <h1></h1>
                <h1></h1>
                <h3>
                    <b>For UI demonstartion, please see my past projects:</b>
                </h3>

                <p></p>
                <Row>
                    <Col>
                        <a
                            href="https://www.karmanow.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://res.cloudinary.com/dojmo7vcc/image/upload/v1665567545/davidmarom.com/th02_u3mn6z.png"
                                width="220px"
                                alt="th02"
                                border="0"
                            />
                        </a>
                        <p>karmanow.com</p>
                    </Col>

                </Row>
                <h1 />
                <h2>
                    🌈 I'm currently looking for a job as a fullstack / frontend developer
                </h2>
                <Row>
                    <p>I'd be happy to be in touch:</p>
                    <p>054 - 8762043 | </p>
                    <a href="mailto:maromdavid7@gmail.com">
                        maromdavid7@gmail.com
                    </a>
                </Row>
            </Col>
        </PageContainer>
    );
};

export default Home;
