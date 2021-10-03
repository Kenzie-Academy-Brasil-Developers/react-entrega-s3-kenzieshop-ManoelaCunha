import CartList from "../../components/CartList";
import CartOrderSummary from "../../components/CartOrder";

const Cart = () => {
  return (
    <>
      <CartOrderSummary />
      <CartList />
    </>
  );
};

export default Cart;
