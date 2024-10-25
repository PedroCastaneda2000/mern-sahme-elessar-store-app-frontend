import Bag from "../assets/bag-icon.svg";
import Search from "../assets/search-icon.svg";

const MainNavRight = () => {
  return (
    <div className="flex flex-end gap-4">
      <img className="hidden md:block w-4 h-4" src={Search} />
      <img className="w-4 h-4" src={Bag} />
    </div>
  );
};

export default MainNavRight;
