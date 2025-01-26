import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/Store";
import {
  addOneToCart,
  removeFromCart,
  removeOneFromCart,
  selectCartSubtotal,
  clearCart,
} from "@/store/cart/CartSlice";
import OrderSummary from "@/components/OrderSummary";
import { Link, useNavigate } from "react-router-dom";
import CheckoutButton from "@/components/CheckoutButton";
import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";
import { useCreateCheckoutSession } from "@/api/OrderApi";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const CartSubtotal = useSelector(selectCartSubtotal);
  const dispatch = useDispatch();

  const { createCheckoutSession, isLoading: isCheckoutLoading } =
    useCreateCheckoutSession();

  const handleRemoveFromCart = (cartItemId: string) => {
    dispatch(removeFromCart(cartItemId));
  };

  const handleAddOneToCart = (cartItemId: string) => {
    dispatch(addOneToCart(cartItemId));
  };

  const handleRemoveOneFromCart = (cartItemId: string) => {
    dispatch(removeOneFromCart(cartItemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const onCheckout = async (userFormData: UserFormData) => {
    console.log("userFormData", userFormData);
    const checkoutData = {
      cartItems: cartItems.map((cartItem) => ({
        productId: cartItem._id,
        name: cartItem.name,
        quantity: cartItem.quantity.toString(),
        imageUrl: cartItem.imageUrl,
        material: cartItem.material,
        stone: cartItem.stone,
      })),
      deliveryDetails: {
        name: userFormData.name,
        addressLine1: userFormData.addressLine1,
        city: userFormData.city,
        country: userFormData.country,
        email: userFormData.email as string,
      },
    };

    const data = await createCheckoutSession(checkoutData);
    window.location.href = data.url;
  };

  const navigate = useNavigate();

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center gap-6">
          <span className="text-28md xl:text-40lg text-color-dark text-center font-serif font-normal">
            Your cart is empty...
          </span>
          <Button
            onClick={() => navigate("/products")}
            className="text-14sm xl:text-16sm bg-button-primary hover:bg-button-primary-hover text-color-light h-11 w-full max-w-[224px] rounded-sm font-serif font-medium"
          >
            View Gallery
          </Button>
        </div>
      ) : (
        <div className="text-color-dark flex flex-col gap-4">
          <div className="flex items-end justify-between">
            <h1 className="text-28md xl:text-40lg font-serif font-medium">
              Your Cart
            </h1>
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/products"
                className="font-inter text-12sm md:text-14sm xl:text-16sm hidden text-end font-normal italic hover:underline hover:underline-offset-4 xl:flex"
              >
                Continue shopping
              </Link>
            </div>
          </div>

          <div className="text-14sm grid grid-cols-[1fr_3fr_2fr] text-start font-serif font-light md:grid-cols-[1fr_3fr_2fr_2fr]">
            <span>Products</span>
            <span className="col-start-3 hidden md:block">Quantity</span>
            <span className="col-span-2 text-end md:col-span-1">Total</span>
          </div>
          <Separator />
          <OrderSummary
            cartItems={cartItems}
            removeFromCart={handleRemoveFromCart}
            addOneToCart={handleAddOneToCart}
            removeOneFromCart={handleRemoveOneFromCart}
            clearCart={handleClearCart}
          />
          <Separator />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-2 xl:items-end">
              <div className="text-18sm flex items-center gap-6 font-serif font-normal">
                <span className="uppercase">Subtotal</span>
                <span>
                  ${CartSubtotal}{" "}
                  <span className="text-12sm xl:text-14sm">USD</span>
                </span>
              </div>
              <p className="text-14sm font-serif font-normal">
                Taxes and{" "}
                <span className="text-color-dark/60 underline">shipping</span>{" "}
                calculated at checkout
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-4 xl:items-end">
              {" "}
              <CheckoutButton
                disabled={cartItems.length === 0}
                onCheckout={onCheckout}
                isLoading={isCheckoutLoading}
              />
              <Link
                to="/products"
                className="font-inter text-14sm xl:text-16sm text-end font-normal italic hover:underline hover:underline-offset-4 xl:hidden"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
