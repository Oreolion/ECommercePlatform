import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";


const cartInitialState = {
    totalAmount: 0,
    numberOfItems: 0,
    cartItems: [],
};

const CartContext = createContext(cartInitialState);


// eslint-disable-next-line react/prop-types
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateGlobalState = (newState) => {
    setCart((prev) => [...prev.cartItems, newState]);
  };

  return (
    <CartContext.Provider value={{ cart, updateGlobalState }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };
