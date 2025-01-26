import { useDispatch } from "react-redux";
import {
  openNotification,
  setLastAddedItem,
} from "@/store/cart/ItemAddedSlice";
import { Product } from "@/types";
import ProductDetails from "@/components/ProductDetails";
import { useGetProduct } from "@/api/ProductApi";
import { useParams } from "react-router-dom";
import { addToCart } from "@/store/cart/CartSlice";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ProductFeatures from "@/components/ProductFeatures";

const ProductPage = () => {
  const { productId } = useParams();
  const { product, isLoading } = useGetProduct(productId);
  const dispatch = useDispatch();

  const handleAddToCartAndOpenDrawer = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));

    dispatch(
      setLastAddedItem({
        _id: product._id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        material: product.material,
        stone: product.stone,
      }),
    );

    dispatch(openNotification());
  };

  if (isLoading || !product) return <p>Loading...</p>;

  return (
    <div className="grid w-full gap-6 md:grid-cols-[6fr_4fr] md:gap-y-12">
      <AspectRatio ratio={1 / 1} className="shadow-sm">
        <img
          src={product.imageUrl}
          className="h-full w-full rounded-sm object-cover"
        />
      </AspectRatio>
      <div className="flex flex-col gap-8">
        <ProductDetails
          product={product}
          addToCart={handleAddToCartAndOpenDrawer}
        />
        <div className="md:hidden xl:block">
          <ProductFeatures />
        </div>
      </div>

      <div className="hidden md:col-span-2 md:block xl:hidden">
        <ProductFeatures />
      </div>
    </div>
  );
};

export default ProductPage;
