import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return "Loading...";
  }

  if (!orders || orders.length === 0) {
    return "No orders found";
  }

  return (
    <div className="flex flex-col gap-6">
      {orders.map((order) => (
        <div className="bg-main-lighter border-main-outline text-color-dark flex flex-col gap-6 rounded-sm border border-opacity-10 px-3 pb-12 pt-6 shadow-sm md:px-6">
          <OrderStatusHeader order={order} />
          <OrderStatusDetail order={order} />
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;
