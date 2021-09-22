import { Container } from "reactstrap";
import { Link } from "react-router-dom";

// Use Carousel reactstrap component
const Hero = () => {
  return (
    <section className="bg-dark text-light p-5 p-lg-0 py-lg-5 text-center text-sm-start">
      <Container>
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              Eat <span className="text-warning">Fresh-baked</span> Bread
              Everyday
            </h1>
            <p className="lead my-4">We bake stuffs</p>
            <Link to="/Products" className="btn btn-primary btn-md">Buy our Stuffs</Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
