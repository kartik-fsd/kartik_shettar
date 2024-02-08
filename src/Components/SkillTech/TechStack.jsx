import PropTypes from 'prop-types';

function SkillStack({ optimizedData }) {
  return (
    <section className="mb-8">
            <h3 className="text-gray-200 font-semibold text-3xl mb-4">
        Tech & Tools
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {optimizedData
          .filter((techToolData) => techToolData.category === "techTool")
          .map((techToolData) => (
            <div
              key={techToolData.name}
              className="bg-gray-800 hover:bg-gray-700 text-zinc-300 font-bold py-2 px-4 rounded-lg inline-flex items-center"
              role="listitem"
              aria-label={`Skill: ${techToolData.name}`}
            >
              {techToolData.icon && (
                <span className="w-4 h-4 mr-2" role="img" aria-hidden="true">
                  <techToolData.icon />
                </span>
              )}
              <span className="text-sm" role="text">
                {techToolData.name}
              </span>
            </div>
          ))}
      </div>
    </section>
  );
}

SkillStack.propTypes = {
  optimizedData: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType, // Assuming it's a React component
    })
  ).isRequired,
};

export default SkillStack;

