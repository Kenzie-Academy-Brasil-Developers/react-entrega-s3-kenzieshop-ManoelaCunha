import { Box, Typography } from "@material-ui/core";
import ProductsList from "../../components/ProductsList";
import { useStyles } from "../../styles/stylesProductCard";

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.boxTitle}>
        <Typography variant="h3" className={classes.title}>
          CURSOS DE PROGRAMAÇÃO
        </Typography>
        <Typography variant="h5" className={classes.title}>
          Aprenda as principais linguagens de programação do mercado!
        </Typography>
      </Box>
      <ProductsList />
    </>
  );
};

export default Home;
