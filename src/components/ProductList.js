import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Shimmer from "./ShimmerProductList";
import { ToastContainer } from "react-toastify";

const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchProductData = () =>
      axios
        .get("https://dummyjson.com/products")
        .then((response) => setData(response.data))
        .catch((err) => console.log(err.message));
    fetchProductData();
  }, []);

  if (data.length === 0)
    return (
      <div className="main-container">
        <h2>All Products</h2>
        <Shimmer />
      </div>
    );

  return (
    <div className="main-container">
      <h2>All Products</h2>
      <div className="product-container">
        {data.products.map((item) => (
          <ProductItem data={item} className="item" key={item.id} />
        ))}
      </div>
      <ToastContainer autoClose={2000} closeOnClick />
    </div>
  );
};
export default ProductList;
