// Collection, Best Sellers New Arrivals all these types of links this will be inside the MainNav.tsc file
import { Link } from "react-router-dom";

const MainNavLinks = () => {
  return (
    <div className="flex flex-col gap-4 text-16sm font-light font-inter">
      <Link to="/">Collection</Link>
      <Link to="/">New Arrivals</Link>
      <Link to="/">Best Sellers</Link>
      <Link to="/">Necklaces</Link>
      <Link to="/">Rings</Link>
      <Link to="/">Earrings</Link>
    </div>
  );
};

export default MainNavLinks;
