import { useEffect, createContext, useReducer } from "react";

const cartInitialState = {
  totalAmount: 0,
  numberOfItems: 0,
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ITEM_COUNT":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.title === action.payload.title
            ? { ...item, count: action.payload.count }
            : item
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
        numberOfItems: 0,
        totalAmount: 0,
      };
    case "ADD_ITEM": {
      const existingItem = state.cartItems.find(
        (item) => item.title === action.payload.title
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.title === action.payload.title
              ? { ...item, count: item.count + 1 }
              : item
          ),
          totalAmount: state.totalAmount + action.payload.price,
          numberOfItems: state.numberOfItems + 1,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, count: 1 }],
          totalAmount: state.totalAmount + action.payload.price,
          numberOfItems: state.numberOfItems + 1,
        };
      }
    }
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
