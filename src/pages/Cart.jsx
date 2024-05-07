import { useEffect } from "react";
import "../styles/cart.css";
import { CartContext } from "../components/CartContext.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const { cart, clearGlobalState } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const clearCart = () => {
    try {
      window.confirm("Are you sure you want to clear your cart?");
      clearGlobalState();

      console.log("Cart cleared successfully!");
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };
  return (
    <>
      <section className="section">
        <div className="cartbox">
          {cart.cartItems?.length ? (
            <>
              <div className="header">
                <h1>YOUR SHOPPING CART</h1>
                <button onClick={() => navigate("/shop")}>
                  Continue Shopping
                </button>
              </div>
              <div>
                {cart.cartItems.map((item, i) => {
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
        {cart.cartItems.length > 0 && (
          <div className="rightbox">
            <div className="subtotal boxed">
              <p>Subtotals(5 Items):</p>
              <p>{cart.totalAmount}</p>
            </div>
            <div className="discount boxed">
              <p>Discount(5% off):</p>
              <p> {(cart.totalAmount * 5 / 100).toFixed(2)}</p>
            </div>
            <div className="total boxed">
              <p>Grand Total: </p>
              <p>{ (cart.totalAmount - (cart.totalAmount * 5 / 100)).toFixed(2)}</p>
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
