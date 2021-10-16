import { Container } from "reactstrap";
import PropTypes from "prop-types";
import "./Section.css";
import { Link } from "react-router-dom";

const Section = ({ section, title }) => {
  return (
    <section id={section} className="home-section">
      <Container className="section-file">
        <img src="/images/bakery-1.jpg" alt="bakery-1" />
        <div className="caption">
          <Link to="./Products" className="card-link">
            <div style={{ height: "100%" }}>
              <h2>{title}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur cupiditate beatae ullam. Optio, quidem expedita.
              </p>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

Section.defaultProps = {
  title: "Browse our Menu",
};

Section.propTypes = {
  title: PropTypes.string,
  section: PropTypes.string.isRequired,
};

export default Section;
