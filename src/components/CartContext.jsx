import { useEffect, createContext, useReducer } from "react";

const cartInitialState = {
  totalAmount: 0,
  numberOfItems: 0,
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ITEM_COUNT": {
      const updatedCartItems = state.cartItems
        .map((item) =>
          item.title === action.payload.title
            ? { ...item, count: action.payload.count }
            : item
        )
        .filter((item) => item.count > 0);

      const totalAmount = updatedCartItems.reduce(
        (sum, item) => sum + item.price * item.count,
        0
      );
      const numberOfItems = updatedCartItems.reduce(
        (sum, item) => sum + item.count,
        0
      );
      return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount,
        numberOfItems,
      };
    }

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
        numberOfItems: 0,
        totalAmount: 0,
      };
  
    default:
      return state;
  }
};

const CartContext = createContext(cartInitialState);

// eslint-disable-next-line react/prop-types
const CartContextProvider = ({ children }) => {
  //   const [cart, setCart] = useState(() => {
  //     const storedCart = localStorage.getItem("cart");
  //     return storedCart ? JSON.parse(storedCart) : cartInitialState;
  //   });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  });

  const getState = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : cartInitialState;
  };

  const [state, dispatch] = useReducer(cartReducer, cartInitialState, getState);

  const updateItemCount = (title, count) => {
    dispatch({ type: "UPDATE_ITEM_COUNT", payload: { title, count } });
  };

  const clearGlobalState = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const updateGlobalState = (newState) => {
    dispatch({ type: "ADD_ITEM", payload: newState });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state,
        updateItemCount,
        updateGlobalState,
        clearGlobalState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };
