import { AspectRatio } from "./ui/aspect-ratio";
import unknownCanvas from "../assets/ui_image_placeholder 1.svg";

const UnknownProductCard = () => {
  return (
    <div className="grid grid-rows-[7fr_1fr] gap-3 md:gap-4 group w-full md:min-w-[264px] h-[510px] ">
      <AspectRatio ratio={3 / 2}>
        <img src={unknownCanvas} className="w-full h-full object-cover" />
      </AspectRatio>
      <div className="flex justify-between md:flex-col md:gap-1 md:justify-start">
        <span className="text-16sm md:text-14sm font-medium font-serif uppercase">
          Lorem ipsum dolor sit.
        </span>
        <span className="text-16sm md:text-14sm font-medium font-serif ">
          $1075 USD
        </span>
      </div>
    </div>
  );
};

export default UnknownProductCard;
