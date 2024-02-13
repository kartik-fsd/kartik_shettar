import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
function Toast({ message, type }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 50000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed top-20 left-5 w-full max-w-xs p-4 space-x-4 flex items-center justify-between ${type === 'success' ? 'bg-green-500' : 'bg-red-600'} rounded-md text-white font-medium shadow-md`}
      role='alert'
    >
      <div className="flex items-center">
        {type === 'success' && (
          <svg
            className="w-5 h-5 text-white dark:text-white rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
            />
          </svg>
        )}

        {type === 'error' && (
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"
                fill="currentColor"
              />
            </svg>
            <span className="sr-only">Error icon</span>
          </div>
        )}

        <div className="ms-4 text-sm font-normal">{message}</div>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="text-white focus:outline-none"
      >
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 10.586l4.95-4.95 1.414 1.414L13.414 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12 5.636 7.05 7.05 5.636 12 10.586z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}

Toast.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

export default Toast;


