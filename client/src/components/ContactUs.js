import { Component } from "react";
import { Container } from "reactstrap";

class ContactUs extends Component {
  render() {
    return (
      <section id="contact-us" className="bg-primary">
        <Container>
          <div class="row g-4">
            <div class="col-md">
              <h2 class="text-center mb-4">Contact Info</h2>
              <ul class="list-group list-group-flush lead">
                <li class="list-group-item">
                  <span class="fw-bold">Main Location:</span> 50 Main st Boston
                  MA
                </li>
                <li class="list-group-item">
                  <span class="fw-bold">Enrollment Phone:</span> (555)555-5555
                </li>
                <li class="list-group-item">
                  <span class="fw-bold">Student Phone:</span> (333)333-3333
                </li>
                <li class="list-group-item">
                  <span class="fw-bold">Enrollment Email:</span>{" "}
                  enroll@frontendbc.test
                </li>
                <li class="list-group-item">
                  <span class="fw-bold">Student Email:</span>{" "}
                  student@frontendbc.test
                </li>
              </ul>
            </div>
            <div class="col-md">
              <div id="map"></div>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

export default ContactUs;