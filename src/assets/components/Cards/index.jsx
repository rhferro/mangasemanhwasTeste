/* eslint-disable react/prop-types */
import { Card, Button, CardGroup } from "react-bootstrap";
import cartAdd from "../../img/img-shop/cart-plus.svg";
import cartRemove from "../../img/img-shop/cart-dash.svg";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../../redux/slice/productSlice";

const Cards = ({ itensLinha }) => {
  const cartItem = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleBuyButton = (productId) => {
    const item = cartItem.find((item) => item.key === productId);
    console.log("Item:", item); // Adicione este console.log para verificar o item

    if (item) {
      if (item.inCart) {
        dispatch(removeToCart({ id: productId, newState: false }));
        console.log("Removendo do carrinho:", productId); // Adicione este console.log para verificar a remoção
      } else {
        dispatch(addToCart({ id: productId, newState: true }));
        console.log("Adicionando ao carrinho:", productId); // Adicione este console.log para verificar a adição
      }
    }
    console.log("Lista de carrinho:", cartItem); // Adicione este console.log para verificar o estado do carrinho
  };

  const isItemInCart = (productId) => {
    return cartItem.some((item) => item.key === productId && item.inCart);
  };

  const getButtonVariant = (productId) =>
    isItemInCart(productId) ? "danger" : "success";

  const getButtonImage = (productId) =>
    isItemInCart(productId) ? cartRemove : cartAdd;

  const getButtonLabel = (productId) =>
    isItemInCart(productId) ? "Remover" : "Carrinho";

  return (
    <>
      {itensLinha.map((product) => (
        <CardGroup key={product.key}>
          <Card className="marginCard">
            <Card.Img className="imgCard" src={product.img} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                R$ {product.valor.toFixed(2).replace(".", ",")}
              </Card.Text>
              <Button
                size="sm"
                variant={getButtonVariant(product.key)}
                className="btn-buttom"
                onClick={() => handleBuyButton(product.key)} // Passe o productId
              >
                <img
                  className="imgShop"
                  src={getButtonImage(product.key)}
                  alt={getButtonLabel(product.key)}
                  id="buy"
                />
                <p className="cart">{getButtonLabel(product.key)}</p>
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      ))}
    </>
  );
};

export default Cards;
