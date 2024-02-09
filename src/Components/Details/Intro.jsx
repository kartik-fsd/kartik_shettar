import PropTypes from "prop-types";
function Intro({ data }) {
  return (
    <section
      className="max-w-4xl mx-auto p-4 lg:px-4"
      aria-label="Introduction Section"
    >
      <h2 className="text-gray-300 font-semibold text-3xl mb-4">
        Know Who I Am
      </h2>
      <h2 className="text-gray-300 font-semibold text-xl mb-4">{data.greet}</h2>

      <div className="text-gray-400">
        <p className="mb-4" aria-live="assertive" aria-atomic="true">
          {data.headline}
        </p>

        <p className="mb-4 text-wrap" aria-live="polite" aria-atomic="true">
          {data.about}
        </p>
      </div>
    </section>
  );
}

Intro.propTypes = {
  data: PropTypes.shape({
    greet: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
  }).isRequired,
};

export default Intro;
