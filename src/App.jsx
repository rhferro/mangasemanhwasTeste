import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

//COMPONENTS
import NavigationBar from "./assets/components/NavigationBar";
import Footer from "./assets/components/Footer";
import Publicity from "./assets/components/Publicity";

//PAGES
import MainContent from "./assets/pages/MainContent";
import CarShop from "./assets/pages/CarShop";
import About from "./assets/pages/About";
import Products from "./assets/pages/Products";
import Team from "./assets/pages/Team";

import "./App.css";

function App() {
  return (
    <>
      <NavigationBar />

      <Container fluid>
        <Row>
          <Col
            xs={12}
            style={{ marginTop: "6rem" }}
            className="carrouselPosition"
          >
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/about" element={<About />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Team" element={<Team />} />
              <Route path="/Shop" element={<CarShop />} />
            </Routes>
          </Col>

          <Col>
            <Publicity />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer className="marginFooter" />
    </>
  );
}

export default App;
