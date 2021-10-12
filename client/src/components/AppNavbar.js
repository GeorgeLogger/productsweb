import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/Login";
import Logout from "./auth/Logout";

const AppNavbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.authReducer);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const authLinks = (
    <Fragment>
      <NavItem>
        <Logout />
      </NavItem>
      <NavItem>
        <span className="navbar-text">
          <strong>{user && `Welcome ${user.name}`}</strong>
        </span>
      </NavItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-1">
        <Container>
          <Link
            to="/"
            className="navbar-brand"
            style={{ color: "var(--clr-brown)" }}
          >
            <span style={{ color: "var(--clr-gold)" }}>Life</span>Wheat
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
              {isAuthenticated ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
