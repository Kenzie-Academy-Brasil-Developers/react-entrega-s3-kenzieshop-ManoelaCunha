import { useStyles } from "../../styles/stylesProductCard";
import { Button, Paper, Typography } from "@material-ui/core";

import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";

const Product = ({ product, isRemovable = false, productIndex }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { name, price, image } = product;

  const handleAddToCart = () => {
    dispatch(addToCartThunk(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCartThunk(productIndex));
  };

  return (
    <Paper elevation={3} className={classes.card}>
      <figure>
        <img src={image} alt={name} className={classes.image} />
      </figure>
      <Typography variant="h5" className={classes.text}>
        {name}
      </Typography>
      <Typography variant="h6" className={classes.text}>
        {price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Typography>
      {isRemovable ? (
        <Button
          color="primary"
          variant="contained"
          onClick={handleRemoveFromCart}
        >
          Remover
        </Button>
      ) : (
        <Button color="primary" variant="contained" onClick={handleAddToCart}>
          Adicionar
        </Button>
      )}
    </Paper>
  );
};

export default Product;
