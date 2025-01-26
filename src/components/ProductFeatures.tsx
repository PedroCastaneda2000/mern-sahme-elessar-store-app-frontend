import { Card, CardContent } from "./ui/card";

const ProductFeatures = () => {
  return (
    <Card className="flex flex-col gap-6 rounded-sm border-none shadow-none">
      <CardContent className="border-main-outline bg-main-lighter border-1 flex flex-col gap-3 rounded-sm border border-opacity-10 p-3 font-serif shadow-sm">
        <h2 className="text-20md font-medium">What Awaits You...</h2>
        <div className="flex flex-col gap-1">
          <div className="text-14sm xl:text-16sm font-inter flex w-full flex-col gap-3 capitalize md:flex-row md:justify-center xl:flex-col">
            <div className="md:w-2/3 xl:w-auto">
              <span className="font-medium">Perfectly Sized: </span>
              <p>
                This delicate piece features a teardrop-shaped pendant,
                measuring [insert dimensions], gracefully suspended on a [chain
                type and length], designed to complement any [neckline] with
                eternal sophistication.
              </p>
            </div>
            <div className="md:w-2/3 xl:w-auto">
              <span className="font-medium">Effortless Care: </span>
              <p>
                Preserve the radiance of your piece with our Care Instructions,
                thoughtfully designed to make upkeep as effortless as wearing
                it.
              </p>
            </div>
            <div className="md:w-2/3 xl:w-auto">
              <span className="font-medium">Sustainable Packaging: </span>
              <p>
                Nestled in a beautifully designed jewelry box made from 100%
                sustainable materials, ensuring your piece arrives safely and
                responsibly, ready to captivate upon arrival.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductFeatures;
