import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { addItem } from "../../actions/itemActions";

const ItemModal = () => {
  const initialState = {
    modal: false,
    title: "",
    category: "",
    price: 0,
    img: "",
    desc: "",
  };

  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setState({
      ...state,
      modal: !state.modal,
      title: "",
      category: "",
      price: 0,
      img: "",
      desc: "",
    });
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      state.title === "" ||
      state.category === "" ||
      state.price < 1 ||
      state.imgDir === "" ||
      state.desc === ""
    ) {
      if (state.price < 1) {
        alert("Price must be higher than 0");
      } else {
        alert("All fields must be filled");
      }
      return;
    }

    const newItem = {
      title: state.title,
      category: state.category,
      price: state.price,
      imgDir: state.img,
      desc: state.desc,
    };
    dispatch(addItem(newItem));
    toggleModal();
  };

  return (
    <div>
      <Button size="sm" onClick={toggleModal}>
        Add Item
      </Button>

      <Modal isOpen={state.modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add New Item</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="input-title">Title</Label>
              <Input
                type="text"
                name="title"
                id="input-title"
                placeholder="Add Item Title"
                className="mb-3"
                onChange={onChange}
              />
              <Label for="input-category">Category</Label>
              <Input
                type="text"
                name="category"
                id="input-category"
                placeholder="Add Category"
                className="mb-3"
                onChange={onChange}
              />
              <Label for="input-price">Price</Label>
              <Input
                type="number"
                name="price"
                id="input-price"
                placeholder="Add Price"
                className="mb-3"
                onChange={onChange}
              />
              <Label for="input-img">Img Directory</Label>
              <Input
                type="text"
                name="img"
                id="input-img"
                placeholder="Add Img Directory"
                className="mb-3"
                onChange={onChange}
              />
              <Label for="input-description">Description</Label>
              <Input
                type="text"
                name="desc"
                id="input-desc"
                placeholder="Add Description"
                className="mb-3"
                onChange={onChange}
              />
              <Button color="dark" style={{ marginTop: "1rem" }} block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ItemModal;
