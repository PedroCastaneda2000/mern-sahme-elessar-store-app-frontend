import { Products } from "@/types";
import ProductCard from "./ProductCard";

type Props = {
  products: Products;
};

const ProductsGallery = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-y-6 gap-x-[22px] md:grid-cols-3 md:gap-x-6 md:gap-y-12 xl:grid-cols-4">
      {products.data.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGallery;
