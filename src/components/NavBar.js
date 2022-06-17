import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={"/images/logo/logo.png"} alt="Logo" />
          <span>Magicubes</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/categoria/Cubico">
              Cúbicos
            </Nav.Link>

            <Nav.Link as={NavLink} to="/categoria/Cuboide">
              Cuboides
            </Nav.Link>

            <Nav.Link as={NavLink} to="/categoria/Especial">
              Especiales
            </Nav.Link>

            <Nav.Link as={NavLink} to="/categoria/Minx">
              Minx
            </Nav.Link>
            <Nav.Link as={NavLink} to="/404">
              Contacto
            </Nav.Link>
            <Nav.Link as={NavLink} to="/carrito">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
