import { useState, useEffect } from "react";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import { Container, Button } from "reactstrap";
import ItemModal from "./products/ItemModal";
import Items from "./products/Items";

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
        <Items
          items={items}
          deleteMode={state.deleteMode}
          onDelete={onDelete}
        />
      </div>
    </Container>
  );
};

export default ProductList;
