import { Link, useNavigate } from "react-router-dom";

const MainNavLinks = () => {
  const navigate = useNavigate();

  const handleReload = (url: string) => {
    if (window.location.pathname === url) {
      window.location.reload();
    } else {
      navigate(url);
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col gap-4 text-16sm font-light font-inter">
      <Link
        className="text-16sm font-light font-inter hover:underline hover:underline-offset-4"
        to="/products"
      >
        Collection
      </Link>
      <Link to="/">New Arrivals</Link>
      <Link to="/">Best Sellers</Link>
      <Link
        onClick={() => handleReload("/search/necklaces")}
        className="text-16sm font-light font-inter hover:underline hover:underline-offset-4"
        to="/search/necklaces"
      >
        Necklaces
      </Link>
      <Link
        onClick={() => handleReload("/search/rings")}
        className="text-16sm font-light font-inter hover:underline hover:underline-offset-4"
        to="/search/rings"
      >
        Rings
      </Link>
      <Link
        onClick={() => handleReload("/search/Earrings")}
        className="text-16sm font-light font-inter hover:underline hover:underline-offset-4"
        to="/search/rings"
      >
        Earrings
      </Link>
    </div>
  );
};

export default MainNavLinks;
