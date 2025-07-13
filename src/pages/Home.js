import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const Home = () => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <div className="container">
      <Header searchItem={searchItem} setSearchItem={setSearchItem} />
      {console.log("search: ", searchItem)}
      <ProductList searchItem={searchItem} />
      <Footer />
    </div>
  );
};
export default Home;
