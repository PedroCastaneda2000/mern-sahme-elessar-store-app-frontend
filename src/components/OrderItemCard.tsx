import { Order, OrderStatus } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ORDER_STATUS } from "@/config/order-status-config";
import { useUpdateMyProductOrder } from "@/api/MyProductApi";
import { useEffect, useState } from "react";

type Props = {
  order: Order;
};

const OrderItemCard = ({ order }: Props) => {
  const { updateProductStatus, isLoading } = useUpdateMyProductOrder();

  const [status, setStatus] = useState<OrderStatus>(order.status);

  useEffect(() => {
    setStatus(order.status);
  }, [order.status]);

  const handleStatusChange = async (newStatus: OrderStatus) => {
    await updateProductStatus({
      orderId: order._id as string,
      status: newStatus,
    });
    setStatus(newStatus);
  };

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
    <Card className="flex flex-col gap-6 rounded-sm p-0">
      <CardHeader className="flex flex-col gap-6 px-3 py-0 pt-6 xl:px-6 xl:pt-6">
        <CardTitle className="flex flex-col gap-2 md:flex-row md:justify-between">
          <div className="text-14sm xl:text-16sm flex gap-2 font-serif font-normal">
            <h1 className="w-[90px] xl:w-24">Order Status</h1>
            <p>:</p>
            <h1>{getOrderStatusInfo().label}</h1>
          </div>
          <div className="text-14sm xl:text-16sm flex gap-2 font-serif font-normal">
            <h1 className="w-[90px]">Expected in</h1>
            <p>:</p>
            <h1>{getExpectedDeliveryTime()} days</h1>
          </div>
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col items-start gap-6 px-3 py-0 xl:px-6 xl:pt-6">
        <div className="flex flex-wrap gap-x-3 gap-y-4 md:grid md:grid-cols-4 md:justify-start md:gap-x-3 md:gap-y-4">
          {order.cartItems.map((cartItem) => (
            <div key={cartItem.productId} className="flex gap-3">
              <img
                src={cartItem.imageUrl}
                className="h-20 w-12 rounded-sm object-cover xl:h-32 xl:w-24"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-12sm xl:text-16sm w-24 whitespace-normal break-words font-serif font-medium xl:w-32">
                  {cartItem.name}
                </h1>
                <div className="font-inter text-12sm xl:text-16sm flex flex-col font-normal italic">
                  <div className="flex gap-1">
                    <p className="w-9">Mat.</p>
                    <span>{cartItem.material}</span>
                  </div>
                  <div className="flex gap-1">
                    <p className="w-9">Stn.</p>
                    <span>{cartItem.stone}</span>
                  </div>
                  <div className="flex gap-1">
                    <p className="w-9">Sz.</p>
                    <span>6</span>
                  </div>
                  <div className="flex gap-1">
                    <p className="w-9">Qty.</p>
                    <span>{cartItem.quantity}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Separator />
        <div className="mb-12 flex w-full flex-col gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <div className="text-14sm xl:text-16sm flex gap-2 font-serif font-normal">
              <h1 className="w-[60px]">Client</h1>
              <p>:</p>
              <h1>{order.deliveryDetails.name}</h1>
            </div>
            <div className="text-14sm xl:text-16sm flex gap-2 font-serif font-normal">
              <h1 className="w-[60px]">Address</h1>
              <p>:</p>
              <h1>
                {order.deliveryDetails.addressLine1},{" "}
                {order.deliveryDetails.city}
              </h1>
            </div>
          </div>
          <Separator className="md:hidden" />
          <div className="flex w-full flex-col gap-2 md:w-72 xl:w-[360px]">
            <Label
              htmlFor="status"
              className="text-14sm xl:text-16sm font-serif font-normal"
            >
              What is the Status for this order?
            </Label>
            <Select
              value={status}
              disabled={isLoading}
              onValueChange={(value) =>
                handleStatusChange(value as OrderStatus)
              }
            >
              <SelectTrigger
                id="status"
                className="font-inter text-14sm xl:text-16sm h-11 rounded-sm italic"
              >
                <SelectValue placeholder="Status"></SelectValue>
              </SelectTrigger>
              <SelectContent position="popper" className="rounded-sm">
                {ORDER_STATUS.map((status) => (
                  <SelectItem
                    key={status.value}
                    className="font-inter text-14sm xl:text-16sm rounded-sm italic"
                    value={status.value}
                  >
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItemCard;
