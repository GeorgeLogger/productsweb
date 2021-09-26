import { Container } from "reactstrap";
import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ section }) => {
  return (
    <section id={section} className="home-section">
      <Container className="section-file">
        <img src="/images/bakery-1.jpg" alt="bakery-1" />
        <div className="caption">
          <h2>Browse our Menu</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            cupiditate beatae ullam. Optio, quidem expedita.
          </p>
        </div>
      </Container>
    </section>
  );
};

Section.propTypes = {
  section: PropTypes.string.isRequired,
};

export default Section;
