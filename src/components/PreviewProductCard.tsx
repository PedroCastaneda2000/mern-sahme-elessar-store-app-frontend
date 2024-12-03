import { Product } from "@/types";
import { AspectRatio } from "./ui/aspect-ratio";

type Props = {
  product: Product;
};

const PreviewProductCard = ({ product }: Props) => {
  return (
    <div className="grid grid-rows-[7fr_1fr] gap-3 md:gap-4 group w-full md:min-w-[264px] h-[510px] ">
      <AspectRatio ratio={3 / 2}>
        <img src={product.imageUrl} className="w-full h-full object-cover" />
      </AspectRatio>
      <div className="flex justify-between md:flex-col md:gap-1 md:justify-start">
        <span className="text-16sm md:text-14sm font-medium font-serif uppercase">
          {product.name}
        </span>
        <span className="text-16sm md:text-14sm font-medium font-serif ">
          ${(product.price / 100).toFixed(0)} USD
        </span>
      </div>
    </div>
  );
};

export default PreviewProductCard;
