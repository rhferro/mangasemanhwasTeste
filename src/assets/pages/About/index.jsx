import { Col, Container, Image, Row } from "react-bootstrap";

import aboutIMG from "../../img/logo/About_logo.png";

// import React from "react";
import "./style.css";

const About = () => {
  return (
    <Container>
      <Row className="w-100">
        <Col md={4}>
          <Image className="imgLogo" src={aboutIMG} roundedCircle />
        </Col>
        <Col md={6}>
          <h1>Sobre Nós</h1>

          <p>
            Bem-vindo à nossa loja de mangás e manhwas usados! Somos uma loja
            voltada para os entusiastas que desejam colecionar ou adquirir esses
            produtos a preços mais acessíveis. Nosso compromisso é oferecer um
            catálogo diversificado, cuidadosamente selecionado, garantindo que
            cada item esteja em ótimo estado. Valorizamos a satisfação do
            cliente e estamos aqui para ajudar em sua jornada de colecionador,
            oferecendo um atendimento acolhedor e uma experiência de compra
            agradável.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
