import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();
  const { id, name, price } = product;

  const handleAddToCart = () => {
    dispatch(addToCartThunk(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCartThunk(id));
  };

  return (
    <div>
      <h3>{name}</h3>
      <h3>{price}</h3>
      {isRemovable ? (
        <button onClick={handleRemoveFromCart}>Remover</button>
      ) : (
        <button onClick={handleAddToCart}>Adicionar</button>
      )}
    </div>
  );
};

export default Product;
