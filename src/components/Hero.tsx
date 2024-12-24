import hero from "../assets/ui_image_placeholder 1.svg";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      {/* <img src={hero} className="w-full h-screen object-cover" /> */}
      <img src={hero} className="w-full h-[calc(100vh-64px)] object-cover" />
      <div className="absolute z-10 top-[70%] left-1/2 transform -translate-x-1/2">
        <Button
          asChild
          className="bg-white min-w-[224px] h-12 rounded-none text-black text-16sm font-medium font-serif uppercase hover:bg-gray-50"
        >
          <Link to="/products">View Gallery</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
