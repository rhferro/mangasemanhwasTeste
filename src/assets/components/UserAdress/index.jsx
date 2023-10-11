import { Col, Row, Form } from "react-bootstrap";

const UserAdress = () => {
  return (
    <Form>
      <Form.Group as={Col}>
        <Row className="mb-3">
          <Form.Label>CEP</Form.Label>
          <Form.Control type="number" placeholder="nº do cartão" />
        </Row>
        <Row className="mb-3">
          <Form.Label>Nome da Rua</Form.Label>
          <Form.Control type="text" placeholder="Rua ABV" />
        </Row>
        <Row className="mb-3">
          <Form.Label>Nº</Form.Label>
          <Form.Control type="number" placeholder="Rua ABC" />
          <Form.Label>Bairro</Form.Label>
          <Form.Control type="number" placeholder="Bairro" />
        </Row>
        <Row className="mb-3">
          <Form.Label>Cidade</Form.Label>
          <Form.Control type="number" placeholder="Cidade" />
          <Form.Label>Estado</Form.Label>
          <Form.Control type="number" placeholder="Estado" />
        </Row>

        <Row className="mb-3">
          <Form.Label>Complemento</Form.Label>
          <Form.Control type="text" placeholder="apt 01, bloco A" />
        </Row>
      </Form.Group>
    </Form>
  );
};

export default UserAdress;
