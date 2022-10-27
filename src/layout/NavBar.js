import { Nav, Navbar, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import CartWidget from "../components/cartWidget";

const NavBar = () => {
  return (
    <>
      <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Crimson Gamers
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/category/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/category/itemlist">
                Items List
              </Nav.Link>
              <Nav.Link as={Link} to="/category/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/category/about">
                About Us
              </Nav.Link>
              <Navbar.Collapse>
                <Nav.Link href="/category/cartwidget">
                  <CartWidget />
                </Nav.Link>
              </Navbar.Collapse>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default NavBar;
