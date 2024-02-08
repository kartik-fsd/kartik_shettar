import PropTypes from "prop-types";


const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) {
    return null; // Skip rendering if modal is closed
  }

  return (
<div
      id="small-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed top-0 left-0 h-screen w-screen z-50 flex justify-center items-center bg-gray-900 bg-opacity-50"
    >
      <div className="w-full max-w-md mx-5">
        <div className="bg-white rounded-lg shadow dark:bg-slate-800">
          <h2 className="text-xl text-center text-zinc-300 font-semibold border-b border-gray-600 mb-2 py-3">
            {title}
          </h2>
          <div className="p-4 md:p-5 space-y-4 text-zinc-300 overflow-y-auto max-h-96">
            {content()}
          </div>
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-500">
            <button
              data-modal-hide="static-modal"
              type="button"
              className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            >
              Message
            </button>
            <button
              data-modal-hide="static-modal"
              type="button"
              className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-teal-300 rounded-lg border border-gray-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.func.isRequired,
  footer: PropTypes.func,
};

export default Modal;
