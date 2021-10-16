import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

const RegisterModal = () => {
  const error = useSelector((state) => state.errorReducer);
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );

  const [modal, setModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const prevErrorRef = useRef();
  const setErrorRef = useRef();
  setErrorRef.current = setErrorMsg;

  useEffect(() => {
    const prevError = prevErrorRef.current;
    if (error !== prevError) {
      if (error.id === "REGISTER_FAIL") {
        setErrorRef.current(error.msg.msg);
      } else {
        setErrorRef.current(null);
      }
    }
    prevErrorRef.current = error;

    if (modal) {
      if (isAuthenticated) {
        toggleModal();
      }
    }
  });

  const toggleModal = () => {
    dispatch(clearErrors());
    setModal(!modal);
    setState(initialState);
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: state.name,
      email: state.email,
      password: state.password,
    };
    dispatch(register(newUser));
  };

  return (
    <>
      <NavLink onClick={toggleModal} href="#">
        Register
      </NavLink>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Register User</ModalHeader>
        <ModalBody>
          {errorMsg && <Alert color="danger">{errorMsg}</Alert>}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="input-name">Name:</Label>
              <Input
                type="text"
                name="name"
                id="input-name"
                placeholder="Input your name"
                className="mb-3"
                onChange={onChange}
              />
              <Label for="input-email">Email:</Label>
              <Input
                type="email"
                name="email"
                id="input-email"
                placeholder="Input your Email"
                className="mb-3"
                onChange={onChange}
              />
              <Label for="input-password">Password</Label>
              <Input
                type="password"
                name="password"
                id="input-password"
                placeholder="Input your Password"
                className="mb-3"
                onChange={onChange}
              />
              <Button color="dark" style={{ marginTop: "1rem" }} block>
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default RegisterModal;
