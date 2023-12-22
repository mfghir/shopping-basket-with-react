/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helper/helper";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };

    // case "REMOVE_FROM_CART":
    //   const filteredItems = state.selectedItems.filter(
    //     (item) => item.id !== action.item.id
    //   );
    //   return { ...state, selectedItems: filteredItems };
    // case "CHECKOUT":
    //   let sum = 0;
    //   action.items.forEach((item) => {
    //     sum += item.price * item.quantity;
    //   });
    //   return {
    //     ...state,
    //     checkout: true,
    //     total: sum,
    //     itemsCounter: action.items.length,
    //     selectedItems: [],
    //   };

    default:
      throw new Error("Invalid action");
  }
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return { state, dispatch };
};

export default CartProvider;
