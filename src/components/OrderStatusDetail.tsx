import { Order } from "@/types";
import { Separator } from "./ui/separator";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-y-4 gap-x-3 md:grid md:grid-cols-4 md:gap-x-3 md:justify-start md:gap-y-4">
        {order.cartItems.map((item) => (
          <div className="flex gap-3">
            <img
              src={item.imageUrl}
              className="w-12 h-20 object-cover rounded-sm xl:w-24 xl:h-32"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-12sm w-24 font-serif font-medium whitespace-normal break-words xl:text-16sm xl:w-32">
                {item.name}
              </h1>
              <div className="flex flex-col font-inter font-normal text-12sm italic xl:text-16sm">
                <div className="flex gap-1">
                  <p className="w-9 ">Mat.</p>
                  <span className=" w-11 whitespace-normal break-words">
                    {item.material}
                  </span>
                </div>
                <div className="flex gap-1">
                  <p className=" b w-9">Stn.</p>
                  <span>{item.stone}</span>
                </div>
                <div className="flex gap-1">
                  <p className="w-9">Sz.</p>
                  <span>6</span>
                </div>
                <div className="flex gap-1">
                  <p className="w-9">Qty.</p>
                  <span>{item.quantity}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Separator />
      <div className="flex flex-col md:flex-row gap-6 md:justify-between">
        <div className="flex flex-col gap-2 ">
          <div className="font-serif font-normal text-14sm xl:text-16sm flex gap-2">
            <h1 className="w-[60px]">Client</h1>
            <p>:</p>
            <h1>{order.deliveryDetails.name}</h1>
          </div>
          <div className="font-serif font-normal text-14sm xl:text-16sm flex gap-2 ">
            <h1 className="w-[60px]">Address</h1>
            <p>:</p>
            <p>
              {order.deliveryDetails.addressLine1},{order.deliveryDetails.city}
            </p>
          </div>
          <div className="font-serif text-14sm xl:text-16sm flex gap-2 ">
            <h1 className="w-[60px]">Subtotal</h1>
            <p>:</p>
            <p>
              ${(order.totalAmount / 100).toFixed(0)}{" "}
              <span className="text-12sm xl:text-14sm">USD</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
