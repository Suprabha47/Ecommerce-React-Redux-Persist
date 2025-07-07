import { Link } from "react-router";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

const OrderSummary = ({ condition }) => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="order-summary-container">
      <p>Subtotal: ${cartItems.total.toFixed(2)}</p>
      <p>Shipping Charges: 0</p>
      <p>Total: ${cartItems.total.toFixed(2)}</p>
      {condition === "checkout" && (
        <Link to="/checkout">
          <button className="btn checkout">Checkout</button>
        </Link>
      )}
      <ToastContainer autoClose={2000} closeOnClick />
    </div>
  );
};
export default OrderSummary;
