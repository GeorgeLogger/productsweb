import { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container, Alert } from "reactstrap";
import "./Contact.css";

const Contact = () => {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("primary");

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

  const toggleAlert = (msg, color) => {
    setAlert(true);
    setAlertMessage(msg);
    setAlertColor(color);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (state.name === "" || state.email === "" || state.message === "") {
      toggleAlert("Please fill in all the fields", "danger");
    } else {
      toggleAlert("Successfully sent your message", "success");
      console.log(
        `Name: ${state.name}\nEmail: ${state.email}\nMessage: ${state.message}`
      );
      setState(initialState);
    }
  };

  return (
    <>
      <Container className="py-5 flex-container">
        <Form onSubmit={onSubmit}>
          {alert && <Alert color={alertColor}>{alertMessage}</Alert>}
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

        <div className="form-banner">
          <div className="banner-caption">
            <h2>Inform us of your interest</h2>
          </div>
          <img src="/images/bakery-1.jpg" alt="bakery-1" />
        </div>
      </Container>
    </>
  );
};

export default Contact;
