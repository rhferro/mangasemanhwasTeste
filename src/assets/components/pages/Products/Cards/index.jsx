import { Card, CardGroup, Button } from "react-bootstrap";

import OP01 from "../../../../img/products/OP0001.jpg";
import NC01 from "../../../../img/products/NC0001.jpg";
import B01 from "../../../../img/products/B0001.jpg";
import TK01 from "../../../../img/products/TK0001.jpg";
import SL01 from "../../../../img/products/SL0001.jpg";
import DIT from "../../../../img/products/DJunji Ito.jpg";

const Cards = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <CardGroup>
        <Card style={{ width: "14rem", margin: "0  10px 10px 0" }}>
          <Card.Img className="imgCard" variant="top" src={OP01} />
          <Card.Body>
            <Card.Title>One Piece - Vol. 01</Card.Title>
            <Card.Text>R$ 14,50</Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "14rem", margin: "0  10px 10px 0" }}>
          <Card.Img variant="top" src={NC01} className="imgCard" />
          <Card.Body>
            <Card.Title>Naruto Clássico - Vol. 01</Card.Title>
            <Card.Text>R$ 14,50</Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "14rem", margin: "0  10px 10px 0" }}>
          <Card.Img variant="top" src={B01} />
          <Card.Body>
            <Card.Title>Bleach - Vol. 01</Card.Title>
            <Card.Text>R$ 14,50</Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card style={{ width: "14rem", margin: "0  10px 10px 0" }}>
          <Card.Img variant="top" src={TK01} />
          <Card.Body>
            <Card.Title>Toriko - Vol. 01</Card.Title>
            <Card.Text>R$ 21,50</Card.Text>
            <Button style={{ bottom: "2px" }} variant="primary">
              Comprar
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "14rem", margin: "0  10px 10px 0" }}>
          <Card.Img variant="top" src={SL01} />
          <Card.Body>
            <Card.Title>Solo Leveling - Vol. 01</Card.Title>
            <Card.Text>R$ 44,99</Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "14rem", margin: "0  10px 10px 0" }}>
          <Card.Img variant="top" src={DIT} />
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
