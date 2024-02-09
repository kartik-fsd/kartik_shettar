import PropTypes from "prop-types";

export const ExperienceCard = ({
  company,
  logo,
  dates,
  title,
  description: { summary, points },
}) => {
  return (
    <article className="w-100 p-6 bg-white dark:bg-slate-800">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-16 h-16 rounded-full"
          role="img"
          aria-label={`${company} logo`}
          loading="lazy"
        />
        <div>
          <h3 className="text-gray-400 text-md font-medium">{title}</h3>
          <p className="text-gray-400 text-xs">{company}</p>
          <time className="text-gray-500 text-xs">{dates}</time>
        </div>
      </div>

      <p className="text-gray-400 text-wrap text-sm my-3">{summary}</p>
      {points && (
        <ul className="text-gray-300 text-xs list-disc mb-2">
          {points.map((point, index) => (
            <li key={index} className="mb-1">
              {point}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
  
};

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  dates: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
    })
  ).isRequired,
};
