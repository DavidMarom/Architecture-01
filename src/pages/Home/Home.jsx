import React from "react";
import { PageContainer, Col, Row } from "./Home.styles";
import { useSelector } from "react-redux";

const Home = () => {
    const isDark = useSelector((state) => state.settings.dark);

    return (
        <PageContainer darkMode={isDark}>
            <Col>
                <h2><b>David Marom</b></h2>
                <p><b>Freelance web developer | available</b></p>
                <p>GitHub:{" "}<a href="https://github.com/DavidMarom" target="_blank" rel="noopener">https://github.com/DavidMarom</a></p>
                <p>LinkedIn:{" "}<a href="https://www.linkedin.com/in/maromdavid/" target="_blank" rel="noopener">https://www.linkedin.com/in/maromdavid/</a></p>
                <p>054-5779917</p>
                <br />
                <br />
                <h3><b>Past projects:</b></h3>
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
                        <a href="https://github.com/DavidMarom/redberry-crm" target="_blank" rel="noopener noreferrer">Code on github</a>
                    </Col>

                </Row>
                <br /><br />
                <br /><br />
                
            </Col>
        </PageContainer>
    );
};

export default Home;
