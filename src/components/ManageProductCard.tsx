import { Product } from "@/types";
import { Button } from "./ui/button";

type Props = {
  product: Product;
  onProductSelect: (productId: string) => void;
};

const ManageProductCard = ({ product, onProductSelect }: Props) => {
  return (
    <Button
      variant="ghost"
      className="flex h-full w-full flex-col gap-2 p-0 hover:bg-transparent hover:underline hover:underline-offset-4 md:gap-4"
      onClick={() => onProductSelect(product._id)}
    >
      <img
        src={product.imageUrl}
        className="h-[288px] min-w-[168px] rounded-sm object-cover md:h-[384px] xl:h-[448px]"
      />
      <div className="flex w-full flex-col gap-1 text-start">
        <span className="text-10sm md:text-12sm xl:text-14sm whitespace-normal break-words font-serif font-medium uppercase">
          {product.name}
        </span>
        <span className="text-10sm md:text-14sm xl:text-16sm font-serif font-medium">
          ${(product.price / 100).toFixed(0)}{" "}
          <span className="text-8sm md:text-12sm xl:text-14sm">USD</span>
        </span>
      </div>
    </Button>
  );
};

export default ManageProductCard;
