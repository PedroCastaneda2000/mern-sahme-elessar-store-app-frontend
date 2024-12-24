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

const ProductPage = () => {
  const { productId } = useParams();
  const { product, isLoading } = useGetProduct(productId);
  const dispatch = useDispatch();

  const handleAddToCartAndOpenDrawer = (product: Product) => {
    // Dispatch addToCart to add the product to the cart
    dispatch(addToCart({ ...product, quantity: 1 }));

    // Set the last claimed product in the drawer slice
    dispatch(
      setLastAddedItem({
        _id: product._id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        material: product.material,
        stone: product.stone,
      })
    );

    // Open the drawer
    dispatch(openNotification());
  };

  if (isLoading || !product) return <p>Loading...</p>;

  return (
    <div className="grid md:grid-cols-[4fr_2fr] gap-6 w-full">
      <AspectRatio ratio={1 / 1}>
        <img
          src={product.imageUrl}
          className="object-cover h-full w-full max-h-[672px]"
        />
      </AspectRatio>
      <ProductDetails
        product={product}
        addToCart={handleAddToCartAndOpenDrawer}
      />
    </div>
  );
};

export default ProductPage;
