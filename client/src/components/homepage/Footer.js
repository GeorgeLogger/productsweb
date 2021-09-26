import "./Footer.css";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <section id="footer">
      <Container>
        <h2>Product</h2>
        <div className="footer-main">
          <div className="footer-section footer-menu">
            <ul>
              <li>contact us</li>
              <li>about us</li>
            </ul>
          </div>
          <div className="footer-section social-media">
            <p>follow us on</p>
            <ul>
              <li>facebook</li>
              <li>twitter</li>
              <li>instagram</li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="copyright">
        <p>Copyright &copy; 2021</p>
      </Container>
    </section>
  );
};

export default Footer;
