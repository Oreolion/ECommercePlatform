import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
const NewProducts = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNewProducts();
  }, []);

  const fetchNewProducts = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=7"
      );
      console.log(response);
      setNewProducts(response.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <section>
            <h1>NEW ARRIVALS</h1>
            <div className="product__box">
              {newProducts.map((product) => {
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
          </section>
        </>
      )}
    </>
  );
};

export default NewProducts;
