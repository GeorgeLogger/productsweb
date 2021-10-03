import "./Footer.css";
import { Container } from "reactstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Divider from "./Divider";

const Footer = () => {
  return (
    <section id="footer">
      <Container>
        <h2 className="footer-title">
          <span className="title-hl">Life</span>Wheat
        </h2>

        <p>Follow us on:</p>

        <div className="footer-main">
          <div className="footer-section social-media">
            <ul>
              <Link to="#" className="footer-link">
                <li>
                  <FaFacebookF className="soc-med-icon" />
                  Facebook
                </li>
              </Link>
              <Link to="#" className="footer-link">
                <li>
                  <FaTwitter className="soc-med-icon" />
                  Twitter
                </li>
              </Link>
              <Link to="#" className="footer-link">
                <li>
                  <FaInstagram className="soc-med-icon" />
                  Instagram
                </li>
              </Link>
            </ul>
          </div>
          <div className="footer-section footer-menu">
            <ul>
              <Link to="/Contact" className="footer-link">
                <li>Contact us</li>
              </Link>
              <Link to="/About" className="footer-link">
                <li>About us</li>
              </Link>
            </ul>
          </div>
        </div>
      </Container>

      <Divider />

      <Container className="copyright">
        <p>Copyright &copy; 2021 LIFEWHEAT All Rights Reserved</p>
      </Container>
    </section>
  );
};

export default Footer;
