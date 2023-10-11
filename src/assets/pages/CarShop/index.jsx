// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserItem from "../../components/UserItem";
import UserPayment from "../../components/UserPayment";
import UserAdress from "../../components/UserAdress";
import { useSelector } from "react-redux";

const CarShop = () => {
  const productList = useSelector((state) => state.product);
  // Filtrar os itens com inCart igual a true
  const itemsInCart = productList.filter((item) => item.inCart);

  // Calcular o valor total dos itens no carrinho
  const totalValue = itemsInCart.reduce((total, item) => total + item.valor, 0);

  return (
    <div>
      <Container fluid>
        <Row>
          <h1>Lista de Compras</h1>
        </Row>
        <Row>
          <Col>
            {/* Renderizar os componentes UserItem apenas para os itens em cart */}
            {itemsInCart.map((item) => (
              <UserItem item={item} key={item.key} />
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Total</h5>
          </Col>
          <Col xs={2}>
            <p>
              <strong>R$ {totalValue.toFixed(2).replace(".", ",")}</strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <UserPayment />
          </Col>
          <Col xs={6}>
            <UserAdress />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CarShop;
