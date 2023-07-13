// import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";

import "./style.css";

const Publicity = () => {
  return (
    <Container>
      <Col className="publiRight">
        <Row>
          <h6>Patrocínio</h6>
        </Row>
        <Row>
          <Figure>
            <Figure.Image
              className="patrocinio"
              alt="Restaurante de Ramen (Naruto)"
              src="src\assets\img\patrocinio-IMG\patrocinio-lámen-store.png"
              rounded
            />
            <Figure.Caption>Ramen Restaurant</Figure.Caption>
          </Figure>
        </Row>
        <Row>
          <Figure>
            <Figure.Image
              className="patrocinio"
              alt="Governo Mundial (One Piece)"
              src="src\assets\img\patrocinio-IMG\patrocinio-governo-federal.png"
              rounded
            />
            <Figure.Caption>Governo Federal</Figure.Caption>
          </Figure>
        </Row>
        <Row>
          <Figure>
            <Figure.Image
              className="patrocinio"
              alt="Logo do Descomplica (Empresa real)"
              src="src\assets\img\patrocinio-IMG\patrocinio-descomplica.png"
              rounded
            />
            <Figure.Caption>Descomplica</Figure.Caption>
          </Figure>
        </Row>
      </Col>
    </Container>
  );
};

export default Publicity;
