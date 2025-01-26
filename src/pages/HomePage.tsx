import { Link, useNavigate } from "react-router-dom";
import bottomCanvas from "../assets/silver-aquamarine-ring.png";
import earringsCategoryImage from "../assets/silver-moonstone-earring-canvas.png";
import necklacesCategoryImage from "../assets/silver-moonstone-necklace-canvas.png";
import ringsCategoryImage3 from "../assets/rose-gold-sapphire-ring-canvas.png";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate("/products", {
      state: { selectedCategory: category.toLowerCase() },
    });
  };
  return (
    <div className="text-color-dark flex flex-col gap-4 xl:gap-8">
      <div className="flex flex-col gap-4 text-center xl:gap-6">
        <h1 className="text-28md xl:text-40lg font-serif font-normal">
          Uncover the Treasure Trove
        </h1>
        <span className="text-14sm xl:text-16sm font-serif font-light">
          Handcrafted Jewelry born from the whispers of ancient myths and
          legends.
        </span>
      </div>
      <div className="flex flex-col gap-4 md:gap-6 xl:gap-8">
        <div className="grid grid-cols-3 gap-x-3.5 md:gap-x-[26px] xl:gap-x-9">
          <button
            key="rings"
            onClick={() => handleCategoryClick("rings")}
            className="flex flex-col items-center gap-3 hover:underline hover:underline-offset-4"
          >
            <img
              className="h-[192px] rounded-sm object-cover md:h-[352px] xl:h-[512px]"
              src={ringsCategoryImage3}
              alt="rings category"
            />
            <span className="text-14sm xl:text-16sm font-serif font-medium">
              View Rings
            </span>
          </button>
          <button
            key="earrings"
            onClick={() => handleCategoryClick("earrings")}
            className="flex flex-col items-center gap-3 hover:underline hover:underline-offset-4"
          >
            <img
              className="h-[192px] rounded-sm object-cover md:h-[352px] xl:h-[512px]"
              src={earringsCategoryImage}
              alt="earrings category"
            />
            <span className="text-14sm xl:text-16sm font-serif font-medium">
              View Earrings
            </span>
          </button>

          <button
            key="necklaces"
            onClick={() => handleCategoryClick("necklaces")}
            className="flex flex-col items-center gap-3 hover:underline hover:underline-offset-4"
          >
            <img
              className="h-[192px] rounded-sm object-cover md:h-[352px] xl:h-[512px]"
              src={necklacesCategoryImage}
              alt="necklaces category"
            />
            <span className="text-14sm xl:text-16sm font-serif font-medium">
              View Necklaces
            </span>
          </button>
        </div>
        <div className="relative">
          <span className="text-color-light text-20md xl:text-28md bg-red absolute left-4 top-4 max-w-[336px] font-serif font-light uppercase xl:w-[512px]">
            From the Mediterranean Vaults...
          </span>
          <Button
            asChild
            className="text-14sm xl:text-16sm bg-main-light/70 hover:bg-color-light text-color-dark absolute left-1/2 top-[50%] z-20 h-11 min-w-[192px] -translate-x-1/2 rounded-sm font-serif font-medium"
          >
            <Link to="/details/67958583b10043f4d8f74171">View Now</Link>
          </Button>

          <img
            className="h-[358px] w-full rounded-sm object-cover md:h-[448px] xl:h-[576px]"
            src={bottomCanvas}
          />
          <span className="text-color-light text-20md xl:text-28md bg-red absolute bottom-4 right-4 h-auto max-w-[336px] whitespace-normal break-words text-right font-serif font-light uppercase xl:w-[512px]">
            The Tempestuous Tidal Stone of Poseidon
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
