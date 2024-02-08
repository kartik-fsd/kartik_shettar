import PropTypes from "prop-types";

export const ExperienceCard = ({
  company,
  logo,
  dates,
  title,
  description,
  links,
}) => {
  return (
    <article className="w-100 p-6 bg-white  dark:bg-slate-800">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-16 h-16 rounded-full"
          role="img"
          aria-label={`${company} logo`}
        />
        <div>
          <h3 className="text-gray-400 text-md font-medium ">{title}</h3>
          <p className="text-gray-400 text-xs">{company}</p>
         
          <time className="text-gray-500 text-xs">{dates}</time>
        </div>
      </div>
     
        <p className="text-gray-400 text-wrap text-sm my-3">{description.summary}</p>
        
        <ul className="text-gray-300 text-xs list-disc mb-2">
        {description?.points?.map((point, index) => (
          <li key={index} className="mb-1">{point}</li>
        ))}
      </ul>
        {/* <div className="flex items-center justify-around">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-700"
            >
              {<link.icon className="h-5 w-5 text-teal-500" aria-hidden="true" />}
            </a>
          ))}
        </div> */}

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
