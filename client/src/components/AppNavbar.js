import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-1">
        <Container>
          <Link to="/" className="navbar-brand">
            Products
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Products" className="nav-link">
                  Our Products
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/About" className="nav-link">
                  About Us
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Contact" className="nav-link">
                  Contact Us
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
