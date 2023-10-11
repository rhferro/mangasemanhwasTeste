import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../../img/logo/logo-favicon.svg";
import shop from "../../img/img-shop/shop.svg";

import "./style.css";

const NavigationBar = () => {
  return (
    <Navbar expand="sm" className="brandColor1 " fixed="top">
      <Container className="textColor2">
        <NavLink to={"/"}>
          <Navbar.Brand className="textColor2" href="#home">
            <img alt="" src={logo} className="" /> M & M
          </Navbar.Brand>
        </NavLink>
        <Nav className="me-auto  justify-content-center">
          <NavLink to={"/"}>
            <Nav.Link className="textColor2" href="#home">
              Home
            </Nav.Link>
          </NavLink>
          <NavLink to={"/about"}>
            <Nav.Link className="textColor2" href="#about">
              Quem somos
            </Nav.Link>
          </NavLink>
          <NavLink to={"/Products"}>
            <Nav.Link className="textColor2" href="#products">
              Produtos
            </Nav.Link>
          </NavLink>
          <NavLink to={"/Team"}>
            <Nav.Link className="textColor2" href="#team">
              Equipe
            </Nav.Link>
          </NavLink>
        </Nav>
        <NavLink to={"/Shop"}>
          <Button className="btnPosition" variant="outline-success" size="sm">
            <img alt="" src={shop} className="imgShop" />
          </Button>
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
