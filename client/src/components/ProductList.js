import { useState, useEffect } from "react";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import { Container, Button } from "reactstrap";
import ItemModal from "./products/ItemModal";

const ProductList = () => {
  const items = useSelector((state) => state.itemReducer.items);
  const dispatch = useDispatch();

  const initialState = {
    deleteMode: false,
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const onDelete = (item) => {
    if (window.confirm(`Confirm: Delete ${item.title}?`)) {
      dispatch(deleteItem(item._id));
    }
  };

  const toggleDeleteMode = () => {
    const toggle = () => {
      setState({
        ...state,
        deleteMode: !state.deleteMode,
      });
    };

    if (!state.deleteMode && window.confirm("Activate delete mode?")) {
      toggle();
    } else {
      toggle();
    }
  };

  return (
    <Container>
      <ItemModal />
      <Button
        color="danger"
        size="sm"
        className="mt-2"
        onClick={() => {
          toggleDeleteMode();
        }}
      >
        {state.deleteMode ? "Deactivate" : "Activate"} Delete Mode
      </Button>
      <div className="section-center">
        {items.map((item) => (
          <Item
            key={item._id}
            item={item}
            deleteMode={state.deleteMode}
            onDelete={onDelete}
          />
        ))}
      </div>
    </Container>
  );
};

const Item = ({ item, deleteMode, onDelete }) => {
  return (
    <Container>
      {deleteMode ? (
        <Button
          color="danger"
          size="sm"
          className="mb-2"
          onClick={() => {
            onDelete(item);
          }}
        >
          x
        </Button>
      ) : null}

      <article className="menu-item">
        <img src={item.imgDir} className="photo" alt={item.title} />
        <div className="item-info">
          <header>
            <h4>{item.title}</h4>
            <h4 className="price">{item.price}</h4>
          </header>
          <p className="item-text">{item.desc}</p>
        </div>
      </article>
    </Container>
  );
};

export default ProductList;
