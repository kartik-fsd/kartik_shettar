import { useState, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa6";
import { experienceData } from "../../assets/data";
import { ExperienceCard } from "./ModalExperienceDetail";

// Use React.lazy to lazily load the Modal component
const Modal = lazy(() => import("../Modal/Tailwindmodal"));

const Experiences = ({ company, logo, dates, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalContent = () => (
    <div>
      {experienceData.map((exp) => (
        <ExperienceCard key={exp.id} {...exp} />
      ))}
    </div>
  );

  const handleClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <h3 className="text-gray-300 font-semibold text-3xl mb-6">Experience</h3>
      <article className="flex items-center justify-between sm:flex-row sm:items-center my-4 sm:space-x-4">
        <div className="flex items-center gap-4">
          <img
            className="w-16 h-16 rounded"
            src={logo}
            alt={company}
            loading="eager"
            role="presentation"
          />
          <div className="font-medium dark:text-white">
            <h2>{company}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{dates}</p>
          </div>
        </div>
        <div className="sm:hidden">
          <FaChevronRight
            aria-hidden="true"
            className="w-6 h-5 ms-2 -me-1 text-gray-900 dark:text-white"
            onClick={handleClick}
          />
        </div>
        <div className="hidden sm:block">
          <button
            type="button"
            className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
            onClick={handleClick}
          >
            View
            <FaChevronRight aria-hidden="true" className="w-6 h-5 ms-2 -me-1" />
          </button>
        </div>
      </article>
      <Suspense fallback={<div>Loading...</div>}>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          content={modalContent}
          title="Experience Details"
          footer={() => <></>}
        />
      </Suspense>
    </>
  );
};

Experiences.propTypes = {
  company: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
};

export default Experiences;
