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
import { Link } from "react-router-dom";
import CheckoutButton from "@/components/CheckoutButton";
import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";
import { useCreateCheckoutSession } from "@/api/OrderApi";

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

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-end">
        <span className="font-serif font-medium text-24md">Your Cart</span>
        <div className="flex gap-4 items-center justify-center">
          <Link
            to="/products"
            className="font-serif font-medium text-14sm text-end hover:underline hover:underline-offset-4"
          >
            Continue shopping
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_3fr_2fr] md:grid-cols-[1fr_3fr_2fr_2fr] font-serif text-14sm font-light text-start">
        <span>Products</span>
        <span className="hidden md:block col-start-3">Quantity</span>
        <span className="text-end col-span-2 md:col-span-1">Total</span>
      </div>
      <OrderSummary
        cartItems={cartItems}
        removeFromCart={handleRemoveFromCart}
        addOneToCart={handleAddOneToCart}
        removeOneFromCart={handleRemoveOneFromCart}
        clearCart={handleClearCart}
      />

      <div className="flex flex-col gap-4 items-center md:items-end">
        <div className="flex gap-6 justify-center md:justify-end font-serif font-normal text-18sm items-center">
          <span className="uppercase">Subtotal</span>
          <span>${CartSubtotal} USD</span>
        </div>
        <p className="font-serif font-normal text-14sm">
          Taxes and <span className="underline text-gray-500">shipping</span>{" "}
          calculated at checkout
        </p>

        <CheckoutButton
          disabled={cartItems.length === 0}
          onCheckout={onCheckout}
          isLoading={isCheckoutLoading}
        />
      </div>
    </div>
  );
};

export default CartPage;
