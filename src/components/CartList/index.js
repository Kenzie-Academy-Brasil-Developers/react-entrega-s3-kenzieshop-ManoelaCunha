import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useStyles } from "../../styles/stylesProductCard";
import Product from "../Product";

const CartList = () => {
  const classes = useStyles();
  const cart = useSelector((store) => store.cart);

  return (
    <Box className={classes.box}>
      {cart.map((product, index) => (
        <Product
          key={index}
          productIndex={index}
          product={product}
          isRemovable
        />
      ))}
    </Box>
  );
};

export default CartList;
