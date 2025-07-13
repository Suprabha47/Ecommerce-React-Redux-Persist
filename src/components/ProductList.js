import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Shimmer from "./ShimmerProductList";
import { ToastContainer } from "react-toastify";

const ProductList = ({ searchItem }) => {
  const [data, setData] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProductData = () =>
      axios
        .get("https://dummyjson.com/products")
        .then((response) => {
          setData(response.data.products);
          setAllProducts(response.data.products);
          console.log("data:", response.data.products);
        })
        .catch((err) => console.log(err.message));
    fetchProductData();
  }, []);

  useEffect(() => {
    if (searchItem === "") return;
    const searchedProducts = allProducts.filter((p) =>
      p.title.toLowerCase().trim().includes(searchItem.toLowerCase().trim())
    );

    setData(searchedProducts);
  }, [searchItem]);

  if (allProducts.length === 0)
    return (
      <div className="main-container">
        <h2>All Products</h2>
        <Shimmer />
      </div>
    );
  if (data.length === 0)
    return (
      <div className="main-container">
        <h2>All Products</h2>
        <h4
          style={{
            textAlign: "center",
            marginBottom: "rem",
            marginTop: "5rem",
          }}
        >
          No such product found.
        </h4>
      </div>
    );

  return (
    <div className="main-container">
      <h2>All Products</h2>
      <div className="product-container">
        {data.map((item) => (
          <ProductItem data={item} className="item" key={item.id} />
        ))}
      </div>
      <ToastContainer autoClose={2000} closeOnClick />
    </div>
  );
};
export default ProductList;
