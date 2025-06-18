import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../store/orderSlice";
import { useNavigate } from "react-router";
import { emptyCart } from "../store/cartSlice";

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const item = useSelector((state) => state.cart);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(placeOrder({ name, email, address, phone, total: item.total }));
    alert("Order Placed! Thank You!");
    dispatch(emptyCart());
    navigate("/");
  };

  return (
    <div className="form-container">
      <h1 style={{ textAlign: "center" }}>Checkout</h1>
      <h3>Total Amount: $ {item.total}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label>Name </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-item">
          <label>Email </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-item">
          <label>Address </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-item">
          <label>Phone Number 2 </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-item">
          <button className="btn" type="submit">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};
export default Checkout;
