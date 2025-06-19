import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  if (!props.data) return null;
  const { id, title, price, rating, images } = props.data;

  const handleAdd = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.title} Added to Cart!`);
  };

  return (
    <div key={id} className="product-item">
      <div className="product-inner-item">
        <Link to={`/product/${id}`}>
          <img src={images} alt={title} style={{ width: "100%" }} />
        </Link>
        <div className="title-price">
          <p className="text">{title}</p>
          <p className="text price-badge">$ {price}</p>
        </div>
        <div className="rating-cart-btn">
          <p className=" text rating-badge">{rating}⭐</p>
          <button className="add btn" onClick={() => handleAdd(props.data)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
