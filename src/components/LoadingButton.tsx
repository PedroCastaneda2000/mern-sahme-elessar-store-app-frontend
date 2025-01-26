import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const LoadingButton = () => {
  return (
    <Button
      disabled
      className="bg-button-primary hover:to-button-primary-hover text-14sm xl:text-16sm h-11 w-full rounded-sm font-serif font-medium md:max-w-[240px]"
    >
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Loading
    </Button>
  );
};

export default LoadingButton;
