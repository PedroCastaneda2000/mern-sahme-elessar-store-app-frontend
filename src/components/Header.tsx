import { Link } from "react-router-dom";
import BagIcon from "./BagIcon";
import MainNav from "./MainNav";
import ItemAddedNotification from "./ItemAddedNotification";
const Header = () => {
  return (
    <>
      <div className="bg-main-light border-b-main-outline sticky top-0 z-40 w-full border-b border-opacity-10">
        <div className="container mx-auto flex h-16 items-center justify-between px-[5%]">
          <div>
            <MainNav />
          </div>
          <Link
            to="/"
            className="text-20md xl:text-32md font-regular text-color-dark font-serif tracking-tight"
          >
            Ah Sahm Elessar
          </Link>
          <div>
            <Link to="/manage-cart">
              <BagIcon />
            </Link>
          </div>
        </div>
      </div>
      <ItemAddedNotification />
    </>
  );
};

export default Header;
