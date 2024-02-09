import PropTypes from "prop-types";
import { FaRegCopy } from "react-icons/fa6";

function Avatar({ data }) {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-4xl my-6 mx-auto p-4 lg:px-4 flex flex-col items-center">
        <div className="avatar mb-4 flex justify-center">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
            <img
              className="rounded-full w-full h-full object-cover"
              src={data?.image}
              alt="Profile Avatar"
              loading="lazy"
              role="img"
              aria-labelledby="profile-avatar-label"
            />
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-zinc-200 text-lg font-medium">{data?.name}</h3>
          <h3 className="text-zinc-300 text-sm font-light mt-1">
            {data?.title}
          </h3>
          <div className="mt-1 flex items-center justify-center">
            <h4 className="text-zinc-400 text-xs mr-2">{data?.email}</h4>
            <FaRegCopy className="cursor-pointer text-zinc-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

Avatar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Avatar;
