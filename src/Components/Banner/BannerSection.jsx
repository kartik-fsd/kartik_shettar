import PropTypes from 'prop-types';
const ProjectShowcase = ({ banner  }) => {
  return (
    <main
      className="max-w-4xl my-6 mx-2 sm:mx-auto bg-cover bg-center h-max text-zinc-800 py-24 px-10 rounded-lg opacity-80"
      style={{ backgroundImage: `url(${banner})`, backgroundBlendMode: 'darken' }}
      loading ="eager"
    >
      <section className="md:w-1/2 flex flex-col justify-center items-start z-10">
        <h1 className="text-3xl font-bold mt-2">Project Showcase</h1>
        <p className="text-lg mb-6 leading-relaxed">
          Explore my diverse projects that showcase my skills in front-end, full-stack, and mobile development.
        </p>

        <button
        type='button'
        onClick={() => {
          const featuredSection = document.getElementById('featured-section');
          if (featuredSection) {
            featuredSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
          className="inline-flex items-center px-4 py-2 text-base font-medium rounded-md text-white bg-teal-700 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-200"
        >
          View Projects
          <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="white">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293z" clipRule="evenodd" />
          </svg>
        </button>
      </section>
    </main>
  );
};

ProjectShowcase.propTypes = {
    banner: PropTypes.string.isRequired,
  };

export default ProjectShowcase;
