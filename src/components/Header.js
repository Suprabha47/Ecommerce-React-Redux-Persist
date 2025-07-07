import { useSelector } from "react-redux";
import { Link } from "react-router";
import image from "./shopping-bag.png";
import logo from "./after-effects.png";

const Header = () => {
  const data = useSelector((state) => state.cart);

  return (
    <div className="header">
      <img src={logo} alt="logo" style={{ width: "6rem" }} />
      <div className="header-links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/cart" className="link cart-link">
          Cart
          <img
            src={image}
            alt="cart"
            style={{ width: "1.8rem" }}
            className="cart-img"
          />
          <p>{data.items.length}</p>
        </Link>
        <Link to="/checkout" className="link">
          Order
        </Link>
      </div>
    </div>
  );
};
export default Header;
