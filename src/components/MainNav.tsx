import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Menu from "../assets/menu-icon.svg";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";
import MainNavLinks from "./MainNavLinks";
import SearchBar, { SearchForm } from "./SearchBar";
import { useNavigate } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <Sheet>
      <SheetTrigger>
        <img className="w-4 h-4 md:w-5 md:h-5" src={Menu} />
      </SheetTrigger>
      <SheetContent side="left" className="space-y-4">
        <SheetTitle className="text-16sm font-medium font-serif ">
          {isAuthenticated ? (
            <span>{user?.email}</span>
          ) : (
            <span>Welcome to Sahme Elessar!</span>
          )}
        </SheetTitle>

        <SheetDescription className="flex flex-col text-16sm text-black gap-4 py-2">
          <div className="flex flex-col gap-2">
            <Separator />
            <SearchBar
              placeHolder="Search by category..."
              onSubmit={handleSearchSubmit}
            />
            <Separator />
          </div>

          <MainNavLinks />
          <Separator />
          <span className="mt-2">
            {isAuthenticated ? (
              <UsernameMenu />
            ) : (
              <Button
                onClick={async () => await loginWithRedirect()}
                className="bg-black w-full min-w-[224px] h-12 rounded-none text-16sm font-medium font-serif uppercase"
              >
                Login
              </Button>
              // <Button
              //   onClick={async () => await loginWithRedirect()}
              //   variant="ghost"
              //   className="flex font-serif rounded-none h-10 text-base bg-gray-800 text-white w-full hover:bg-gray-600 hover:text-white uppercase"
              // >
              //   Login
              // </Button>
            )}
          </span>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MainNav;
