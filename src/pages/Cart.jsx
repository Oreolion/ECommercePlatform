import { useEffect } from "react";
import "../styles/cart.css";
import { CartContext } from "../components/CartContext.jsx";
import { useContext } from "react";

const Cart = () => {
  const { cart } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <section className="section">
        <div className="cartbox">
          {cart?.length ? (
            <>
              <div className="header">
                <h1>YOUR SHOPPING CART</h1>
                <button>Continue Shopping</button>
              </div>
              <div>
                {cart.map((item) => {
                  return (
                    <>
                      <div className="innerbox" key={item.id}>
                        <div className="imgbox">
                          <img src={item.image} alt="img" />
                        </div>
                        <div className="product__info">
                          <h3>{item.title}</h3>
                          <h3 className="price">${item.price}</h3>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <button className="clr-btn">Clear your Cart</button>
            </>
          ) : (
            <>
              <div className="emptycart__box">
                <h4>Your Cart is Empty</h4>
                <button>continue Shopping</button>
              </div>
            </>
          )}
        </div>
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
      </section>
    </>
  );
};

export default Cart;
