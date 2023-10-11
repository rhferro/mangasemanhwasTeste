// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import remove from "../../img/img-shop/cart-dash.svg";
import { useDispatch } from "react-redux";
import { removeToCart } from "../../redux/slice/productSlice";

import "./style.css";

const UserItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    // Disparar a ação para remover o item do carrinho
    dispatch(removeToCart({ id: item.key, newState: false }));
    console.log("name", item.name);
  };

  return (
    <Card className="space" style={{ width: "825px" }}>
      <Card.Body className="colImg">
        <Row>
          <div className="row">
            <div className="col">
              <Card.Img className="imgshop" src={item.img} />
            </div>
            <div className="col-8">
              <Card.Title>{item.name}</Card.Title>
            </div>
            <div className="col price">
              <h5>Preço</h5>
              <div className="row price">
                <p>R$ {item.valor.toFixed(2).replace(".", ",")}</p>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={handleRemoveFromCart} // Chama a função para remover o item
                >
                  <img
                    className="removeButton"
                    src={remove}
                    alt="Botão remover item da lista de compras"
                  />
                </Button>
              </div>
            </div>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default UserItem;
