import { useEffect } from "react";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../actions/itemActions";

const ProductList = () => {
  const items = useSelector((state) => state.itemReducer.items)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className="section-center">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

function Item({ item }) {
  return (
    <article className="menu-item">
      <img src={item.img} className="photo" alt={item.title} />
      <div className="item-info">
        <header>
          <h4>{item.title}</h4>
          <h4 className="price">{item.price}</h4>
        </header>
        <p className="item-text">{item.desc}</p>
      </div>
    </article>
  );
}

export default ProductList;
