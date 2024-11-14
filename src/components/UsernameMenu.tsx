// This file will have the User's Menu after login into the site. inside the MainNav.tsx
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { logout } = useAuth0();

  return (
    <div className="flex flex-col gap-4">
      <Link
        to="/manage-product"
        className="text-16sm font-light font-inter hover:underline hover:underline-offset-4"
      >
        Manage Store
      </Link>
      <Link
        to="/manage-restaurant"
        className="text-16sm font-light font-inter hover:underline hover:underline-offset-4"
      >
        Manage Restaurant
      </Link>
      <Link
        to="/user-profile"
        className="text-16sm font-light font-inter hover:underline hover:underline-offset-4"
      >
        User Profile
      </Link>

      <Button
        onClick={() => logout()}
        className="bg-black min-w-[224px] h-12 rounded-none text-16sm font-medium font-serif uppercase"
      >
        Log Out
      </Button>
    </div>
  );
};

export default UsernameMenu;
