import { Product } from "@/types";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

type Props = {
  product: Product;
  addToCart: (product: Product) => void;
};

const ProductDetails = ({ product, addToCart }: Props) => {
  return (
    <Card className="flex flex-col items-center gap-6 rounded-none border-none bg-transparent shadow-none">
      <CardHeader className="flex flex-col gap-2 p-0">
        <CardTitle className="flex flex-col items-start gap-2 font-serif font-medium">
          <span className="text-28md capitalize">{product.name}</span>
          <span className="text-20md font-normal">
            ${(product.price / 100).toFixed(0)}{" "}
            <span className="text-16sm xl:text-18sm">USD</span>
          </span>
        </CardTitle>
        <Separator className="bg-main-outline bg-opacity-10" />
        <CardDescription className="text-color-dark flex flex-col gap-4 font-serif">
          <div className="flex flex-col gap-1">
            <h2 className="text-20md font-medium">Collection</h2>
            <p className="text-14sm xl:text-16sm font-inter font-normal">
              Lorem ipsum consectetur. Quam sed risus mattis eget scelerisque
              iaculis amet. <span className="capitalize">{product.name}</span>{" "}
              dolor sit amet consectetur. Quam sed risus mattis eget scelerisque
              iaculis amet. Sed urna a a faucibus sed bibendum. A justo etiam
              orci faucibus ut sollicitudin dapibus bibendum. Lectus tempor nunc
              a ac varius vitae.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-20md font-medium">Characteristics</h2>
            <div className="text-14sm xl:text-16sm font-inter flex flex-wrap gap-3 capitalize italic">
              <p>
                Material: <span>{product.material}</span>
              </p>
              <p>
                Stone: <span>{product.stone}</span>
              </p>
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <Button
        onClick={() => addToCart(product)}
        className="text-14sm xl:text-16sm bg-button-primary hover:bg-button-primary-hover h-11 w-full rounded-none text-center font-serif font-medium"
      >
        Claim Yours
      </Button>
    </Card>
  );
};

export default ProductDetails;
