import Card from "../Card";
import { useSearchContext } from "../Context/useSearchContext";
import ModalContent from "../Modal/ModalContent";
import Modal from "../Modal/Tailwindmodal";

function SearchProjects() {
  const { results, value, showResults, selectedProject, setSelectedProject } =
    useSearchContext();

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const notFoundMessage =
    results.length === 1 && results[0].id === "not-found" ? (
      <p className="text-red-500 font-bold">
        No results found for &quot;{value}&quot;.
      </p>
    ) : null;

  const ModalContent = () => (
    <div className="flex flex-col justify-center space-y-4">
      <img
        src={selectedProject.imgPath}
        alt={selectedProject.title}
        role="presentation"
      />
      <h2 className="text-xl font-bold text-center">{selectedProject.title}</h2>
      <ul className="list-disc list-inside text-gray-400">
        <p className="text-lg text-gray-300">Skills</p>
        {selectedProject.skills.map((skill, key) => (
          <li key={key}>{skill}</li>
        ))}
      </ul>
      <p className="text-gray-400">
        <span className="text-lg text-gray-300">Summary : </span>
        {selectedProject.description}
      </p>
    </div>
  );

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
          {results.map(
            (project) =>
              project.id !== "not-found" && (
                <Card
                  key={project.id || project.uniqueIdentifier}
                  {...project}
                  onClick={() => openModal(project)}
                />
              )
          )}

          {selectedProject && (
            <Modal
              isOpen={true}
              onClose={closeModal}
              title={selectedProject.title}
              content={ModalContent}
              footer={() => (
                <>
                  <a
                    href={selectedProject?.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6 2a1 1 0 011 1v2h8a1 1 0 110 2H7a1 1 0 01-1-1V2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View the project
                  </a>

                  <a
                    href={selectedProject?.ghLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-teal-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2l4.586 4.586a2 2 0 010 2.828L10 16l6-6-6-6.414a2 2 0 012.828-0l4.586 4.586L6 18V2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Github
                  </a>
                </>
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchProjects;
