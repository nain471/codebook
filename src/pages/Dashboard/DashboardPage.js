import { useState, useEffect } from "react";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { toast } from "react-toastify/unstyled";
import { getUserOrders } from "../../services";
import useTitle from "../../hooks/useTitle";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  

  useTitle("Dashboard")
  useEffect(() => {
    async function fetchOrders(){
      try{
        const data = await getUserOrders();
        setOrders(data);
      } catch(error){
        toast.error(error.message, { closeButton: true, position: "bottom-center" });
      }      
    }
    fetchOrders();
   
 }, [])

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>

      <section>
        { orders.length && orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        )) }
      </section>

      <section>
        { !orders.length && <DashboardEmpty /> }
      </section>

    </main>
  )
}