import { useGetProducts } from "@/api/ProductApi";
import ProductsGallery from "@/components/ProductsGallery";
import OptionFilterProducts from "@/components/OptionFilterProducts";
import PaginationSelector from "@/components/PaginationSelector";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export type ProductsState = {
  page: number;
  selectedMaterial: string;
  selectedStone: string;
  selectedStatus: string;
  selectedCategory: string;
};

const CollectionPage = () => {
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

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (!products?.data) {
    return <span>No products found!</span>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-6 text-center md:text-start">
        <h1 className="text-28md md:text-40lg font-normal font-serif tracking-tight uppercase">
          The Gallery
        </h1>
      </div>
      <Separator />
      <OptionFilterProducts
        state={productsState}
        onFilterChange={updateFilter}
        onReset={resetFilters}
      />
      <ProductsGallery products={products} />
      <PaginationSelector
        page={products.pagination.page}
        pages={products.pagination.pages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default CollectionPage;
