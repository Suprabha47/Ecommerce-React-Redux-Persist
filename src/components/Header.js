import { useSelector } from "react-redux";
import { Link } from "react-router";
import image from "./shopping-bag.png";
import logo from "./after-effects.png";

const Header = ({ searchItem, setSearchItem }) => {
  const data = useSelector((state) => state.cart);

  return (
    <div className="header_wrapper">
      <div className="header">
        <img
          src={logo}
          alt="logo"
          style={{ maxWidth: "8rem", width: "4rem" }}
        />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="search-container">
                <input
                  type="text"
                  class="form-control search-input"
                  placeholder="Search..."
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                />
                <i class="fas fa-search search-icon"></i>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
};
export default Header;
