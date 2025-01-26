import hero from "../assets/rose-gold-ruby-ring-canvas.png";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      <img src={hero} className="h-[calc(100vh-64px)] w-full object-cover" />
      <div className="absolute left-1/2 top-[70%] z-20 -translate-x-1/2 transform">
        <Button
          asChild
          className="text-14sm xl:text-16sm bg-button-primary hover:bg-button-primary-hover text-color-light h-11 min-w-[224px] rounded-sm font-serif font-medium"
        >
          <Link to="/products">View Gallery</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
