import { Col, Row, Form } from "react-bootstrap";

const UserPayment = () => {
  return (
    <Form>
      <Form.Group as={Col} controlId="formGridCardNumber">
        <Row className="mb-3">
          <Form.Label>Numero do Cartão</Form.Label>
          <Form.Control type="number" placeholder="nº do cartão" />
        </Row>
        <Row className="mb-3">
          <Form.Label>Código de segurança</Form.Label>
          <Form.Control type="number" placeholder="###" />
        </Row>
        <Row className="mb-3">
          <Form.Select aria-label="Default select example">
            <Form.Label>Parcelas</Form.Label>
            <option></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </Form.Select>
        </Row>
      </Form.Group>
    </Form>
  );
};

export default UserPayment;
