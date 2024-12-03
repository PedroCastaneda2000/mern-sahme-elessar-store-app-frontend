import { Products } from "@/types";
import ProductCard from "./ProductCard";

type Props = {
  products: Products;
};

const ProductsGallery = ({ products }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-between gap-y-4">
        {products.data.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGallery;
