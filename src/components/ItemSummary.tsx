import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";

const ItemSummary = () => {
  const { lastAddedItem } = useSelector((state: RootState) => state.itemAdded);

  if (!lastAddedItem) return null;

  return (
    <div className="flex gap-3">
      <img
        src={lastAddedItem.imageUrl}
        className="w-24 h-32 object-cover rounded-sm md:w-24 md:h-32"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-12sm md:text-14sm w-24 font-serif font-medium whitespace-normal break-words xl:text-16sm xl:w-32">
          {lastAddedItem.name}
        </h1>
        <div className="flex flex-col font-inter font-normal text-12sm md:text-14sm italic xl:text-16sm">
          <div className="flex gap-1">
            <p className="w-9">Mat.</p>
            <span>{lastAddedItem.material}</span>
          </div>
          <div className="flex gap-1">
            <p className="w-9">Stn.</p>
            <span>{lastAddedItem.stone}</span>
          </div>
          <div className="flex gap-1">
            <p className="w-9">Sz.</p>
            <span>18"</span>
          </div>
          <div className="flex gap-1">
            <p className="w-9">Tot.</p>
            <p>
              ${(lastAddedItem.price / 100).toFixed(0)}{" "}
              <span className="text-10sm md:text-12sm xl:text-14sm">USD</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSummary;
