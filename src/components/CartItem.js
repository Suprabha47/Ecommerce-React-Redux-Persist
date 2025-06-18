import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, title, description, images, price, quantity } = data;

  const handleQuantityChange = (operation) => {
    if (operation === "+") {
      dispatch(updateQuantity({ id, quantity: quantity + 1 }));
    } else if (operation === "-") {
      if (quantity > 1) {
        dispatch(updateQuantity({ id, quantity: quantity - 1 }));
      } else if (quantity === 1) {
        dispatch(removeFromCart(id));
      }
    }
  };

  return (
    <div className="cart-item-container">
      <img src={images} alt={title} style={{ width: "15rem" }} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>$ {price}</p>
        <div>
          <p>
            Quantity:
            <button
              className="button-35"
              onClick={() => handleQuantityChange("+")}
            >
              +
            </button>
            {quantity}
            <button
              className="button-35"
              onClick={() => handleQuantityChange("-")}
            >
              -
            </button>
          </p>
          <button className="btn" onClick={() => dispatch(removeFromCart(id))}>
            Remove from Cart
          </button>
          <p>Total: ${(price * quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
