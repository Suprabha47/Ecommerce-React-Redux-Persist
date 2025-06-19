import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, title, images, price, quantity } = data;

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

  const handleRemoveItem = () => {
    dispatch(removeFromCart(id));
    toast("Item removed from your cart!", { position: "bottom-right" });
  };

  return (
    <div className="cart-item-container">
      <img src={images} alt={title} />
      <div className="order-item">
        <h3>{title}</h3>
        <div className="price-quantity">
          <p className="price-badge">Price: $ {price}</p>
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
        </div>

        <div className="rmv-total">
          <button className="btn rmv-btn" onClick={handleRemoveItem}>
            Remove from Cart
          </button>

          <p>Total: ${(price * quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
