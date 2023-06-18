function SearchResultCard({ results }) {
  console.log(results);
  return (
    <div className="flex items-center justify-center relative">
      <img
        src={results.image}
        alt={results.title}
        className="rounded-3xl drop-shadow-md"
      />
      <div className="bg-gray-900 absolute w-full h-full rounded-3xl opacity-0 hover:opacity-90 duration-300 flex items-center justify-center cursor-pointer ">
        <h4 className="absolute text-white text-center w-60">
          {results.title}
        </h4>
      </div>
    </div>
  );
}

export default SearchResultCard;
