import { Separator } from "@radix-ui/react-separator";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <div className="bg-[#333333] py-10 text-white">
      <div className="container mx-auto px-[5%] flex flex-col justify-between items-center gap-16">
        <div className="w-full justify-between">
          <div className="flex md:flex-row-reverse flex-col justify-center md:justify-between gap-12 ">
            <form className="flex flex-col text-14lk font-light font-inter uppercase gap-4 text-white max-width-none md:max-w-[408px]">
              <div className="flex flex-col gap-4 text-center md:text-start ">
                <h1 className="text-normal text-24md font-serif font-normal uppercase ">
                  enjoy $10 off your first order.
                </h1>
                <p className="text-14sm text-light  font-inter ">
                  Join us for plant tips, exclusive offers, and a 10% welcome
                  discount.
                </p>
              </div>
              <fieldset className=" bg-white text-black">
                <Input
                  className="bg-white rounded-none text-12sm font-light font-inter uppercase"
                  maxLength={40}
                  type="email"
                  placeholder="enter your email"
                />
              </fieldset>
            </form>
            <div className=" flex flex-col items-center md:items-start md:flex-row gap-8">
              <div className="flex flex-col items-center md:items-start text-14lk  font-light font-inter uppercase gap-2 text-gray-300 md:w-1/3">
                <h1 className="text-white text-24md font-normal font-serif">
                  Resources
                </h1>
                <span>size guide</span>
                <span>care guide</span>
                <span>how to wear</span>
                <span>warranty</span>
              </div>
              <div className="flex flex-col items-center md:items-start text-14lk  font-light font-inter uppercase gap-2 text-gray-300 md:w-1/3">
                <h1 className="text-white text-24md font-normal font-serif">
                  Services
                </h1>
                <span>track my order</span>
                <span>shipping & production</span>
                <span>resizing & repairs</span>
                <span>return policy</span>
              </div>
              <div className="flex flex-col items-center md:items-start text-14lk font-light font-inter uppercase gap-2 text-gray-300 md:w-1/3">
                <h1 className="text-white text-24md font-normal font-serif">
                  About
                </h1>
                <span>terms of service</span>
                <span>privacy policy</span>
                <span>contact us</span>
                <span>general faqs</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="w-full flex flex-col items-center gap-2">
            <div className="hidden md:flex justify-between w-full text-32md font-medium font-serif uppercase">
              <h2>Sahme</h2>
              <h2>Elessar</h2>
            </div>
            <div className="flex flex-col md:hidden items-center w-full text-32md font-medium font-serif uppercase">
              <h2>Sahme</h2>
              <h2>Elessar</h2>
            </div>
            <Separator className="border w-full bg-white" />
          </div>
          <div className="flex justify-between w-full">
            <span className="text-14sm text-light font-inter uppercase">
              ©2025 sahmeelessar.com
            </span>
            <span className="hidden md:flex gap-2 text-14sm text-light font-inter uppercase">
              <p>terms of service</p>
              <p>privacy policy</p>
              <p>contact us</p>
              <p>faqs</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
