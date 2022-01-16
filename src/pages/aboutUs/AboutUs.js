import React from "react";
import IntroCard from "./IntroCard.js";
import {Container, Row} from 'react-bootstrap'
import './aboutUs.css';

const memberInfo = [
  {
    name: "Tom Holland",
    position: "Director of Technology",
    info: "Hello :)"
  }
]

function AboutUs() {
  return (
    <Container className="aboutus-container">
      <h1>About Us</h1>
      <Row className="justify-content-md-center">
        <IntroCard info={memberInfo[0]}/>
        <IntroCard info={memberInfo[0]}/>
        <IntroCard info={memberInfo[0]}/>
        <IntroCard info={memberInfo[0]}/>
        <IntroCard info={memberInfo[0]}/>
      </Row>
    </Container>
  );
}

export default AboutUs;
