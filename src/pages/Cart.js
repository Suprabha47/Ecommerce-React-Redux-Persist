import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import OrderSummary from "../components/OrderSummary";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <>
      <Header />
      {cartItems.total === 0 ? (
        <h3 style={{ textAlign: "center" }}>Oops your cart is empty!</h3>
      ) : (
        <>
          <div className="complete-container">
            <div className="cart-container">
              <h2 style={{ textAlign: "center" }}>My Cart</h2>
              {cartItems.items.map((item) => (
                <CartItem data={item} key={item.id} />
              ))}
            </div>
            <div className="cart-container">
              <h2 style={{ textAlign: "center" }}>Order Summary</h2>
              <OrderSummary />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Cart;
