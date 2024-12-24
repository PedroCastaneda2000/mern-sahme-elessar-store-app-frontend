import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";

const ItemSummary = () => {
  const { lastAddedItem } = useSelector((state: RootState) => state.itemAdded);

  if (!lastAddedItem) return null;

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-4">
      <img
        src={lastAddedItem.imageUrl}
        alt={lastAddedItem.name}
        className="w-[96px] h-[128px] object-cover"
      />
      <div className="">
        <span className="font-serif text-16sm font-medium">
          {lastAddedItem.name}
        </span>
        <span className="font-serif text-16sm font-medium"></span>
        <p></p>

        <p className="text-[#333333] font-serif text-14sm font-medium">
          Material: <span>{lastAddedItem.material}</span>
        </p>
        <p className="text-[#333333] font-serif text-14sm font-medium">
          Stone: <span>{lastAddedItem.stone}</span>
        </p>
        <p className="text-[#333333] font-serif text-14sm font-medium">
          Subtotal: <span>${(lastAddedItem.price / 100).toFixed(0)} USD</span>
        </p>
      </div>
    </div>
  );
};

export default ItemSummary;
