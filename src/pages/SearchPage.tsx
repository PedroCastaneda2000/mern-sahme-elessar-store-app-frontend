import { useSearchProducts } from "@/api/ProductApi";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductsGallery from "@/components/ProductsGallery";
import OptionFilterSearch from "@/components/OptionFilterSearch";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedMaterial: string;
  selectedStone: string;
  selectedStatus: string;
};

const SearchPage = () => {
  const { category } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
    selectedMaterial: "",
    selectedStone: "",
    selectedStatus: "",
  });
  const { results, isLoading } = useSearchProducts(searchState, category);

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
      page: 1,
    }));
  };

  // const setSelectedMaterial = (material: string) => {
  //   setSearchState((prevState) => ({
  //     ...prevState,
  //     selectedMaterial: material, // Update selected material
  //     page: 1, // Reset to the first page
  //   }));
  // };
  // const setSelectedStone = (stone: string) => {
  //   setSearchState((prevState) => ({
  //     ...prevState,
  //     selectedStone: stone, // Update selected material
  //     page: 1, // Reset to the first page
  //   }));
  // };
  // const setSelectedStatus = (status: string) => {
  //   setSearchState((prevState) => ({
  //     ...prevState,
  //     selectedStatus: status, // Update selected material
  //     page: 1, // Reset to the first page
  //   }));
  // };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      page: 1,
    }));
  };

  const resetFilters = () => {
    setSearchState({
      ...searchState,
      selectedMaterial: "",
      selectedStone: "",
      selectedStatus: "",
      page: 1,
    });
  };

  const updateFilter = (key: keyof SearchState, value: string) => {
    setSearchState((prevState) => ({
      ...prevState,
      [key]: value,
      page: 1,
    }));
  };

  if (isLoading) {
    <span>Loading...</span>;
  }

  if (!results?.data || !category) {
    return <span>No results found...</span>;
  }

  return (
    <div className="flex flex-col gap-5">
      <SearchBar
        searchQuery={searchState.searchQuery}
        onSubmit={setSearchQuery}
        placeHolder="Search by Material or Name"
        onReset={resetSearch}
      />

      <SearchResultInfo total={results.pagination.total} category={category} />
      <h1 className="font-serif font-normal text-40lg uppercase">Collection</h1>
      <OptionFilterSearch
        state={searchState}
        onFilterChange={updateFilter}
        onReset={resetFilters}
      />
      <ProductsGallery products={results} />
      <PaginationSelector
        page={results.pagination.page}
        pages={results.pagination.pages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default SearchPage;
