import { useEffect } from "react";
import "../styles/cart.css";
import { CartContext } from "../components/CartContext.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const { cart, updateGlobalState } = useContext(CartContext);
  let [count, setCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(cart);
    console.log(count);
  }, [cart, count]);

  const clearCart = () => {
    updateGlobalState(cart.length = 0);
  };

  return (
    <>
      <section className="section">
        <div className="cartbox">
          {cart?.length ? (
            <>
              <div className="header">
                <h1>YOUR SHOPPING CART</h1>
                <button onClick={() => navigate("/shop")}>
                  Continue Shopping
                </button>
              </div>
              <div>
                {cart.map((item, i) => {
                  return (
                    <div className="innerbox" key={i}>
                      <div className="imgbox">
                        <img src={item.image} alt="img" />
                      </div>
                      <div className="product__info">
                        <h3>{item.title}</h3>

                        <p>{item.description}</p>
                        <div className="lowinfobox">
                          <h3 className="price">${item.price}</h3>
                          <div className="quantity">
                            <span onClick={() => setCount(count - 1)}>-</span>
                            <span>{count}</span>
                            <span onClick={() => setCount(count + 1)}>+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className="clr-btn" onClick={clearCart}>
                Clear your Cart
              </button>
            </>
          ) : (
            <>
              <div className="emptycart__box">
                <h4>Your Cart is Empty</h4>
                <button onClick={() => navigate("/shop")}>
                  continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
        {cart.length > 0 && (
          <div className="rightbox">
            <div className="subtotal boxed">
              <p>Subtotals(5 Items):</p>
              <p>amount</p>
            </div>
            <div className="discount boxed">
              <p>Discount(5% off):</p>
              <p>amount</p>
            </div>
            <div className="total boxed">
              <p>Grand Total:</p>
              <p>amount</p>
            </div>
            <hr />
            <button>Proceed to Checkout</button>
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
