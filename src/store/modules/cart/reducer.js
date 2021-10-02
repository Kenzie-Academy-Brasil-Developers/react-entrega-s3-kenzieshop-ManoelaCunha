import { ADD_CART, REMOVE_CART } from "./actionTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];

    case REMOVE_CART:
      const { id } = action;
      const newList = state.filter((product) => product.id !== id);
      return newList;

    default:
      return state;
  }
};

export default cartReducer;
