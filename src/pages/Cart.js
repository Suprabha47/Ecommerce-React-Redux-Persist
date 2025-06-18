import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router";
import Header from "../components/Header";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  console.log("cartItems: ", cartItems);

  return (
    <>
      <Header />
      <div className="item-container">
        <h2>My Cart</h2>
        {cartItems.items.map((item) => (
          <CartItem data={item} key={item.id} />
        ))}

        {cartItems.total === 0 ? (
          <h3>Oops your cart is empty!</h3>
        ) : (
          <Link to="/checkout">
            <button className="btn">Checkout</button>
          </Link>
        )}
      </div>
    </>
  );
};
export default Cart;
