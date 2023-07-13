// import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

const NavigationBar = () => {
  return (
    <>
      <Navbar expand="sm" className="brandColor1 " fixed="top">
        <Container className="textColor2">
          <Navbar.Brand className="textColor2" href="#home">
            <img
              alt=""
              src="src\assets\img\logo\logo-favicon.svg"
              // height="30"
              className=""
            />
            <Link to={"/"}> M & M</Link>
          </Navbar.Brand>
          <Nav className="me-auto  justify-content-center">
            <Nav.Link className="textColor2" href="#home">
              <Link to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link className="textColor2" href="#link">
              <Link to={"/about"}> Quem somos </Link>
            </Nav.Link>
            <Nav.Link className="textColor2" href="#link">
              <Link to={"/Products"}>Produtos</Link>
            </Nav.Link>
            <Nav.Link className="textColor2" href="#link">
              <Link to={"/Team"}>Equipe</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
