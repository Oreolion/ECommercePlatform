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
    return storedCart ? JSON.parse(storedCart) : cartInitialState;
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartInitialState));
    }, [cart]);

  const updateGlobalState = (newState) => {
    setCart((prev) => ({
        ...prev,
        totalAmount: prev.totalAmount + newState.price,
        numberOfItems: prev.numberOfItems + 1,
        cartItems: [...prev.cartItems, newState],
      }));
  };
  const clearGlobalState = () => {

    setCart((prev) => ({
        ...prev,
        totalAmount: 0,
        numberOfItems: 0,
        cartItems:[],
      }));
      
  };

  return (
    <CartContext.Provider value={{ cart, updateGlobalState, clearGlobalState }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };
