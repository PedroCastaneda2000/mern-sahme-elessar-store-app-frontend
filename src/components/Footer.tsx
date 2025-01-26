import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="bg-main-primary flex w-full flex-col gap-4 pb-12 pt-12 xl:pb-16">
      <div className="container mx-auto flex flex-col items-center gap-24 px-[5%]">
        <div
          id="1-2"
          className="flex w-full flex-col items-center gap-6 xl:flex-row-reverse xl:items-start xl:justify-between"
        >
          <form
            id="1"
            className="text-14sm font-inter text-color-light flex flex-col justify-center gap-6 text-center font-light md:w-[358px] xl:w-[408px] xl:text-start"
          >
            <div className="txt- flex flex-col gap-4">
              <h1 className="text-20md xl:text-28md font-serif font-normal">
                Enjoy $10 off your first order
              </h1>
              <p className="text-14sm xl:text-16sm text-normal font-inter font-normal italic">
                Join our newsletter for exclusive offers, early launch access,
                and more.
              </p>
            </div>

            <fieldset className="rounded-sm">
              <Input
                className="text-14sm xl:text-16sm font-inter text-color-dark bg-main-lighter h-11 rounded-sm font-normal italic"
                maxLength={40}
                type="email"
                placeholder="Enter your Email"
              />
            </fieldset>
          </form>
          <div
            id="2"
            className="text-color-light flex w-full max-w-[684px] flex-col items-center justify-center gap-6 md:flex-row xl:justify-start"
          >
            <div className="text-14sm xl:text-16sm font-inter t flex flex-col items-center gap-2 font-normal capitalize italic md:w-1/3 xl:items-start">
              <h1 className="text-20md xl:text-28md font-serif font-normal not-italic">
                Resources
              </h1>
              <span>size guide</span>
              <span>care guide</span>
              <span>how to wear</span>
              <span>warranty</span>
            </div>
            <div className="text-14sm xl:text-16sm font-inter flex flex-col items-center gap-2 text-center font-normal capitalize italic md:w-1/3 xl:items-start">
              <h1 className="text-20md xl:text-28md font-serif font-normal not-italic">
                Services
              </h1>
              <span>track my order</span>
              <span>shipping & production</span>
              <span>resizing & repairs</span>
              <span>return policy</span>
            </div>
            <div className="text-14sm xl:text-16sm font-inter flex flex-col items-center gap-2 font-normal capitalize italic md:w-1/3 xl:items-start">
              <h1 className="text-20md xl:text-28md font-serif font-normal not-italic">
                About
              </h1>
              <span>terms of service</span>
              <span>privacy policy</span>
              <span>contact us</span>
              <span>general faqs</span>
            </div>
          </div>
        </div>

        <div id="3" className="text-color-light flex w-full flex-col gap-4">
          <div className="flex justify-center xl:hidden">
            <h1 className="text-20md xl:text-28md font-serif font-medium">
              Ah Sahm Elessar
            </h1>
          </div>
          <div className="hidden justify-between xl:flex">
            <h1 className="text-20md xl:text-32md font-serif font-medium">
              Ah Sahm
            </h1>
            <h1 className="text-20md xl:text-32md font-serif font-medium">
              Elessar
            </h1>
          </div>
          <Separator />
          <div className="flex justify-center xl:justify-between">
            <p className="font-inter text-14sm font-normal uppercase">
              ©2025 global.sahmeelessar.com
            </p>
            <ul className="text-14sm font-inter hidden gap-4 font-normal uppercase xl:flex">
              <li>terms of services</li>
              <li>privacy policy</li>
              <li>contact us</li>
              <li>
                FAQ<span className="lowercase">s</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
