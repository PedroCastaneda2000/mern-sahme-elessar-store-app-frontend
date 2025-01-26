import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const PaginationSelector = ({ page, pages, onPageChange }: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination>
      <PaginationContent className="italic">
        {page != 1 && (
          <PaginationItem
            key="previous"
            className="font-inter text-14sm xl:text-16sm font-normal"
          >
            <PaginationPrevious
              className="pl-0.5"
              href="#"
              onClick={() => onPageChange(page - 1)}
            />
          </PaginationItem>
        )}

        {pageNumbers.map((number) => (
          <PaginationItem
            key={number}
            className="font-inter text-14sm xl:text-16sm rounded-sm font-normal"
          >
            <PaginationLink
              href="#"
              onClick={() => onPageChange(number)}
              isActive={page === number}
              className="focus:bg-main-lighter border-main-outline hover:bg-main-primary hover:text-color-light"
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        {page !== pageNumbers.length && (
          <PaginationItem
            key="next"
            className="font-inter text-14sm xl:text-16sm font-normal"
          >
            <PaginationNext
              className="pr-0"
              href="#"
              onClick={() => onPageChange(page + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSelector;
