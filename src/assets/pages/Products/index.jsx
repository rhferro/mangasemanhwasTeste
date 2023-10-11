/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, CardGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

import Cards from "../../components/Cards";

const Products = () => {
  const productList = useSelector((state) => state.product);

  const itemsPerRow = 3;
  const totalRows = Math.ceil(productList.length / itemsPerRow);

  const renderLinhas = () => {
    const rows = [];

    for (let linhaIndex = 0; linhaIndex < totalRows; linhaIndex++) {
      const startIndex = linhaIndex * itemsPerRow;
      const endIndex = startIndex + itemsPerRow;
      const itensLinha = productList.slice(startIndex, endIndex);

      rows.push(
        <CardGroup key={linhaIndex}>
          <Cards
            itensLinha={itensLinha}
            className="productPage"
            cartItems={productList}
          />
        </CardGroup>
      );
    }
    return rows;
  };

  return (
    <Container>
      {/* Render lines here */}
      <div className="card-group-width">{renderLinhas()}</div>
    </Container>
  );
};

export default Products;
