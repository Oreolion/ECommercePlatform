import { useEffect } from "react";
import "../styles/cart.css";
import { CartContext } from "../components/CartContext.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';



const Cart = () => {
  const { cart, updateItemCount, updateGlobalState, clearGlobalState } = useContext(CartContext);
  const navigate = useNavigate();
  const notify = () => toast("You Cleared Your Cart!");

  const increaseItemCount = (item) => {
    const newCount = item.count + 1;
    updateItemCount(item.title, newCount);
    updateGlobalState(item);

  };

  const decreaseItemCount = (item) => {
    const newCount = item.count > 1 ? item.count - 1 : 1;
    updateItemCount(item.title, newCount);
    updateGlobalState(item);
  };



  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const clearCart = () => {
    try {
      window.confirm("Are you sure you want to clear your cart?");
      clearGlobalState();
      notify()

      console.log("Cart cleared successfully!");
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };
  return (
    <>
      <section className="cart__section">
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
                            <span onClick={() => decreaseItemCount(item)}>-</span>
                            <span>{item.count}</span>
                            <span onClick={() => increaseItemCount(item)}>+</span>
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
              <p>Subtotals({cart.numberOfItems} Items):</p>
              <p>{cart.totalAmount.toFixed(2)}</p>
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
            <button onClick={()=> navigate("/checkout")}>Proceed to Checkout</button>
          </div>
        )}
        <ToastContainer position="top-center"></ToastContainer>
      </section>
    </>
  );
};

export default Cart;
