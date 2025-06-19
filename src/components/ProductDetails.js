import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import Header from "./Header";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [data, setData] = useState([]);
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductData = () =>
      axios
        .get("https://dummyjson.com/products")
        .then((response) => setData(response.data.products))
        .catch((err) => console.log(err.message));
    fetchProductData();
  }, []);

  const item = data.find((p) => p.id === parseInt(productId));
  console.log(item);
  if (!item) return <p>Loading...</p>;
  return (
    <>
      <Header />
      <div className="product-details-container">
        <img
          src={item.images}
          alt={item.title}
          style={{ width: "20rem", margin: "1rem" }}
        />
        <div className="product-desc">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Category: {item.category}</p>
          <p className="price-badge">Price: $ {item.price}</p>
          <p className="rating-badge">{item.rating} ⭐</p>
          <button
            className="btn add"
            onClick={() => {
              dispatch(addToCart(item));
              toast.success("Added to Cart!");
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
