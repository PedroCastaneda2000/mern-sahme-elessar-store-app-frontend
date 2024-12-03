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
      className="grid grid-rows-[7fr_1fr] gap-3 md:gap-4 group max-w-[168px] md:max-w-[264px] h-[273px] md:h-[510px] p-0"
      onClick={() => onProductSelect(product._id)}
    >
      <img src={product.imageUrl} className=" h-full object-cover" />
      <div className="flex flex-col gap-1 items-start">
        <span className="text-10sm md:text-14sm font-medium font-serif uppercase">
          {product.name}
        </span>
        <span className="text-10sm md:text-14sm font-medium font-serif ">
          ${(product.price / 100).toFixed(0)} USD
        </span>
      </div>
    </Button>
  );
};

export default ManageProductCard;
