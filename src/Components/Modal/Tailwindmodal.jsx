import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, title, content ,footer}) => {
  if (!isOpen) return null; // Skip rendering if modal is closed

  const modalId = "modal"; // Use a unique ID for accessibility

  return (
    <div
      id={modalId}
      tabIndex="-1"
      role="dialog"
      aria-labelledby={`${modalId}-title`}
      aria-modal="true"
      className="fixed top-0 left-0 h-screen w-screen z-50 flex justify-center items-center bg-neutral-900 bg-opacity-80"
    >
      <div className="w-full max-w-md mx-5">
        <div className="bg-white rounded-lg shadow dark:bg-neutral-800">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-600">
            <h2 className="text-xl text-zinc-300 font-semibold">{title}</h2>
            <button
              type="button"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 focus:outline-none"
              onClick={onClose}
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.348 5.636l-1.414-1.414L10 8.586 6.066 4.65 4.65 6.065 8.586 10l-3.95 3.95 1.415 1.414L10 11.414l3.934 3.936 1.414-1.414L11.414 10l3.934-3.936z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-4 md:p-5 space-y-4 text-zinc-300 overflow-y-auto max-h-96">
            {content()}
          </div>

          {/* Footer */}
          <div className="flex items-center space-x-4 p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-500">
                {footer()}
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
  footer: PropTypes.func
};

export default Modal;
