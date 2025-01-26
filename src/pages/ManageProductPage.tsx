import { useState } from "react";
import {
  useCreateMyProduct,
  useDeleteMyProduct,
  useGetMyProduct,
  useGetMyProductOrders,
  useUpdateMyProduct,
} from "@/api/MyProductApi";
import { useGetProducts } from "@/api/ProductApi";
import ManageProductsGallery from "@/components/ManageProductsGallery";
import OptionFilterProducts from "@/components/OptionFilterProducts";
import PaginationSelector from "@/components/PaginationSelector";
import ManageProductForm from "@/forms/manage-product-form/ManageProductForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderItemCard from "@/components/OrderItemCard";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export type ProductsState = {
  page: number;
  selectedMaterial: string;
  selectedStone: string;
  selectedStatus: string;
  selectedCategory: string;
};

const ManageProductPage = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>("");

  const { product } = useGetMyProduct({ productId: selectedProductId });
  const { createProduct, isLoading: isCreateLoading } = useCreateMyProduct();
  const { updateProduct, isLoading: isUpdateLoading } = useUpdateMyProduct({
    productId: selectedProductId,
  });
  const { deleteProduct, isLoading: isDeleteLoading } = useDeleteMyProduct({
    productId: selectedProductId,
  });

  const createProductAndSetId = (formData: FormData) => {
    createProduct(formData, {
      onSuccess: (newProduct) => {
        if (newProduct._id) {
          setSelectedProductId(newProduct._id);
        }
      },
    });
  };

  const handleDeleteProduct = () => {
    deleteProduct(undefined, {
      onSuccess: () => {
        setSelectedProductId("");
      },
    });
  };

  const isEditing = !!product;

  const [currentProductsState, setCurrentProductsState] =
    useState<ProductsState>({
      page: 1,
      selectedMaterial: "",
      selectedStone: "",
      selectedStatus: "",
      selectedCategory: "",
    });
  const { products, isLoading } = useGetProducts(currentProductsState);

  const setPage = (page: number) => {
    setCurrentProductsState((prevState) => ({ ...prevState, page }));
  };

  const resetFilters = () => {
    setCurrentProductsState({
      ...currentProductsState,
      selectedMaterial: "",
      selectedStone: "",
      selectedStatus: "",
      selectedCategory: "",
      page: 1,
    });
  };

  const updateFilter = (key: keyof ProductsState, value: string) => {
    setCurrentProductsState((prevState) => ({
      ...prevState,
      [key]: value,
      page: 1,
    }));
  };

  const handleProductSelect = (productId: string) => {
    setSelectedProductId(productId);
  };

  const { orders } = useGetMyProductOrders();

  const [currentTab, setCurrentTab] = useState("manage-products");

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!products?.data) {
    return <span>No products found!</span>;
  }

  const isManageProducts = currentTab === "manage-products";
  const heading = isManageProducts ? "Manage Gallery" : "Manage Orders";
  const description = isManageProducts
    ? "Create and update the "
    : "Review and update the status of ";
  const ending = isManageProducts
    ? " unique pieces of jewelry"
    : " active orders";

  return (
    <div>
      <Tabs value={currentTab} onValueChange={setCurrentTab}>
        <TabsList className="mb-6 flex h-full w-full flex-col gap-6 rounded-none bg-transparent p-0">
          <div className="flex w-full flex-col items-end justify-center gap-6 md:flex-row md:justify-between md:gap-0">
            <div className="flex w-full flex-col gap-2 text-center md:text-start">
              <h1 className="text-28md xl:text-40lg font-serif text-black">
                {heading}
              </h1>
              <p className="font-inter text-14sm xl:text-16sm font-light text-black">
                {description}
                <span className="font-inter font-medium italic">
                  {orders?.length ?? 0}
                </span>
                {ending}
              </p>
            </div>
            <div className="order-first flex w-full justify-center p-0 md:relative md:order-last md:w-auto md:justify-start">
              <TabsTrigger
                value="manage-products"
                className="text-14sm xl:text-16sm font-light italic"
              >
                Manage Gallery
              </TabsTrigger>
              <p className="font-inter text-14sm xl:text-16sm font-light">/</p>
              <TabsTrigger
                value="manage-orders"
                className="text-14sm xl:text-16sm font-light italic"
              >
                Manage Orders
              </TabsTrigger>
            </div>
          </div>
          <Separator
            className={
              isManageProducts
                ? "bg-main-outline opacity-10"
                : "bg-main-outline hidden opacity-10"
            }
          />
        </TabsList>

        <TabsContent
          value="manage-orders"
          className="flex flex-col gap-6 md:gap-12"
        >
          {orders?.map((order) => (
            <OrderItemCard key={order._id} order={order} />
          ))}
        </TabsContent>

        <TabsContent value="manage-products" className="flex flex-col gap-6">
          <ManageProductForm
            product={product}
            onDelete={handleDeleteProduct}
            onSave={isEditing ? updateProduct : createProductAndSetId}
            isLoading={isCreateLoading || isUpdateLoading}
            isDeleteLoading={isDeleteLoading}
          />
          <OptionFilterProducts
            state={currentProductsState}
            onFilterChange={updateFilter}
            onReset={resetFilters}
          />
          {products.data.length === 0 ? (
            <div className="mt-2 flex flex-col items-center justify-center gap-6">
              <h1 className="text-28md xl:text-40lg text-color-dark text-center font-serif font-normal">
                Sorry, no matching pieces...
              </h1>
              <Button
                onClick={resetFilters}
                className="text-14sm xl:text-16sm bg-button-primary hover:bg-button-primary-hover text-color-light h-11 w-full max-w-[224px] rounded-sm font-serif font-medium"
              >
                Reset
              </Button>
            </div>
          ) : (
            <>
              <ManageProductsGallery
                products={products}
                onProductSelect={handleProductSelect}
              />
              <PaginationSelector
                page={products.pagination.page}
                pages={products.pagination.pages}
                onPageChange={setPage}
              />
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ManageProductPage;
