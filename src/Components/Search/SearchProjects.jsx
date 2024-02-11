import Card from "../Card";
import { useSearchContext } from "../Context/useSearchContext";

function SearchProjects() {
  const { results, value } = useSearchContext();
  return (
    <>
      {results.length > 0 && (
        <div className="max-w-4xl my-4 mx-auto p-4 lg:px-4">
          <h2 className="text-xl font-bold text-gray-300">
            Search result&apos;s for:{" "}
            <span className="text-lg text-gray-400">{value}</span> - (
            {results.length}) results
          </h2>
          <div className="max-w-2xl py-4 sm:py-6 lg:max-w-none lg:py-8">
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
              {results.map((project) => (
                <Card
                  key={project.id || project.uniqueIdentifier}
                  {...project}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {results.length === 0 && value.trim() !== "" && (
        <p className="text-xl text-center text-red-500 mt-4">No results found.</p>
      )}
    </>
  );
}

export default SearchProjects;
