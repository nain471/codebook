import { useLocation } from "react-router-dom";
import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFail } from "./components/OrderFail";

export const Order = () => {
  const { state } = useLocation();

  return (
    <main>
      { state.status ? <OrderSuccess data={state.data}/> : <OrderFail /> }
    </main>
  )
}