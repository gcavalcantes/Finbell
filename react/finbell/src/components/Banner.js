import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../img/header-img.svg"

export const Banner = () => {
    return (
        <section className="banner" id=" home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portgolio</span>
                        <h1>{`Hi I'm webdecoded`}<span className="wrap">web developer</span></h1>
                        <p>Programming is my passion!</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"></img>
                    </Col>
                </Row>
            </Container> 

        </section>
    )
}