import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { ToastContainer, toast } from 'react-toastify';

const NewProducts = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cart, updateGlobalState } = useContext(CartContext);
  const [, setNewCart] = useState(cart);
  const notify = () => toast("New Item added to Cart!");


  useEffect(() => {
    fetchNewProducts();
  }, []);

  const fetchNewProducts = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=6"
      );
      console.log(response);
      setNewProducts(response.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewCart = (product) => {
    setNewCart((prevCart) => [...(prevCart.cartItems || []), product]);
    updateGlobalState(product);
    notify()

  };

  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <section className="product__section">
            <h1>NEW ARRIVALS</h1>
            <div className="product__box">
              {newProducts.map((product) => {
                return (
                  <div className="box" key={product.id}>
                    <div className="imgbox">
                      <img src={product.image} alt="" />
                    </div>
                    <h3>{product.title}</h3>
                    <h3
                      className="price"
                     
                    >
                      ${product.price}
                    </h3>
                    <button  onClick={() => handleNewCart(product)}>Add to Cart</button>
                  </div>
                );
              })}
            </div>
            <ToastContainer position="top-center"></ToastContainer>
          </section>
        </>
      )}
    </>
  );
};

export default NewProducts;
