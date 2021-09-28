import { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import "./Contact.css";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [state, setState] = useState(initialState);

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(
      `Name: ${state.name}\nEmail: ${state.email}\nMessage: ${state.message}`
    );

    setState(initialState);

    // summon Modal, your message has been sent
  };

  return (
    <>
      <Container className="py-5 flex-container">
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <div className="form-group">
              <Label for="input-name">Name</Label>
              <Input
                type="text"
                name="name"
                id="input-name"
                placeholder="Type your name"
                value={state.name}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <Label for="input-email">Email</Label>
              <Input
                type="email"
                name="email"
                id="input-email"
                placeholder="Type your email"
                value={state.email}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <Label for="input-message">Your Message</Label>
              <Input
                type="textarea"
                name="message"
                id="input-message"
                placeholder="Type your message here"
                value={state.message}
                onChange={onChange}
              />
            </div>

            <Button color="dark" style={{ marginTop: "1rem" }} block>
              Submit
            </Button>
          </FormGroup>
        </Form>

        <div className="form-banner">Banner Placeholder</div>
      </Container>
    </>
  );
};

export default Contact;
