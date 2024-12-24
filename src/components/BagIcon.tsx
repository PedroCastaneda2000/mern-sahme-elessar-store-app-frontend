import { useSelector } from "react-redux";
import { selectTotalCartItems } from "@/store/cart/CartSlice";
import BagIcon from "../assets/bag-icon.svg";

const CartIcon = () => {
  const totalItems = useSelector(selectTotalCartItems);

  return (
    <div className="relative">
      <img src={BagIcon} alt="Cart" className="w-4 h-4 md:w-5 md:h-5" />
      {totalItems > 0 && (
        <span className="absolute -bottom-1 -right-1 bg-black text-white font-serif font-normal text-10sm w-[14px] h-[14px] md:text-12sm md:w-4 md:h-4 flex items-center justify-center rounded-full">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
