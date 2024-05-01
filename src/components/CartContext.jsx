import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext([]);

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
    setCart((prev) => [...prev, newState]);
  };

  return (
    <CartContext.Provider value={{ cart, updateGlobalState }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };
