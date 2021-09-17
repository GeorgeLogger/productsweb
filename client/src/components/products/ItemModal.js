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
import { v4 as uuid } from "uuid";

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

    const newItem = {
      id: uuid(),
      title: state.title,
      category: state.category,
      price: state.price,
      imgDir: state.img,
      desc: state.desc
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
              {/* Add alert functionality for blank fields */}
              <Label for="input-title">Title</Label>
              <Input
                type="text"
                name="title"
                id="input-title"
                placeholder="Add Item Title"
                onChange={onChange}
              />
              <Label for="input-category">Category</Label>
              <Input
                type="text"
                name="category"
                id="input-category"
                placeholder="Add Category"
                onChange={onChange}
              />
              <Label for="input-price">Price</Label>
              <Input
                type="number"
                name="price"
                id="input-price"
                placeholder="Add Price"
                onChange={onChange}
              />
              <Label for="input-img">Img Directory</Label>
              <Input
                type="text"
                name="img"
                id="input-img"
                placeholder="Add Img Directory"
                onChange={onChange}
              />
              <Label for="input-description">Description</Label>
              <Input
                type="text"
                name="desc"
                id="input-desc"
                placeholder="Add Description"
                onChange={onChange}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
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
