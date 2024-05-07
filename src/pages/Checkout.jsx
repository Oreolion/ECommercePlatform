import "../styles/checkout.css";
import { CartContext } from "../components/CartContext.jsx";
import { UserContext } from "../components/UserContext.jsx";
import { useContext } from "react";


const Checkout = () => {

    const {cart} = useContext(CartContext);
    const {user} = useContext(UserContext);
    console.log(user)
  return (
    <>
    <section className="checkout__section">
    <div className="checkout__box">
        <h1> CHECKOUT </h1>
        <div className="box">
            <h2>Total: ${cart.totalAmount.toFixed(2)}</h2>
            <p>Total items: {cart.cartItems.length}</p>
            <p>Shipping Cost: ${0}</p>
            <p>Shipping Address: {user.email}</p>
            <p>Biller: {user.email}</p>
        </div>
      </div>

    </section>
    
    </>
  );
};

export default Checkout;
