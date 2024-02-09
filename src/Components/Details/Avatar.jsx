import PropTypes from "prop-types";
import { FaRegCopy } from "react-icons/fa6";

function Avatar({ data }) {
  const copyEmail = () => navigator.clipboard.writeText(data.email); // Use navigator.clipboard for copying

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-4xl my-6 mx-auto p-4 lg:px-4 flex flex-col items-center">
        <figure className="avatar mb-4 flex justify-center">
          <img
            className="rounded-full object-cover w-24 h-24"
            src={data.image}
            alt={`Profile Avatar of ${data.name}`}
            loading="lazy"
          />
        </figure>

        <div className="text-center">
          <h3 className="text-zinc-200 text-lg font-medium">{data.name}</h3>
          <h3 className="text-zinc-300 text-sm font-light mt-1">{data.title}</h3>
          <div className="mt-1 flex items-center justify-center">
            <h4 className="text-zinc-400 text-xs mr-2">{data.email}</h4>
            <FaRegCopy onClick={copyEmail} className="cursor-pointer text-zinc-400" aria-label="Copy email" />
          </div>
        </div>
      </div>
    </div>
  );
}

Avatar.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Avatar;
