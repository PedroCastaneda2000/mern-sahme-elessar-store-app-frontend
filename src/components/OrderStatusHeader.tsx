import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDeliveryTime = () => {
    const standardDeliveryTime = 7;
    const orderDateTime = new Date(order.createdAt);

    orderDateTime.setDate(orderDateTime.getDate() + standardDeliveryTime);
    const now = new Date();
    const diff = orderDateTime.getTime() - now.getTime();

    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return days;
  };

  const getOrderStatusInfo = () => {
    return (
      ORDER_STATUS.find((o) => o.value === order.status) || ORDER_STATUS[0]
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <div className="text-14sm xl:text-16sm flex gap-2 font-serif font-normal">
          <h1 className="w-[90px] xl:w-24">Order Status</h1>
          <p>:</p>
          <h1>{getOrderStatusInfo().label}</h1>
        </div>
        <div className="text-14sm xl:text-16sm flex gap-2 font-serif font-normal">
          <h1 className="w-[90px]">Expected in</h1>
          <p>:</p>
          <h1>{getExpectedDeliveryTime()} Days</h1>
        </div>
      </div>
      <Progress
        className="h-1 animate-pulse"
        value={getOrderStatusInfo().progressValue}
      />
    </div>
  );
};

export default OrderStatusHeader;
