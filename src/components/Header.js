import { useSelector } from "react-redux";
import { Link } from "react-router";
const Header = () => {
  const data = useSelector((state) => state.cart);

  return (
    <div className="header">
      <img
        src="https://logopond.com/logos/dc5cc8314658dcbce4536affc4772f78.png"
        alt="logo"
        style={{ width: "6rem" }}
      />
      <div className="header-links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/cart" className="link">
          Cart ({data.items.length})
        </Link>
        <Link to="/checkout" className="link">
          Order
        </Link>
      </div>
    </div>
  );
};
export default Header;
