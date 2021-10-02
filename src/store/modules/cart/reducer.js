import { ADD_CART, REMOVE_CART } from "./actionTypes";

const productsList = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = productsList, action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];

    case REMOVE_CART:
      const { newList } = action;
      return newList;

    default:
      return state;
  }
};

export default cartReducer;
