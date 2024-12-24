import { Product } from "@/types";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link
      to={`/details/${product._id}`}
      className="grid grid-rows-[7fr_1fr] gap-3 md:gap-4 group min-w-[168px] md:min-w-[264px] h-[273px] md:h-[510px] "
    >
      <AspectRatio ratio={3 / 2}>
        <img src={product.imageUrl} className="w-full h-full object-cover" />
      </AspectRatio>
      <div className="flex flex-col gap-1">
        <span className="text-10sm md:text-14sm font-medium font-serif uppercase">
          {product.name}
        </span>
        <span className="text-10sm md:text-14sm font-medium font-serif ">
          ${(product.price / 100).toFixed(0)} USD
        </span>
        <span>{product.material}</span>
        <span>{product.stone}</span>
        <span>{product.category}</span>
        <span>{product.status}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
