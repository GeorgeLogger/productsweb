import { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-1">
          <Container>
            <NavbarBrand href="/">Products</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ms-auto" navbar>
                <NavItem>
                  <Link to="/" className="nav-link">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/Products" className="nav-link">Our Products</Link>
                </NavItem>
                <NavItem>
                  <Link to="#" className="nav-link">About Us</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
