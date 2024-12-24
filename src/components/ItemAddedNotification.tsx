import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/Store"; // Update based on your setup
import { closeNotification } from "@/store/cart/ItemAddedSlice";
import { selectTotalCartItems } from "@/store/cart/CartSlice";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import ItemSummary from "./ItemSummary";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const ItemAddedNotification = () => {
  const { isOpen, lastAddedItem } = useSelector(
    (state: RootState) => state.itemAdded
  );
  const dispatch = useDispatch();

  const totalItems = useSelector(selectTotalCartItems);

  const navigate = useNavigate();

  return (
    <Sheet open={isOpen} onOpenChange={() => dispatch(closeNotification())}>
      <SheetContent
        side="top"
        className="mx-auto right-[5%] md:right-[8.5%] lg:right-[5%] 2xl:right-[10%] container top-16 w-1/3 max-w-[21rem] flex flex-col gap-4 border border-gray-200 rounded-none bg-white"
      >
        <SheetTitle className="font-inter font-normal text-14sm">
          Item added to your cart
        </SheetTitle>
        {lastAddedItem ? (
          <div className="flex flex-col gap-4">
            <ItemSummary />
          </div>
        ) : (
          <p>No items claimed yet.</p>
        )}
        <Button
          onClick={() => navigate("/manage-cart")}
          className="h-11 text-16sm font-normal font-inter capitalized rounded-none border-black border-[1.5px]"
          variant="outline"
        >
          View Cart ({totalItems})
        </Button>
        <Button className="h-11 text-16sm font-normal font-inter capitalized rounded-none bg-black">
          Checkout
        </Button>

        <span className="text-center text-14sm font-medium font-serif hover:underline hover:underline-offset-4">
          Continue Shopping
        </span>
      </SheetContent>
    </Sheet>
  );
};

export default ItemAddedNotification;
