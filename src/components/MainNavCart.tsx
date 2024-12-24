import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/Store";
import { removeFromCart } from "@/store/cart/CartSlice";
import OrderSummary from "./OrderSummary";
import BagIcon from "./BagIcon";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const MainNavRight = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (cartItemId: string) => {
    dispatch(removeFromCart(cartItemId));
  };

  return (
    <Sheet>
      <SheetTrigger>
        <BagIcon />
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col gap-4">
        <SheetTitle className="text-16sm font-medium font-serif bg-red-200">
          <span className="text-12sm">Cart</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col text-16sm text-black gap-4 py-2">
          <OrderSummary
            cartItems={cartItems}
            removeFromCart={handleRemoveFromCart}
          />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MainNavRight;
