type Props = {
  total: number;
};

const SearchResultInfo = ({ total }: Props) => {
  return (
    <div className="flex items-center justify-center md:justify-between">
      <p className="font-inter text-14sm xl:text-16sm font-light text-black">
        Searched and uncovered
        <span className="font-inter font-medium italic"> {total} </span> unique
        pieces.
      </p>
    </div>
  );
};

export default SearchResultInfo;
