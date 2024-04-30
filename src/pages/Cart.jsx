import { useEffect } from "react";
import "../styles/cart.css";
import { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart((prevCart) => [
      ...prevCart,
      JSON.parse(localStorage.getItem("carts")),
    ]);
    console.log(cart);
  }, [cart]);

  return (
    <>
      <section className="">
        {cart.length ? (
          <>
            <div>
              {cart.map((item) => {
                return (
                  <>
                    <div className="innerbox">
                      <div className="imgbox">
                        <img src="" alt="img" />
                      </div>
                      <h3>{item.title}</h3>
                      <h3 className="price">${item.price}</h3>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className="emptycart__box">
              <h4>Your Cart is Empty</h4>
              <button>continue Shopping</button>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Cart;
