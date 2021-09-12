import { Component } from "react";
import { Container, Button } from "reactstrap";

// Use Carousel reactstrap component
class Hero extends Component {
  render() {
    return (
      <section className="bg-dark text-light p-5 p-lg-0 py-lg-5 text-center text-sm-start">
        <Container>
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                Eat <span className="text-warning">Fresh-baked</span> Bread Everyday    
              </h1>
              <p className="lead my-4">
                We bake stuffs
              </p>
              <Button color="primary" size="md">
                  Buy our Stuffs
              </Button>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

export default Hero;
