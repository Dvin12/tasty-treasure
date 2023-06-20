function SearchResultCard({ results }) {
  console.log(results);
  return (
    <div className="relative flex items-center justify-center">
      <img
        src={results.image}
        alt={results.title}
        className="rounded-3xl drop-shadow-md"
      />
      <div className="absolute flex h-full w-full cursor-pointer items-center justify-center rounded-3xl bg-gray-900 opacity-80 duration-300 xl:opacity-0 xl:hover:opacity-90 ">
        <h4 className="absolute w-60 text-center text-white">
          {results.title}
        </h4>
      </div>
    </div>
  );
}

export default SearchResultCard;
