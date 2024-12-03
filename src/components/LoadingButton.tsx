import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const LoadingButton = () => {
  return (
    <div className="w-full flex justify-center md:justify-start mt-4">
      <Button
        disabled
        className="bg-black min-w-[224px] h-12 rounded-none text-16sm font-medium font-serif uppercase"
      >
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading
      </Button>
    </div>
  );
};

export default LoadingButton;
