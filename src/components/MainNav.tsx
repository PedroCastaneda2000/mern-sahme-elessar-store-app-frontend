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
import { useNavigate } from "react-router-dom";
import SearchBarNav, { SearchForm } from "./SearchBarNav";

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
        <img className="size-4 xl:size-5" src={Menu} />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-main-secondary h-screen w-[20%] min-w-[272px] space-y-4 px-4"
      >
        <SheetTitle className="text-14sm xl:text-16sm text-color-light font-serif font-medium">
          {isAuthenticated ? (
            <span>{user?.email}</span>
          ) : (
            <span>Welcome to Ah Sahme Elessar!</span>
          )}
        </SheetTitle>

        <SheetDescription className="text-16sm text-color-light flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <SearchBarNav
              placeHolder="Search by category..."
              onSubmit={handleSearchSubmit}
            />
          </div>

          <MainNavLinks />
          <Separator className="bg-main-lighter h-[0.5px]" />
          <div className="mt-2">
            {isAuthenticated ? (
              <UsernameMenu />
            ) : (
              <Button
                onClick={async () => await loginWithRedirect()}
                className="text-14sm xl:text-16sm bg-button-light hover:bg-button-light-hover text-color-dark h-11 w-full max-w-[240px] rounded-sm font-serif font-medium"
              >
                Sign In
              </Button>
            )}
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MainNav;
