import { Product } from "@/types";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link
      to={`/details/${product._id}`}
      className="text-color-dark flex flex-col gap-2 hover:underline hover:underline-offset-4 md:gap-4"
    >
      <img
        src={product.imageUrl}
        className="h-[288px] min-w-[168px] rounded-sm object-cover md:h-[384px] xl:h-[448px]"
      />
      <div className="flex flex-col gap-1">
        <span className="text-10sm md:text-12sm xl:text-14sm whitespace-normal break-words font-serif font-medium uppercase">
          {product.name}
        </span>
        <span className="text-10sm md:text-14sm xl:text-16sm font-serif font-medium">
          ${(product.price / 100).toFixed(0)}{" "}
          <span className="text-8sm md:text-12sm xl:text-14sm">USD</span>
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
