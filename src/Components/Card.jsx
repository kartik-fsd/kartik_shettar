import PropTypes from 'prop-types';

function Card({ imgPath, title,isFeatured ,description }) {
  console.log(isFeatured)
  return (
    <div className="group relative">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-gray-800 shadow-sm shadow-neutral-800 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
        <img
          src={imgPath}
          alt={title || "Image"}
          aria-label={title || "Image"}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <h3 className="mt-6 text-sm text-gray-300">
          <span className="absolute inset-0" />
          {title}
      </h3>
      <h3 className="mt-1 text-xs text-gray-400">
          <span className="absolute inset-0" />
          {description.split('.')[0]}...
      </h3>

    </div>
  );
}

Card.propTypes = {
  imageAlt: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills:PropTypes.array,
  title: PropTypes.string.isRequired, 
  isFeatured :PropTypes.bool.isRequired
};

export default Card;
