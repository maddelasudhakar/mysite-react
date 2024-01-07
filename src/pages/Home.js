import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

export default function Home() {
    return (
        <>
            <section className="section-padding">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="banner-block">
                                <h1 className="maddela-designer">Maddela Sudhakar</h1>
                                <h2>UI/UX Designer</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}