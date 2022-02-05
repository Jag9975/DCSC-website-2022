import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import './aboutUs.css';
import logo from '../../assets/test-image.jpeg';

function IntroCard({info}) {
  return (
    <Card className="intro-main-card">
      <Row>

        <Col xs="auto" className="col-spacings">
          <Card.Img variant="middle" src={logo} className="card-item-img"/>
          <Card.Body>
              <Card.Text>
                  {info.name}
                  <br></br>
                  {info.position}
              </Card.Text>
          </Card.Body>
        </Col>

        <Col className="col-spacings">
          <div className="text-div">
            <h3> </h3>
            <h7>alksdf aks dfskdljfj sdkjf dskjfjs f. akdflsd fds.f .s fadlfjk sdfkjs dfs.f sdfl sdfklsd. sfd lskfjsdl fs.djf js. fkdslf sdjkl fs .k</h7>
            <br></br>
            <h7>jkdsfjklf sdl fsjd f. ds.fjskdlfjlsdf . asdklfkjl sdafkjl asjdklf ksdf dsjklf sdjkl fjsdkl jlkfsjkjkldjfkjklsdjk fjklsd fsdjkf jsdfjsd fjlsd fskdl fsdjk fsj</h7>
          </div>
        </Col>

      </Row>
    </Card>
  );
}

export default IntroCard;
