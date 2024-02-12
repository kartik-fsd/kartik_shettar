import Card from "../Card";
import { useSearchContext } from "../Context/useSearchContext";

function SearchProjects() {
  const { results, value, showResults } = useSearchContext();

  const notFoundMessage =
    results.length === 1 && results[0].id === "not-found" ? (
      <p className="text-red-500 font-bold">
        No results found for &quot;{value}&quot;.
      </p>
    ) : null;

  return (
    <div
      className={`max-w-4xl my-4 mx-auto p-4 lg:px-4 ${
        showResults ? "" : "hidden"
      }`}
    >
      <h2 className="text-xl font-bold text-gray-300">
        Search results for:{" "}
        <span className="text-lg text-gray-400">{value}</span> - (
        {results.length}) results
      </h2>
      {notFoundMessage}
      <div className="max-w-2xl py-4 sm:py-6 lg:max-w-none lg:py-8">
        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {/* Map over results only if there are actual projects */}
          {results.map(
            (project) =>
              project.id !== "not-found" && (
                <Card
                  key={project.id || project.uniqueIdentifier}
                  {...project}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchProjects;