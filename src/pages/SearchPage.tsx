import { useSearchProducts } from "@/api/ProductApi";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductsGallery from "@/components/ProductsGallery";
import OptionFilterSearch from "@/components/OptionFilterSearch";
import { Button } from "@/components/ui/button";

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

  useEffect(() => {
    if (category) {
      setSearchState((prevState) => ({
        ...prevState,
        searchQuery: "",
        page: 1,
        selectedMaterial: "",
        selectedStone: "",
        selectedStatus: "",
      }));
    }
  }, [category]);

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const navigate = useNavigate();

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
      page: 1,
    }));
  };

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
    return (
      <div className="mt-2 flex flex-col items-center justify-center gap-6">
        <h1 className="text-28md xl:text-40lg text-color-dark text-center font-serif font-normal">
          Sorry, no matching pieces...
        </h1>
        <Button
          onClick={() => navigate("/products")}
          className="text-14sm xl:text-16sm bg-button-primary hover:bg-button-primary-hover text-color-light h-11 w-full max-w-[224px] rounded-sm font-serif font-medium"
        >
          View Gallery
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-0">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 text-center md:text-start">
          <div className="flex flex-col justify-between gap-2">
            <h1 className="text-28md xl:text-40lg font-serif font-medium capitalize">
              {category}...
            </h1>
            <SearchResultInfo total={results.pagination.total} />
          </div>
          <SearchBar
            searchQuery={searchState.searchQuery}
            onSubmit={setSearchQuery}
            placeHolder="Search by name or filter..."
            onReset={resetSearch}
          />
          <OptionFilterSearch
            state={searchState}
            onFilterChange={updateFilter}
            onReset={resetFilters}
          />
        </div>

        {results.data.length === 0 ? (
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
            <ProductsGallery products={results} />
            <PaginationSelector
              page={results.pagination.page}
              pages={results.pagination.pages}
              onPageChange={setPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
