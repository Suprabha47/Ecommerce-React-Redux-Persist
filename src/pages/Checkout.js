import "react-toastify/dist/ReactToastify.css";
import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";

const Checkout = () => {
  return (
    <div className="complete-container checkout-box">
      <div>
        <h2 style={{ textAlign: "center" }}>Details</h2>
        <CheckoutForm />
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>Order Summary</h2>
        <OrderSummary />
      </div>
    </div>
  );
};
export default Checkout;
