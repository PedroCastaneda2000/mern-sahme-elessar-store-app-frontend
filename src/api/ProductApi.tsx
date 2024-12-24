import { ProductsState } from "@/pages/GalleryPage";
import { SearchState } from "@/pages/SearchPage";
import { Product, Products, ProductSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchProducts = (
  searchState: SearchState,
  category?: string
) => {
  const createSearchRequest = async (): Promise<ProductSearchResponse> => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page.toString());
    if (searchState.selectedMaterial) {
      params.set("material", searchState.selectedMaterial);
    }
    if (searchState.selectedStone) {
      params.set("stone", searchState.selectedStone);
    }
    if (searchState.selectedStatus) {
      params.set("status", searchState.selectedStatus);
    }

    const response = await fetch(
      `${API_BASE_URL}/api/product/search/${category}?${params.toString()}`
    );

    if (isLoading) {
      <span>Loading...</span>;
    }
    if (!response.ok) {
      throw new Error("Failed to get product");
    }

    return response.json();
  };
  const { data: results, isLoading } = useQuery(
    ["searchProducts", searchState],
    createSearchRequest,
    {
      enabled: !!category,
    }
  );
  return {
    results,
    isLoading,
  };
};

export const useGetProducts = (productsState: ProductsState) => {
  const getProductsRequest = async (): Promise<Products> => {
    const params = new URLSearchParams();
    if (productsState.selectedMaterial) {
      params.set("material", productsState.selectedMaterial);
    }
    if (productsState.selectedStone) {
      params.set("stone", productsState.selectedStone);
    }
    if (productsState.selectedStatus) {
      params.set("status", productsState.selectedStatus);
    }
    if (productsState.selectedCategory) {
      params.set("category", productsState.selectedCategory);
    }
    params.set("page", productsState.page.toString());
    const response = await fetch(
      `${API_BASE_URL}/api/product/products?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("Failed to get products!");
    }

    return response.json();
  };

  const { data: products, isLoading } = useQuery(
    ["fetchProducts", productsState],
    getProductsRequest
  );

  return { products, isLoading };
};

export const useGetProduct = (productId?: string) => {
  const getProductByIdRequest = async (): Promise<Product> => {
    const response = await fetch(
      `${API_BASE_URL}/api/product/details/${productId}`
    );

    if (!response.ok) {
      throw new Error("Failed to get product!");
    }

    return response.json();
  };

  const { data: product, isLoading } = useQuery(
    "fetchProduct",
    getProductByIdRequest,
    {
      enabled: !!productId,
    }
  );

  return { product, isLoading };
};
