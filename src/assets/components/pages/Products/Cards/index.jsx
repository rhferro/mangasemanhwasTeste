import { Card, CardGroup, Button } from "react-bootstrap";
// Col, Row, , Figure
// import React from "react";

const Cards = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <CardGroup>
        <Card style={{ width: "14rem", margin: "0  10px 10px 0" }}>
          <Card.Img
            className="imgCard"
            variant="top"
            src="src\assets\img\products\OP0001.jpg"
          />
          <Card.Body>
            <Card.Title>One Piece - Vol. 01</Card.Title>
            <Card.Text>R$ 14,50</Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "14rem", margin: "0  10px 10px 0" }}>
          <Card.Img
            variant="top"
            src="src\assets\img\products\NC0001.jpg"
            className="imgCard"
          />
          <Card.Body>
            <Card.Title>Naruto Clássico - Vol. 01</Card.Title>
            <Card.Text>R$ 14,50</Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "14rem", margin: "0  10px 10px 0" }}>
          <Card.Img variant="top" src="src/assets/img/products/B0001.jpg" />
          <Card.Body>
            <Card.Title>Bleach - Vol. 01</Card.Title>
            <Card.Text>R$ 14,50</Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card style={{ width: "14rem", margin: "0  10px 10px 0" }}>
          <Card.Img variant="top" src="src\assets\img\products\TK0001.jpg" />
          <Card.Body>
            <Card.Title>One Piece - Vol. 01</Card.Title>
            <Card.Text>R$ 21,50</Card.Text>
            <Button style={{ bottom: "2px" }} variant="primary">
              Comprar
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "14rem", margin: "0  10px 10px 0" }}>
          <Card.Img variant="top" src="src\assets\img\products\SL0001.jpg" />
          <Card.Body>
            <Card.Title>Solo Leveling - Vol. 01</Card.Title>
            <Card.Text>R$ 44,99</Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "14rem", margin: "0  10px 10px 0" }}>
          <Card.Img
            variant="top"
            src="src\assets\img\products\DJunji Ito.jpg"
          />
          <Card.Body>
            <Card.Title>Dismorfos - Junji Ito - Vol. 01</Card.Title>
            <Card.Text>R$ 14,50</Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      </CardGroup>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Cards;
