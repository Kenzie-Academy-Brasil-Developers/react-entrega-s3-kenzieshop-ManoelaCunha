import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/modules/cart/actions";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();
  const { id, name, price } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
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
