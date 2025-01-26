import { Products } from "@/types";
import ManageProductCard from "./ManageProductCard";

type Props = {
  products: Products;
  onProductSelect: (productId: string) => void;
};

const ManageProductsGallery = ({ products, onProductSelect }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-y-6 gap-x-[22px] md:grid-cols-3 md:gap-x-6 md:gap-y-12 xl:grid-cols-4">
      {products.data.map((product) => (
        <ManageProductCard
          key={product._id}
          product={product}
          onProductSelect={onProductSelect}
        />
      ))}
    </div>
  );
};

export default ManageProductsGallery;
