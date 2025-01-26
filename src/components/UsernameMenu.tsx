import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { logout, user } = useAuth0();
  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

  return (
    <div className="flex flex-col gap-4">
      <Link
        to="/user-profile"
        className="text-14sm xl:text-16sm font-inter font-light hover:underline hover:underline-offset-4"
      >
        {user?.email?.trim().toLowerCase() === ADMIN_EMAIL.trim().toLowerCase()
          ? "Admin Profile"
          : "User Profile"}
      </Link>
      <Link
        className="text-14sm xl:text-16sm font-inter font-light hover:underline hover:underline-offset-4"
        to="/order-status"
      >
        Order Status
      </Link>

      {user?.email?.trim().toLowerCase() ===
        ADMIN_EMAIL.trim().toLowerCase() && (
        <Link
          to="/manage-product"
          className="text-14sm xl:text-16sm font-inter font-light hover:underline hover:underline-offset-4"
        >
          Manage Store
        </Link>
      )}

      <Button
        onClick={() => logout()}
        className="text-14sm xl:text-16sm text-color-dark bg-button-light hover:bg-button-light-hover mt-4 h-11 min-w-[224px] rounded-sm font-serif font-medium"
      >
        Sign Out
      </Button>
    </div>
  );
};

export default UsernameMenu;
