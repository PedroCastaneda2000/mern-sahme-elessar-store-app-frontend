import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
import LoadingButton from "./LoadingButton";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import UserProfileForm, {
  UserFormData,
} from "@/forms/user-profile-form/UserProfileForm";
import { useGetMyUser } from "@/api/MyUserApi";

type Props = {
  onCheckout: (userFormData: UserFormData) => void;
  disabled: boolean;
  isLoading: boolean;
};

const CheckoutButton = ({ onCheckout, disabled, isLoading }: Props) => {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();

  const { currentUser, isLoading: isGetMyUserLoading } = useGetMyUser();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <Button
        onClick={onLogin}
        className="text-16sm bg-button-primary hover:bg-button-primary-hover h-11 w-full rounded-none text-center font-serif font-medium md:max-w-[384px]"
      >
        Log in to Checkout
      </Button>
    );
  }

  if (isAuthLoading || !currentUser || isLoading) {
    return <LoadingButton />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={disabled}
          className="text-14sm xl:text-16sm bg-button-primary hover:bg-button-primary-hover h-11 w-full max-w-[358px] rounded-none text-center font-serif font-medium"
        >
          Go to Checkout
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-main-lighter max-w-sm rounded-sm p-3 md:max-w-lg xl:max-w-xl">
        <UserProfileForm
          currentUser={currentUser}
          onSave={onCheckout}
          isLoading={isGetMyUserLoading}
          title="Confirm Delivery Details"
          buttonPlaceholder="Continue to payment"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutButton;
