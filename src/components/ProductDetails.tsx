import { Product } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

type Props = {
  product: Product;
  addToCart: (product: Product) => void;
};

const ProductDetails = ({ product, addToCart }: Props) => {
  return (
    <Card className="border-none shadow-none rounded-none flex flex-col gap-6">
      <CardHeader className="p-0 flex flex-col gap-2">
        <CardTitle className="font-serif font-medium flex flex-col gap-2 items-start">
          <span className="text-32md">{product.name}</span>
          <span className="text-20md">
            ${(product.price / 100).toFixed(0)} USD
          </span>
        </CardTitle>
        <Separator />
        <CardDescription className="text-[#333333] flex flex-col gap-4 font-serif">
          <div className="flex flex-col gap-1">
            <h2 className="text-20md font-medium">Collection</h2>
            <p className="text-14sm font-normal font-inter">
              The [Treasure of Caesar Spada] Collection features the{" "}
              {product.name} dolor sit amet consectetur. Quam sed risus mattis
              eget scelerisque iaculis amet. Sed urna a a faucibus sed bibendum.
              A justo etiam orci faucibus ut sollicitudin dapibus bibendum.
              Lectus tempor nunc a ac varius vitae.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-20md font-medium">Characteristics</h2>
            <div className="flex flex-wrap gap-3 text-14sm font-inter capitalize">
              {/* <p>
                Category: <span className="italic">{product.category}</span>
              </p> */}
              <p>
                Material: <span className="italic">{product.material}</span>
              </p>
              <p>
                Stone: <span className="italic">{product.stone}</span>
              </p>
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <Button
        onClick={() => addToCart(product)}
        className="bg-black min-w-[224px] h-12 rounded-none text-16sm font-medium font-serif uppercase "
      >
        Claim Yours
      </Button>
      <CardContent className="p-3 border-1 shadow-sm bg-gray-50 flex flex-col gap-3 font-serif">
        <h2 className="text-20md font-medium">What Awaits You...</h2>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-3 text-14sm font-inter capitalize">
            <p>
              <span className="font-semibold">Perfectly Sized: </span>
              This delicate piece features a teardrop-shaped pendant, measuring
              [insert dimensions], gracefully suspended on a [chain type and
              length], designed to complement any [neckline] with eternal
              sophistication.
            </p>
            <p>
              <span className="font-semibold">Effortless Care: </span>Preserve
              the radiance of your piece with our Care Instructions,
              thoughtfully designed to make upkeep as effortless as wearing it.
            </p>
            <p>
              <span className="font-semibold">Sustainable Packaging: </span>
              Nestled in a beautifully designed jewelry box made from 100%
              sustainable materials, ensuring your piece arrives safely and
              responsibly, ready to captivate upon arrival.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
