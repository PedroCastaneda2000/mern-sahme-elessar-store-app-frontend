import { useSelector } from "react-redux";
import { selectTotalCartItems } from "@/store/cart/CartSlice";
import BagIcon from "../assets/bag-icon.svg";

const CartIcon = () => {
  const totalItems = useSelector(selectTotalCartItems);

  return (
    <div className="relative">
      <img src={BagIcon} alt="Cart" className="h-4 w-4 xl:h-5 xl:w-5" />
      {totalItems > 0 && (
        <span className="text-8sm xl:text-10sm md:text-10sm bg-color-dark absolute -bottom-1 -right-1 flex size-3.5 items-center justify-center rounded-full font-serif font-normal text-white xl:size-4">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
