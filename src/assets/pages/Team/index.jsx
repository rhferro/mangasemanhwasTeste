import { Col, Container, Image, Row } from "react-bootstrap";

import yo from "../../img/img-team/programer-owner.jpg";
import gpt from "../../img/img-team/gpt-logo.png";

const Team = () => {
  return (
    <Container>
      <h1>Sobre Nós</h1>
      <Row>
        <Col xs={6} md={4}>
          <Image className="imgLogo" src={yo} roundedCircle />
        </Col>
        <Col>
          <br />
          <br />
          <h5>Raphael Ferro</h5>
          <p>
            Estudante de programação e implementador desse site. Apaixonado por
            tecnologia e em entender como ela funciona.
          </p>
        </Col>
      </Row>
      <br /> <br />{" "}
      <Row>
        <Col>
          <br />
          <h5>Chat GPT</h5>
          <p>
            IA auxiliadora fornencendo informações de mercado e sugestões de
            abordagem do tema.
          </p>
        </Col>
        <Col xs={6} md={4}>
          <Image className="imgLogo" src={gpt} roundedCircle />
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
