import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  if (!props.data) return null;
  const { id, title, price, rating, images } = props.data;

  const handleAdd = (item) => {
    dispatch(addToCart(item));
    alert("Item Added to Cart!");
  };

  return (
    <div key={id} className="product-item">
      <div className="product-inner-item">
        <Link to={`/product/${id}`}>
          <img src={images} alt={title} style={{ width: "100%" }} />
        </Link>
        <h3 className="text">{title}</h3>
        <p className="text">$ {price}</p>
        <p className="text">{rating}⭐</p>
        <button className="add btn" onClick={() => handleAdd(props.data)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductItem;
