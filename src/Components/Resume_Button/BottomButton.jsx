import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function BottomButton({pdf}) {
  return (
    <div className="flex justify-end mt-4">
    <Link
      className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-3.5 m-1 rounded transition-all flex items-center justify-between"
      to={pdf}
      download="Kartik-shettar"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
        />
      </svg>
      &nbsp;Download PDF
    </Link>
    <a
      href="#_"
      className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-teal-600 text-teal-600"
    >
      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-teal-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <span className="relative text-teal-600 transition duration-300 group-hover:text-white ease flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mx-2 group-hover:text-white ease"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
          />
        </svg>
        Share
      </span>
    </a>
  </div>
  )
}

BottomButton.propTypes = {
    pdf : PropTypes.string.isRequired
}

export default BottomButton
