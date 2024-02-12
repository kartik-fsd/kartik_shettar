import { useCallback, useMemo } from "react";
import { projectsData } from "../../assets/data";
import { useSearchContext } from "../Context/useSearchContext";
import { debounce } from "lodash";

function SearchSection() {
  const { updateResults, value, updateValues,updateShowResult } = useSearchContext();

  const lowercaseKeywords = useMemo(
    () => value.toLowerCase().split(/\s+/),
    [value]
  );

  const executeSearch = useCallback(() => {
    // Check if the user has entered more than 3 letters
    if (value.trim().length >= 2) {
      const formattedResults = projectsData.filter((object) => {
        if (object.keywords) {
          return object.keywords.some((keyword) =>
            lowercaseKeywords.some((kw) => keyword.toLowerCase().includes(kw))
          );
        }
        return false; // Handle missing or empty keywords gracefully
      });

      // Check if results are empty and update context with "not found" message
      if (formattedResults.length === 0) {
        updateResults([
          {
            id: 'not-found',
            title: 'No Results Found',
            description: `No results found for "${value}".`,
          },
        ]);
      } else {
        // Update context with actual search results
        updateResults(formattedResults);
        updateShowResult()
      }
    } else {
      // Clear results if the search input is less than 3 letters
      updateResults([]);
    }
  }, [lowercaseKeywords, updateResults, updateShowResult, value]);

  const debouncedExecuteSearch = useMemo(
    () => debounce(executeSearch, 600),
    [executeSearch]
  );

  const handleInput = useCallback(
    (event) => {
      updateValues(event.target.value.trim());
    },
    [updateValues]
  );
  return (
    <section className="flex items-center max-w-4xl my-2 mx-auto p-2 lg:px-4">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
            />
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
          placeholder="Search project by skills..."
          required
          onChange={handleInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") debouncedExecuteSearch();
          }}
        />
      </div>
      <button
        type="button"
        onClick={debouncedExecuteSearch}
        className="p-2.5 ms-2 text-sm font-medium text-white bg-teal-700 rounded-lg border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </section>
  );
}

export default SearchSection;
