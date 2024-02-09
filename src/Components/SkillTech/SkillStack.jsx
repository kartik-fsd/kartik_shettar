import PropTypes from "prop-types";
import React, { useMemo } from "react";

function renderTechToolCategory(category, techTools) {
  const isColumnView = techTools.length < 3;

  return (
    <section className="mb-8 bg-gray-800 text-white">
      <h2 className="text-2xl mb-4 font-bold tracking-tight text-gray-100">
        {category}
      </h2>
      <div className={`grid grid-cols-${isColumnView ? 1 : 2} gap-4`}>
        {techTools.map((techToolData) => (
          <div
            key={techToolData.name}
            className="bg-gray-700 hover:bg-teal-600 text-zinc-300 font-bold py-2 px-4 rounded-lg shadow-md flex items-center justify-between"
            role="listitem"
            aria-label={`Tech & Tool: ${techToolData.name}`}
          >
            <span className="flex items-center  space-x-2">
              {techToolData.icon && (
                <span
                  className="w-7 h-7 mr-2 flex items-center text-white"
                  role="img"
                  aria-hidden="true"
                >
                  {React.createElement(techToolData.icon)}
                </span>
              )}
              <span className="text-sm font-medium text-gray-100">
                {techToolData.name}
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function TechToolStack({ optimizedData }) {
  const categories = useMemo(
    () => ({
      frontendTools: optimizedData.filter((techToolData) =>
        techToolData.category === "frontend"
      ),
      backendTools: optimizedData.filter((techToolData) =>
        techToolData.category === "backend"
      ),
      databaseTechTools: optimizedData.filter((techToolData) =>
        techToolData.category === "database"
      ),
      devOpsTechTools: optimizedData.filter((techToolData) =>
        techToolData.category === "devops"
      ),
      cloudTechTools: optimizedData.filter((techToolsData) =>
        techToolsData.category === "cloud"
      ),
      generalTechTools: optimizedData.filter((techToolData) =>
        techToolData.category === "tools"
      ),
    }),
    [optimizedData]
  );

  return (
    <section className="bg-gray-800 text-white rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold tracking-tight text-center text-gray-100">
        Tech Stack
      </h1>
      {Object.entries(categories).map(([category, techTools]) => (
        renderTechToolCategory(category, techTools)
      ))}
    </section>
  );
}

TechToolStack.propTypes = {
  optimizedData: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType, // Assuming it's a React component
    })
  ).isRequired,
};

export default TechToolStack;
