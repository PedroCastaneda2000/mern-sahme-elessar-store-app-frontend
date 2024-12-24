import { CartItemsType } from "@/store/cart/CartSlice";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
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
    <div>
      <div className="flex flex-col gap-4">
        <Separator />
        <div className="min-h-24">
          {cartItems.map((item) => (
            <div className="flex flex-col mb-4">
              <div className="grid grid-cols-[1fr_3fr_2fr] md:grid-cols-[1fr_3fr_2fr_2fr]">
                <div id="1">
                  <img
                    src={item.imageUrl}
                    className="w-[112px] h-[96px] md:w-[96px] md:h-[128px] object-cover"
                  />
                </div>

                <div
                  id="2-3"
                  className="grid grid-cols-subgrid md:col-span-2 col-span-1 ml-8 sm:ml-8 md:ml-8 lg:ml-0"
                >
                  <div
                    id="2"
                    className="md:col-start-1 col-start-1 flex flex-col gap-2"
                  >
                    <span className="text-16sm font-serif font-normal">
                      {item.name}
                    </span>
                    <span className="text-16sm font-serif font-normal">
                      {item.name}
                    </span>
                  </div>

                  <div id="3" className=" md:col-start-2 col-start-1">
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="outline"
                        className="mr-2 border-[1.5px] rounded-none h-11 px-6 border-black cursor-pointer"
                      >
                        <span onClick={() => removeOneFromCart(item._id)}>
                          <img className="w-3 h-3" src={removeOneIcon} />
                        </span>
                        <span className="w-6 flex justify-center px-4 text-16sm font-serif">
                          {item.quantity}
                        </span>
                        <span onClick={() => addOneToCart(item._id)}>
                          <img
                            className="w-3 h-3 rounded-none"
                            src={addOneIcon}
                          />
                        </span>
                      </Badge>
                      <span>
                        <img
                          className="w-5 h-5  cursor-pointer"
                          src={removeIcon}
                          onClick={() => removeFromCart(item._id)}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div id="4" className="text-end">
                  <span className="text-16sm font-serif font-normal ">
                    ${(item.price / 100).toFixed(0)} USD
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="w-full flex justify-center sm:justify-end md:justify-end mt-8">
            {cartItems.length > 0 && (
              <Button
                onClick={() => clearCart()}
                variant="outline"
                className="rounded-none text-center text-14sm text-black font-serif w-32 border-black border-[1.5px] shadow-none"
              >
                Clear Cart
              </Button>
            )}
          </div>
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default OrderSummary;
