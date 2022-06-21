import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
  let linksArray = ["Cúbicos", "Cuboides", "Especiales", "Minx"];
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
            {linksArray.map((link) => (
              <Nav.Link as={NavLink} to={`/categoria/${link}`} key={link}>
                {link}
              </Nav.Link>
            ))}
            <Nav.Link as={NavLink} to="/404">
              Contacto
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
