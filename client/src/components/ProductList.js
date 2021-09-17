import { useEffect } from "react";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../actions/itemActions";
import { Container } from "reactstrap";
import ItemModal from "./products/ItemModal";

const ProductList = () => {
  const items = useSelector((state) => state.itemReducer.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <Container>
      <ItemModal />
      <div className="section-center">
        {items.map((item) => (
          <Item key={item._id} item={item} />
        ))}
      </div>
    </Container>
  );
};

const Item = ({ item }) => {
  return (
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
  );
};

export default ProductList;
