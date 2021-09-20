import { Container, Button } from "reactstrap";
import PropTypes from "prop-types";

const Items = ({ items, deleteMode, onDelete }) => {
  return (
    <>
      {items.map((item) => (
        <Container key={item._id}>
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
      ))}
    </>
  );
};

Items.propTypes = {
  items: PropTypes.array.isRequired,
  deleteMode: PropTypes.bool.isRequired,
  onDelete: PropTypes.func,
};

export default Items;
