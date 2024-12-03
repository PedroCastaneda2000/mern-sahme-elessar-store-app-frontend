import { useState } from "react";
import {
  useCreateMyProduct,
  useGetMyProduct,
  useUpdateMyProduct,
} from "@/api/MyProductApi";
import { useGetProducts } from "@/api/ProductApi";
import ManageProductsGallery from "@/components/ManageProductsGallery";
import OptionFilterProducts from "@/components/OptionFilterProducts";
import PaginationSelector from "@/components/PaginationSelector";
import ManageProductForm from "@/forms/manage-product-form/ManageProductForm";

export type ProductsState = {
  page: number;
  selectedMaterial: string;
  selectedStone: string;
  selectedStatus: string;
  selectedCategory: string;
};

const ManageProductPage = () => {
  const [productId, setProductId] = useState<string>("");

  const { product } = useGetMyProduct({ productId });
  const { createProduct, isLoading: isCreateLoading } = useCreateMyProduct();

  const { updateProduct, isLoading: isUpdateLoading } = useUpdateMyProduct({
    productId,
  });

  const createProductAndSetId = (formData: FormData) => {
    createProduct(formData, {
      onSuccess: (newProduct) => {
        if (newProduct._id) {
          setProductId(newProduct._id);
        }
      },
    });
  };

  const isEditing = !!product;

  const [productsState, setProductsState] = useState<ProductsState>({
    page: 1,
    selectedMaterial: "",
    selectedStone: "",
    selectedStatus: "",
    selectedCategory: "",
  });
  const { products, isLoading } = useGetProducts(productsState);

  const setPage = (page: number) => {
    setProductsState((prevState) => ({ ...prevState, page }));
  };

  const resetFilters = () => {
    setProductsState({
      ...productsState,
      selectedMaterial: "",
      selectedStone: "",
      selectedStatus: "",
      selectedCategory: "",
      page: 1,
    });
  };

  const updateFilter = (key: keyof ProductsState, value: string) => {
    setProductsState((prevState) => ({
      ...prevState,
      [key]: value,
      page: 1,
    }));
  };

  const handleProductSelect = (productId: string) => {
    setProductId(productId);
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!products?.data) {
    return <span>No products found!</span>;
  }

  return (
    <div className="flex flex-col gap-4">
      <ManageProductForm
        product={product}
        onSave={isEditing ? updateProduct : createProductAndSetId}
        isLoading={isCreateLoading || isUpdateLoading}
      />
      <OptionFilterProducts
        state={productsState}
        onFilterChange={updateFilter}
        onReset={resetFilters}
      />
      <ManageProductsGallery
        products={products}
        onProductSelect={handleProductSelect}
      />
      <PaginationSelector
        page={products.pagination.page}
        pages={products.pagination.pages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default ManageProductPage;
