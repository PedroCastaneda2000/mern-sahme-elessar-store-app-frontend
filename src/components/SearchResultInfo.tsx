import { Link } from "react-router-dom";

type Props = {
  total: number;
  category: string;
};

const SearchResultInfo = ({ total, category }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span className="text-14sm font-medium font-serif uppercase">
        Found {total} Products in the {category} Category
        <Link
          to="/"
          className="ml-1 text-12sm font-medium font-serif uppercase underline"
        >
          Change Category
        </Link>
      </span>
      insert sort dropdown here:
    </div>
  );
};

export default SearchResultInfo;
