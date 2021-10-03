import { useStyles } from "../../styles/stylesProductCard";

import { Box, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const CartOrderSummary = () => {
  const classes = useStyles();
  const products = useSelector((state) => state.cart);

  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  return (
    <Paper elevation={3} className={classes.cardOrder}>
      <Typography variant="h5" className={classes.titleTwo}>
        RESUMO DO PEDIDO
      </Typography>
      <Box className={classes.container}>
        <Typography variant="h6">
          CUR<strong>SOS</strong>
        </Typography>
        <Typography variant="h6">Quantidade: {products.length}</Typography>
        <Typography variant="h6">
          Total:{" "}
          {totalPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Typography>
      </Box>
    </Paper>
  );
};

export default CartOrderSummary;
