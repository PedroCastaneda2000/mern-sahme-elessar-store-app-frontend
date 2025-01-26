import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();
  const navigate = useNavigate();

  if (isLoading) {
    return "Loading...";
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-28md xl:text-40lg text-color-dark text-center font-serif font-normal">
          Sorry, no active orders...
        </h1>
        <Button
          onClick={() => navigate("/products")}
          className="text-14sm xl:text-16sm bg-button-primary hover:bg-button-primary-hover text-color-light h-11 w-full max-w-[224px] rounded-sm font-serif font-medium"
        >
          View Gallery
        </Button>
      </div>
    );
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
