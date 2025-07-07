import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import OrderSummary from "../components/OrderSummary";
import Footer from "../components/Footer";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="container">
      <Header />
      {cartItems.total === 0 ? (
        <h3
          style={{
            textAlign: "center",
            marginBottom: "15%",
            marginTop: "5rem",
          }}
        >
          Oops your cart is empty!
        </h3>
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
              <OrderSummary condition="checkout" />
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};
export default Cart;
