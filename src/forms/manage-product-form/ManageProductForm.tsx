import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import MaterialSection from "./MaterialSection";
import { Separator } from "@/components/ui/separator";
import StoneSection from "./StoneSection";
import StatusSection from "./StatusSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useEffect } from "react";
import CategorySection from "./CategorySection";
import PreviewProductCard from "@/components/PreviewProductCard";
import UnknownProductCard from "@/components/UnknownProductCard";
import DeleteButton from "@/components/DeleteButton";

const formSchema = z
  .object({
    name: z.string({
      required_error: "product name is required",
    }),
    price: z.coerce.number({
      required_error: "price is required",
      invalid_type_error: "must be a valid number",
    }),
    category: z.string({
      required_error: "product name is required",
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
  onDelete: () => void;
  isLoading: boolean;
  isDeleteLoading: boolean;
};

const ManageProductForm = ({
  onSave,
  isLoading,
  product,
  onDelete,
  isDeleteLoading,
}: Props) => {
  const form = useForm<ProductFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: 1275,
      category: "",
      material: "",
      stone: "",
      status: "",
      imageUrl: "",
      imageFile: undefined,
    },
  });

  useEffect(() => {
    if (!product) {
      return;
    }

    form.reset({
      name: product.name || "",
      price: product.price ? parseInt((product.price / 100).toFixed(2)) : 0,
      category: product.category || "",
      material: product.material || "",
      stone: product.stone || "",
      status: product.status || "",
      imageUrl: product.imageUrl || "",
      imageFile: undefined,
    });
  }, [form, product]);

  const onSubmit = (formDataJson: ProductFormData) => {
    const formData = new FormData();
    formData.append("name", formDataJson.name);
    formData.append("price", (formDataJson.price * 100).toString());
    formData.append("category", formDataJson.category);
    formData.append("material", formDataJson.material);
    formData.append("stone", formDataJson.stone);
    formData.append("status", formDataJson.status);

    if (formDataJson.imageFile) {
      formData.append(`imageFile`, formDataJson.imageFile);
    }
    onSave(formData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[3fr_2fr] xl:grid-cols-[6.4fr_2fr] xl:gap-12">
            <div className="order-last flex flex-col gap-4 md:order-first">
              <DetailsSection />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-6 md:gap-y-4">
                <MaterialSection />
                <StoneSection />
                <CategorySection />
                <StatusSection />
              </div>
              <ImageSection />
              <div className="mt-4 flex w-full gap-3">
                {isLoading ? (
                  <LoadingButton />
                ) : (
                  <Button
                    type="submit"
                    className="text-14sm xl:text-16sm bg-button-primary hover:bg-button-primary-hover h-11 w-full rounded-sm font-serif font-medium md:max-w-[240px]"
                  >
                    Submit
                  </Button>
                )}
                {product &&
                  (isDeleteLoading ? (
                    <LoadingButton />
                  ) : (
                    <DeleteButton onDelete={onDelete} />
                  ))}
              </div>
            </div>
            <div className="flex flex-col justify-end gap-6">
              {product ? (
                <PreviewProductCard
                  product={{
                    ...product,
                    name: product?.name || "Unnamed Product?",
                    price: product?.price || 1275,
                    category: product?.category || "Unknown Category?",
                  }}
                />
              ) : (
                <UnknownProductCard />
              )}
              <Separator className="bg-main-outline opacity-10 md:hidden" />
            </div>
          </div>
          <Separator className="bg-main-outline opacity-10" />
        </div>
      </form>
    </Form>
  );
};

export default ManageProductForm;
