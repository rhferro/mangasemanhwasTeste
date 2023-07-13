/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";

import "./style.css";
import { Container, Image, Col, Row } from "react-bootstrap";

const Footer = () => {
  const [isScrollEnd, setIsScrollEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos =
        window.scrollY ||
        window.scrollTop ||
        document.documentElement.scrollTop;

      // Verifica se o scroll chegou ao final da página
      if (
        scrollPos + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        setIsScrollEnd(true);
      } else {
        setIsScrollEnd(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid className="textColor footer">
      <div id="content" className={isScrollEnd ? "scroll-end" : ""}>
        <Row className="iconsAndItens">
          <Col xs={6} md={4}>
            <Image
              className="icons"
              src="src\assets\img\logo\logoFooter\chat-left-dots-fill.svg"
              alt="chat icon"
            />
            <p className="iconsText">
              Combine valores e conte suas experiências em nossa plataforma.{" "}
            </p>
          </Col>
          <Col xs={6} md={4}>
            <Image
              className="icons "
              src="src\assets\img\logo\logoFooter\credit-card-2-back-fill.svg"
              alt="credit card icon"
            ></Image>
            <p className="iconsText">Compre via débito, crédito e Pix.</p>
          </Col>
          <Col xs={6} md={4}>
            <Image
              className="icons"
              src="src\assets\img\logo\logoFooter\truck.png"
              id="textColor"
              alt="truck icon"
              // <a href="https://www.flaticon.com/free-icons/delivery" title="delivery icons">Delivery icons created by Freepik - Flaticon</a>
            />
            <p className="iconsText">Entrega feita via Correios.</p>
          </Col>
        </Row>
        <br />
        {/* <p className="textColor description">
          Projeto construído visando a finalização do trabalho para o título de
          desenvolvedor React, desenvolvido pela plataforma Descomplica.
        </p> */}
      </div>
    </Container>
  );
};

export default Footer;
