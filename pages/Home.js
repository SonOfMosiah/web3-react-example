import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import HomeCard from "../components/Home/HomeCard";
import Type from "../components/Home/Type";
import Image from "next/image";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I&apos;m
                <strong className="main-name"> Ammon Werner</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Image
                src={"/Assets/home-main.svg"}
                alt="home pic"
                className="img-fluid"
                layout='fill'
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeCard />
    </section>
  );
}

export default Home;
