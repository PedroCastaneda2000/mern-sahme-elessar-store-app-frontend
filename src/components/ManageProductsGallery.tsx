import { Products } from "@/types";
import ManageProductCard from "./ManageProductCard";

type Props = {
  products: Products;
  onProductSelect: (productId: string) => void;
};

const ManageProductsGallery = ({ products, onProductSelect }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-between gap-y-4">
        {products.data.map((product) => (
          <ManageProductCard
            key={product._id}
            product={product}
            onProductSelect={onProductSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageProductsGallery;
