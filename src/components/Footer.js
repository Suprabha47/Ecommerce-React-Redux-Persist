import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "./after-effects.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt=" Logo" className="logo-img" />
          <span className="logo-text">Dummy</span>
        </div>

        <div className="footer-links">
          <a href="#">First Link</a>
          <a href="#">Second Link</a>
          <a href="#">Third Link</a>
          <a href="#">Fourth Link</a>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>© 2020 Nereus. All rights reserved.</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
