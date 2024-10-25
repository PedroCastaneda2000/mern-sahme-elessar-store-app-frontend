// This file will have the User's Menu after login into the site. inside the MainNav.tsx
import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { logout } = useAuth0();

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger className="flex items-center text-16sm font-light font-inter hover:text-orange-500">
    //     User Profile
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent className="font-inter">
    //     <DropdownMenuItem>
    //       <Link
    //         to="/user-profile"
    //         className="font-medium text-16sm hover:text-orange-500"
    //       >
    //         User Profile
    //       </Link>
    //     </DropdownMenuItem>
    //     <Separator />
    //     <DropdownMenuItem>
    //       <Button
    //         onClick={() => logout()}
    //         className="flex-2 font-bold bg-orange-500"
    //       >
    //         Log Out
    //       </Button>
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <div className="flex flex-col gap-4">
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
