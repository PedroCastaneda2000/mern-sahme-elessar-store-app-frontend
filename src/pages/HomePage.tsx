import placeholderImage from "../assets/ui_image_placeholder 1.svg";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 ">
      <div className="flex flex-col py-6 md:py-8 gap-6 text-center">
        <h1 className="text-28md md:text-40lg font-normal font-serif tracking-tight uppercase">
          Lorem ipsum dolor sit
        </h1>
        <span className="text-16sm font-light font-inter uppercase ">
          Lorem ipsum dolor sit amet consectetur. Lorem id eget nisi eget.
        </span>
      </div>

      <div className="flex flex-col gap-7">
        <div className="grid md:grid-cols-3 gap-9">
          <img className="h-[512px] object-cover" src={placeholderImage} />
          <img className="h-[512px] object-cover" src={placeholderImage} />
          <img className="h-[512px] object-cover" src={placeholderImage} />
        </div>
        <img className="object-cover" src={placeholderImage} />
      </div>
    </div>
  );
};

export default HomePage;
