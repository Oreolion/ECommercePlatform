import { AiOutlineSearch } from "react-icons/ai";
import "../styles/shop.css";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { CartContext } from "../components/CartContext.jsx";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [searchData, setSearchData] = useState("");
  const { cart, updateGlobalState } = useContext(CartContext);
  const [newCart, setNewCart] = useState(cart);

  useEffect(() => {
    fetchProducts();
    console.log(newCart);
  }, [newCart]);



  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  let arr = [];
  let sortedList;
  products.map((item) => {
    arr.push(item.category);
  });

  sortedList = [...new Set(arr)];

  const handleSort = (e) => {
    setData(e.target.value);
  };
  const handleSearch = (e) => {
    setSearchData(e.target.value);
    console.log(searchData);
  };

  const handleNewCart = (product) => {
    setNewCart((prevCart) => [...prevCart, product]);
    updateGlobalState(product);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <>
      <section>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="topbox">
              {/* search input */}
              <div className="searchbox">
                <AiOutlineSearch size={45} className="search-btn" />
                <input
                  className="searchinput"
                  type="text"
                  value={searchData}
                  placeholder="Search Items"
                  onChange={handleSearch}
                />
              </div>
              <div className="optgroup">
                <select name="items" id="" onChange={handleSort}>
                  <option value="">--All Products--</option>
                  {sortedList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="product__box">
            <h2> SHOP QUALITY WEARS, BAGS, SHOES, JEWELRIES AND OTHER ACCESSORIES.</h2>
              {filteredProducts.length > 0 ? (
                data ? (
                  filteredProducts
                    .filter((item) => item.category === data)
                    .map((filteredItem) => (
                      <div className="box" key={filteredItem.id}>
                        <div className="imgbox">
                          <img src={filteredItem.image} alt="" />
                        </div>
                        <h3>{filteredItem.title}</h3>
                        <h3 className="price"   onClick={() => handleNewCart(filteredItem)}>${filteredItem.price}</h3>
                      </div>
                    ))
                ) : (
                  filteredProducts.map((product) => (
                    <div className="box" key={product.id}>
                      <div className="imgbox">
                        <img src={product.image} alt="" />
                      </div>
                      <h3>{product.title}</h3>
                      <h3
                        className="price"
                        onClick={() => handleNewCart(product)}
                      >
                        {product.price}
                      </h3>
                    </div>
                  ))
                )
              ) : (
                <div className="nomatch__box">
                  OOPS! Your search did not match any of our products.
                </div>
              )}
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Shop;
