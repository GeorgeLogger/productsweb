import "./ProductList.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button } from "reactstrap";
import { getItems, deleteItem } from "../actions/itemActions";
import ItemModal from "./products/ItemModal";
import Items from "./products/Items";

const ProductList = () => {
  const items = useSelector((state) => state.itemReducer.items);
  const dispatch = useDispatch();
  const [deleteMode, setDeleteMode] = useState(false);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const onDelete = (item) => {
    if (window.confirm(`Confirm: Delete ${item.title}?`)) {
      dispatch(deleteItem(item._id));
    }
  };

  const toggleDeleteMode = () => {
    if (!deleteMode && !window.confirm("Activate delete mode?")) {
      return;
    } else {
      setDeleteMode(!deleteMode);
    }
  };

  return (
    <Container>
      <ItemModal />
      <Button
        color="danger"
        size="sm"
        className="mt-2"
        onClick={toggleDeleteMode}
      >
        {deleteMode ? "Deactivate" : "Activate"} Delete Mode
      </Button>
      <Items items={items} deleteMode={deleteMode} onDelete={onDelete} />
    </Container>
  );
};

export default ProductList;
