import { Container } from "reactstrap";
import "./Section.css";

const Section = () => {
  return (
    <section className="home-section">
      <Container className="section-file">
        <img src="/images/bakery-1.jpg" alt="bakery-1" />
        <div className="caption">
          <h2>Browse our Menu</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cupiditate beatae ullam. Optio, quidem expedita.</p>
        </div>
      </Container>
    </section>
  );
};

export default Section;
