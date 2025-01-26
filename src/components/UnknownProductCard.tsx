import unknownCanvas from "../assets/ui_image_placeholder 1.svg";

const UnknownProductCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <img
        src={unknownCanvas}
        className="w-full h-[358px] md:h-[420px] xl:h-[448px] object-cover rounded-sm"
      />
      <div className="flex justify-between md:flex-col md:gap-1 md:justify-start">
        <span className="text-14sm xl:text-16sm font-normal font-serif uppercase">
          Lorem ipsum dolor sit amet.
        </span>
        <span className="text-14sm xl:text-16sm font-normal font-serif uppercase">
          $1250 <span className="text-12sm xl:text-14sm">USD</span>
        </span>
      </div>
    </div>
  );
};

export default UnknownProductCard;
