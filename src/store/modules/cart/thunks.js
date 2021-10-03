import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  list.push(product);

  localStorage.setItem("cart", JSON.stringify(list));

  dispatch(addToCart(product));
};

export const removeFromCartThunk = (productIndex) => (dispatch, getStore) => {
  const { cart } = getStore();
  const newList = cart.filter((_, index) => index !== productIndex);

  localStorage.setItem("cart", JSON.stringify(newList));

  dispatch(removeFromCart(newList));
};
