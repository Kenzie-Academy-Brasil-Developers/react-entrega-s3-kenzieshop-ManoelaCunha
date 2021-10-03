import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useStyles } from "../../styles/stylesProductCard";
import Product from "../Product";

const ProductsList = () => {
  const classes = useStyles();
  const products = useSelector((store) => store.products);

  return (
    <Box className={classes.box}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Box>
  );
};

export default ProductsList;
