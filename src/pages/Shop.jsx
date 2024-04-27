import { AiOutlineSearch } from "react-icons/ai";
import "../styles/shop.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.log(error.message);
    } finally {
        setIsLoading(false)
    }
  };
  return (
    <>
      <section>
        {isLoading ? <Loader></Loader> : (
            <>
              <div className="topbox">
          {/* search input */}
          <div className="searchbox">
            <AiOutlineSearch size={45} className="search-btn" />
            <input
              className="searchinput"
              type="text"
              placeholder="search Items"
            />
          </div>
          <div className="optgroup">
            <select name="items" id="">
              <option value="">--Please choose an option--</option>
              <option value="dog">Clothes</option>
              <option value="cat">Bags</option>
              <option value="hamster">Shoes</option>
              <option value="parrot">Jewelries</option>
              <option value="spider">Gadgets</option>
            </select>
          </div>
        </div>
        <div className="product__box">
          {products.map((product) => {
            return (
              <div className="box" key={product.id}>
                <div className="imgbox">
                  <img src={product.image} alt="" />
                </div>
                <h3>{product.title}</h3>
                <h3 className="price">${product.price}</h3>
              </div>
            );
          })}
        </div>
            </>
        )}
      
      </section>
      <Footer></Footer>
    </>
  );
};

export default Shop;
