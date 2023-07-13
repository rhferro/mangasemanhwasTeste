// import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./style.css";

const Carrousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <div className="imgCarrousel">
          <img
            className="d-block w-100 "
            src="src\assets\img\carrousel-IMG\biblioteca-pessoal.png"
          />
        </div>
        <Carousel.Caption className="textCarrousel">
          <h3>Encontre sua próxima aventura</h3>
          <p>Mangás usados. Novas aventuras!.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="imgCarrousel">
          <img
            className="d-block w-100"
            src="src\assets\img\carrousel-IMG\negocie.png"
          />
          <Carousel.Caption className="textCarrousel">
            <h3>Negocie</h3>
            <p className="d-block w-100">
              Combine, converse, negocie os valores com o vendedor.
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="imgCarrousel">
          <img
            className="d-block w-100"
            src="src\assets\img\carrousel-IMG\classifique.png"
            alt="Second slide"
          />
        </div>
        <Carousel.Caption className="textCarrousel">
          <h3>Classifique os vendedores</h3>
          <p>Classifique e conte suas experiencias com o vendedor.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="marginCarrousel" interval={3000}>
        <div className="imgCarrousel">
          <img
            className="d-block w-100"
            src="src\assets\img\carrousel-IMG\segurança.png"
            alt="Third slide"
          />
        </div>
        <Carousel.Caption className="textCarrousel">
          <h3>Segurança</h3>
          <p>Receba suas transações e produtos em segurança.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
