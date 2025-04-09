import { useCart } from "../../contexts";
import useTitle from "../../hooks/useTitle";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";


export const Cart = () => {
  const {cartList} = useCart();
  useTitle("Cart")
  return (
    <main>       
      { cartList.length ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}