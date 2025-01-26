import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import { closeNotification } from "@/store/cart/ItemAddedSlice";
import { selectTotalCartItems } from "@/store/cart/CartSlice";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import ItemSummary from "./ItemSummary";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import CheckIcon from "../assets/check-icon.svg";

const ItemAddedNotification = () => {
  const { isOpen, lastAddedItem } = useSelector(
    (state: RootState) => state.itemAdded,
  );
  const dispatch = useDispatch();

  const totalItems = useSelector(selectTotalCartItems);

  const navigate = useNavigate();

  return (
    <Sheet open={isOpen} onOpenChange={() => dispatch(closeNotification())}>
      <SheetContent
        side="top"
        className="bg-main-lighter border-main-outline container right-[5%] top-16 mx-auto flex w-1/3 min-w-[272px] max-w-[336px] flex-col gap-4 rounded-sm border border-opacity-10 pb-12 pt-8 shadow-sm md:right-[8.5%] lg:right-[5%] 2xl:right-[10%]"
      >
        <SheetTitle className="font-inter text-14sm xl:text-16sm flex items-center gap-3 font-normal">
          <img className="h-4 w-4 xl:h-5 xl:w-5" src={CheckIcon} />
          Item was added to your cart
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
          className="text-14sm xl:text-16sm capitalized bg-button-primary text-color-light hover:bg-button-primary-hover hover:text-color-light h-11 rounded-sm font-serif font-medium"
          variant="outline"
        >
          View Cart ({totalItems})
        </Button>
        <Link
          to="/products"
          className="font-inter text-14sm xl:text-16sm text-center font-normal italic hover:underline hover:underline-offset-4"
        >
          Continue shopping
        </Link>
      </SheetContent>
    </Sheet>
  );
};

export default ItemAddedNotification;
