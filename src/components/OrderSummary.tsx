import { CartItemsType } from "@/store/cart/CartSlice";
import { Badge } from "./ui/badge";
import removeOneIcon from "@/assets/remove-one-icon.svg";
import addOneIcon from "@/assets/add-one-icon.svg";
import removeIcon from "@/assets/remove-icon.svg";
import { Button } from "./ui/button";

type Props = {
  cartItems: CartItemsType[];
  addOneToCart: (cartItemId: string) => void;
  removeFromCart: (cartItemId: string) => void;
  removeOneFromCart: (cartItemId: string) => void;
  clearCart: () => void;
};

const OrderSummary = ({
  cartItems,
  addOneToCart,
  removeFromCart,
  removeOneFromCart,
  clearCart,
}: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        {cartItems.map((item) => (
          <div className="grid grid-cols-[96px_2fr_1fr] md:grid-cols-[96px_3fr_2fr_2fr] xl:grid-cols-[96px_3fr_2fr_2fr]">
            <div id="1">
              <img
                src={item.imageUrl}
                className="h-32 w-24 rounded-sm object-cover"
              />
            </div>

            <div
              id="2-3"
              className="col-span-1 ml-3 grid grid-cols-subgrid md:col-span-2"
            >
              <div
                id="2"
                className="col-start-1 mb-3 flex flex-col gap-2 md:col-start-1"
              >
                <div className="flex flex-col gap-2">
                  <h1 className="text-12sm md:text-14sm xl:text-16sm w-24 whitespace-normal break-words font-serif font-medium md:w-28 xl:w-32">
                    {item.name}
                  </h1>
                  <div className="font-inter text-12sm md:text-14sm xl:text-16sm flex flex-col font-normal italic">
                    <div className="flex gap-1">
                      <p className="w-9">Mat.</p>
                      <span>{item.material}</span>
                    </div>
                    <div className="flex gap-1">
                      <p className="w-9">Stn.</p>
                      <span>{item.stone}</span>
                    </div>
                    <div className="flex gap-1">
                      <p className="w-9">Sz.</p>
                      <span>18"</span>
                    </div>
                    <div className="flex gap-1">
                      <p className="w-9">Qty.</p>
                      <span>{item.quantity}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div id="3" className="col-start-1 md:col-start-2">
                <div className="flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="border-color-dark flex h-8 w-24 cursor-pointer justify-center gap-2 rounded-sm border-[1px] px-6"
                  >
                    <span onClick={() => removeOneFromCart(item._id)}>
                      <img className="size-3" src={removeOneIcon} />
                    </span>
                    <span className="text-14sm xl:text-16sm flex justify-center font-serif font-light">
                      {item.quantity}
                    </span>
                    <span onClick={() => addOneToCart(item._id)}>
                      <img className="size-3" src={addOneIcon} />
                    </span>
                  </Badge>
                  <span>
                    <img
                      className="size-4 cursor-pointer"
                      src={removeIcon}
                      onClick={() => removeFromCart(item._id)}
                    />
                  </span>
                </div>
              </div>
            </div>

            <div id="4" className="text-end">
              <p className="text-14sm xl:text-16sm font-serif font-normal">
                ${(item.price / 100).toFixed(0)}{" "}
                <span className="text-12sm xl:text-14sm">USD</span>
              </p>
            </div>
          </div>
        ))}
        <div className="mt-6 flex w-full justify-center xl:justify-end">
          {cartItems.length > 0 && (
            <Button
              onClick={() => clearCart()}
              variant="outline"
              className="text-14sm xl:text-16sm text-color-dark font-inter border-color-dark hover:bg-main-lighter h-8 w-32 rounded-sm border text-center font-normal italic shadow-none"
            >
              Clear Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
