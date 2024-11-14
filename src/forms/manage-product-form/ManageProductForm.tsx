import { Form, FormLabel } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import StyleSection from "./StyleSection";
import MaterialSection from "./MaterialSection";
import { Separator } from "@/components/ui/separator";
import StoneSection from "./StoneSection";
import StatusSection from "./StatusSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useEffect } from "react";

const formSchema = z
  .object({
    name: z.string({
      required_error: "product name is required",
    }),
    price: z.coerce.number({
      required_error: "delivery price is required",
      invalid_type_error: "must be a valid number",
    }),
    material: z.string({
      message: "please select at least one item",
    }),
    stone: z.string({
      message: "please select at least one item",
    }),
    status: z.string({
      message: "please select at least one item",
    }),
    style: z.array(z.string()).nonempty({
      message: "please select at least one item",
    }),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: "image is required" }).optional(),
  })
  .refine((data) => data.imageUrl || data.imageFile, {
    message: "Either image URL or image File must be provided",
    path: ["imageFile"],
  });

type ProductFormData = z.infer<typeof formSchema>;

type Props = {
  product?: Product;
  onSave: (productProductData: FormData) => void;
  isLoading: boolean;
};

const ManageProductForm = ({ onSave, isLoading, product }: Props) => {
  const form = useForm<ProductFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      style: [],
    },
  });

  useEffect(() => {
    if (!product) {
      return;
    }

    const priceFormatted = parseInt((product.price / 100).toFixed(2));

    const updatedProduct = {
      ...product,
      price: priceFormatted,
    };

    form.reset(updatedProduct);
  }, [form, product]);

  const onSubmit = (formDataJson: ProductFormData) => {
    const formData = new FormData();
    formData.append("name", formDataJson.name);
    formData.append("price", (formDataJson.price * 100).toString());
    formData.append("material", formDataJson.material);
    formData.append("stone", formDataJson.stone);
    formData.append("status", formDataJson.status);
    formDataJson.style.forEach((style, index) => {
      formData.append(`style[${index}]`, style);
    });
    if (formDataJson.imageFile) {
      formData.append(`imageFile`, formDataJson.imageFile);
    }

    onSave(formData);
  };

  // const { watch } = useFormContext();
  // const existingImageUrl = watch("imageUrl");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <FormLabel className="flex flex-col gap-2 font-inter font-light text-12sm uppercase">
            <h1 className="font-serif font-normal text-40lg">manage store</h1>
            <span>create and add a new product for your collection</span>
          </FormLabel>
          <Separator />
          <div className="grid grid-cols-[6fr_2fr] gap-12">
            <div className="flex flex-col gap-4">
              <DetailsSection />
              <div className="grid grid-cols-2 gap-6">
                <MaterialSection />
                <StoneSection />
                <StatusSection />
                <ImageSection />
              </div>
              <StyleSection />
              <Separator />
            </div>
            <div className="bg-pink-100"></div>
          </div>
          {isLoading ? (
            <LoadingButton />
          ) : (
            <Button type="submit">Submit</Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export default ManageProductForm;
