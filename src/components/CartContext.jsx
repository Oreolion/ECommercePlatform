import { createContext } from "react";
import { useState } from "react";

 const CartContext = createContext([]);

// eslint-disable-next-line react/prop-types
const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const updateGlobalState = (newState) => {
    setCart((prev)=> [...prev, newState]);

  };

  return (
    <CartContext.Provider value={{ cart, updateGlobalState }}>
      {children}
    </CartContext.Provider>
  );
};

export  {CartContextProvider, CartContext};
