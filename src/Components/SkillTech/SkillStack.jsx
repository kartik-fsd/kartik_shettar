import PropTypes from "prop-types";
import React, { useMemo } from "react";

function RenderTechToolCategory(category, techTools ) {

  return (
    <section className="mb-8 bg-gray-800 text-white">
      <h2 className="text-xl mb-4 font-bold tracking-tight text-gray-300 capitalize">
        {category}
      </h2>
      <div className="flex flex-wrap" >
        {techTools.map((techToolData) => (
          <div
            key={techTools.icon}
            className="bg-gray-700 hover:bg-teal-600 text-zinc-300 font-bold py-2 px-4 m-2 rounded-xl shadow-md flex items-center"
            role="listitem"
            aria-label={`Tech & Tool: ${techToolData.name}`}
            title={`Tech & Tool: ${techToolData.name}`}
          >
            <span className="flex items-center space-x-1">
              {techToolData.icon && (
                <span
                  className="w-7 h-7 flex items-center text-white"
                  role="img"
                  aria-hidden="true"
                >
                  {React.createElement(techToolData.icon)}
                </span>
              )}
              <span className="text-sm font-medium m-0 text-gray-100">
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
      frontend: optimizedData.filter(
        (techToolData) => techToolData.category === "frontend"
      ),
      backend: optimizedData.filter(
        (techToolData) => techToolData.category === "backend"
      ),
      database: optimizedData.filter(
        (techToolData) => techToolData.category === "database"
      ),
      devOps: optimizedData.filter(
        (techToolData) => techToolData.category === "devops"
      ),
      cloud: optimizedData.filter(
        (techToolsData) => techToolsData.category === "cloud"
      ),
      Tools: optimizedData.filter(
        (techToolData) => techToolData.category === "tools"
      ),
    }),
    [optimizedData]
  );

  return (
    <section className="bg-gray-800 text-white rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold tracking-tight text-center text-gray-100 mb-6">
        Tech Stack
      </h1>
      {Object.entries(categories).map(([category, techTools]) =>
        RenderTechToolCategory(category, techTools)
      )}
    </section>
  );
}

TechToolStack.propTypes = {
  optimizedData: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType, // Assuming it's a React component
    })
  ).isRequired,
};

export default TechToolStack;
