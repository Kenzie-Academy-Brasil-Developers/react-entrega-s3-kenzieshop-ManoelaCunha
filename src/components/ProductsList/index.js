import { useSelector } from "react-redux";
import Product from "../Product";

const ProductsList = () => {
  const products = useSelector((store) => store.products);

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
