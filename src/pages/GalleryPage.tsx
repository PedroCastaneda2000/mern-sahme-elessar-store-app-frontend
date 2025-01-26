import { useGetProducts } from "@/api/ProductApi";
import ProductsGallery from "@/components/ProductsGallery";
import OptionFilterProducts from "@/components/OptionFilterProducts";
import PaginationSelector from "@/components/PaginationSelector";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export type ProductsState = {
  page: number;
  selectedMaterial: string;
  selectedStone: string;
  selectedStatus: string;
  selectedCategory: string;
};

const CollectionPage = () => {
  const location = useLocation();
  const [productsState, setProductsState] = useState<ProductsState>({
    page: 1,
    selectedMaterial: "",
    selectedStone: "",
    selectedStatus: "",
    selectedCategory: "",
  });
  const { products, isLoading } = useGetProducts(productsState);

  useEffect(() => {
    if (location.state?.selectedCategory) {
      setProductsState((prevState) => ({
        ...prevState,
        selectedCategory: location.state.selectedCategory.toLowerCase(),
        page: 1,
      }));
    }
  }, [location.state]);

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
    <div className="flex flex-col gap-6">
      <div className="flex flex-col text-center md:text-start">
        <h1 className="text-28md xl:text-40lg text-color-dark font-serif font-normal">
          The Gallery
        </h1>
      </div>
      <Separator className="bg-main-outline bg-opacity-10" />
      <OptionFilterProducts
        state={productsState}
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
          <ProductsGallery products={products} />
          <PaginationSelector
            page={products.pagination.page}
            pages={products.pagination.pages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
};

export default CollectionPage;
