import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import './aboutUs.css';
import logo from '../../assets/test-image.jpeg';

function IntroCard({info}) {
  return (
    <Card className="intro-main-card">
      <Row>
      <Col className="col-spacings">
        <Card.Img variant="middle" src={logo} className="card-item-img"/>
        <Card.Body>
            <Card.Title>{info.name}</Card.Title>
            <Card.Text>
                {info.position}
            </Card.Text>
        </Card.Body>
      </Col>
      <Col className="col-spacings">
        <div className="text-div">
          <h3> </h3>
          <h3>Name, year and major</h3>
          <h6>couple sentences about you</h6>
        </div>
      </Col>
      </Row>
    </Card>
  );
}

export default IntroCard;
