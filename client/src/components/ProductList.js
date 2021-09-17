import { useEffect } from "react";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import { Container, Button } from "reactstrap";
import ItemModal from "./products/ItemModal";

const ProductList = () => {
  const items = useSelector((state) => state.itemReducer.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const onDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <Container>
      <ItemModal />
      <div className="section-center">
        {items.map((item) => (
          <Item key={item._id} item={item} onDelete={onDelete} />
        ))}
      </div>
    </Container>
  );
};

const Item = ({ item, onDelete }) => {
  return (
    <Container>
      <Button
        color="danger"
        size="sm"
        className="mb-2"
        onClick={() => {
          onDelete(item._id);
        }}
      >
        x
      </Button>

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
