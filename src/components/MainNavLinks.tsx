import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const MainNavLinks = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate("/products", {
      state: { selectedCategory: category.toLowerCase() },
    });
  };

  return (
    <div className="text-color-light flex flex-col gap-4">
      <Link
        className="text-14sm xl:text-16sm font-inter font-light hover:underline hover:underline-offset-4"
        to="/products"
      >
        Gallery
      </Link>
      <Button
        onClick={() => handleCategoryClick("rings")}
        className="text-14sm xl:text-16sm font-inter text-color-light h-auto justify-start rounded-none p-0 font-light hover:underline hover:underline-offset-4"
        variant="link"
      >
        Rings
      </Button>
      <Button
        onClick={() => handleCategoryClick("necklaces")}
        className="text-14sm xl:text-16sm font-inter text-color-light h-auto justify-start rounded-none p-0 font-light hover:underline hover:underline-offset-4"
        variant="link"
      >
        Necklaces
      </Button>
      <Button
        onClick={() => handleCategoryClick("earrings")}
        className="text-14sm xl:text-16sm font-inter text-color-light h-auto justify-start rounded-none p-0 font-light hover:underline hover:underline-offset-4"
        variant="link"
      >
        Earrings
      </Button>
    </div>
  );
};

export default MainNavLinks;
