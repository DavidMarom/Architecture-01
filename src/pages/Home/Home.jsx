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
                <li>Redux toolkit, React-router, React 18 updates</li>
                <li>It also uses: Firebase for authentication, Axios, Styled Components, AntD, Formik etc...</li>
                <p>Git:{" "}<a href="https://github.com/DavidMarom/Architecture-01" target="_blank" rel="noopener noreferrer">https://github.com/DavidMarom/Architecture-01</a></p>
                <br />

                <h2>Next.js: take a look at my latest side-project:
                    <a
                        href="https://www.redberry-crm.com"
                        target="_blank"
                        rel="noopener noreferrer">
                        <b> redberry-crm.com</b>
                    </a></h2>
                <br />
                <p></p>
                <p>
                </p>
                <h1></h1>
                <h1></h1>
                <h3>
                    <b>For UI demonstartion, see my past projects:</b>
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
                    <p>David Marom:</p>
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
