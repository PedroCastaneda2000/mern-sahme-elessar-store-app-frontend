import { Product } from "@/types";

type Props = {
  product: Product;
};

const PreviewProductCard = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <img
        src={product.imageUrl}
        className="w-full h-[358px] md:h-[420px] xl:h-[448px] object-cover rounded-sm"
      />
      <div className="flex justify-between md:flex-col md:gap-1 md:justify-start">
        <span className="text-14sm xl:text-16sm font-medium font-serif uppercase">
          {product.name}
        </span>
        <span className="text-14sm xl:text-16sm font-medium font-serif ">
          ${(product.price / 100).toFixed(0)}{" "}
          <span className="text-12sm xl:text-14sm">USD</span>
        </span>
      </div>
    </div>
  );
};

export default PreviewProductCard;
