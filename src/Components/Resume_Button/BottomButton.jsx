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
  </div>
  )
}

BottomButton.propTypes = {
    pdf : PropTypes.string.isRequired
}

export default BottomButton
