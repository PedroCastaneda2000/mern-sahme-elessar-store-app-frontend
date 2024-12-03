import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import MainNavRight from "./MainNavRight";
const Header = () => {
  return (
    <div className="sticky z-10 top-0 bg-white border-b-gray-200 w-full border-b">
      <div className="container flex justify-between items-center mx-auto px-[5%] h-16 ">
        <div>
          <MainNav />
        </div>
        <Link
          to="/"
          className="text-24md md:text-32md font-serif tracking-tight font-medium text-black uppercase "
        >
          sahme elessar
        </Link>
        <div>
          <MainNavRight />
        </div>
      </div>
    </div>
  );
};

export default Header;
