import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import maddelaSudhakar from '../assets/img/maddela-sudhakar.png';
import star from '../assets/img/star.svg';
import Marquee  from "react-fast-marquee";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function Home() {

    return (
        <>
        <section className="bg1 banner-section">
            <Container className="section-padding">
                <Row className="vertical-center">
                    <div>
                        {/* <span className="star">*</span> */}
                        <img src={star} alt="Star" className="star" />
                    </div>
                    <span className="designation">I'm UI/UX Designer</span>
                    <h1 className="maddela-sudhakar">Maddela Sudhakar</h1>
                    {/* <img src={maddelaSudhakar} alt="Maddela Sudhakar" className="profile-pic" /> */}
                </Row>
            </Container>
        </section>

        <section>
            <div className="container">
                <div className="row">
                <Marquee pauseOnHover on>
                    <div className="marquee-container">
                        <div className="child marquee-link">Lorem Lipsum is Lorem</div>
                    </div>
                    <div className="marquee-container">
                        <div className="child marquee-link">Lorem Lipsum is Lorem</div>
                    </div>
                    <div className="marquee-container">
                        <div className="child marquee-link">Lorem Lipsum is Lorem</div>
                    </div>
                    <div className="marquee-container">
                        <div className="child marquee-link">Lorem Lipsum is Lorem</div>
                    </div>
                    <div className="marquee-container">
                        <div className="child marquee-link">Lorem Lipsum is Lorem</div>
                    </div>
                </Marquee>
                </div>
            </div>
        </section>
        </>
    )
}