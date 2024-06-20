import PropTypes from "prop-types";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";

function Avatar({ data }) {
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(data.email);
      setCopied(true);
      setResult("Copied successfully!");
      setTimeout(() => {
        setCopied(false);
        setResult(""); // Reset result message
      }, 1600);
    } catch (error) {
      console.error("Error copying email:", error);
      // Log error to monitoring service or analytics platform
      setCopied(true);
      setResult("Something went wrong. Try again!");
      setTimeout(() => {
        setCopied(false);
        setResult(""); // Reset result message
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-4xl my-6 mx-auto p-4 lg:px-4 flex flex-col items-center">
        <figure className="avatar mb-4 flex justify-center">
          <img
            className="rounded-full object-cover w-24 h-24"
            src={data.image}
            alt={"Kartik shettar image"}
            role="presentation"
            aria-label={"Kartik shettar image"}
            loading="eager"
          />
        </figure>

        <div className="text-center">
          <header className="text-zinc-200 text-lg font-medium">
            {data.name}
          </header>
          <p className="text-zinc-300 text-sm font-light mt-1">{data.title}</p>
          <div className="mt-1 flex items-center justify-center">
            <h4 className="text-zinc-400 text-xs mr-2">{data.email}</h4>
            <FaRegCopy
              onClick={copyEmail}
              className="cursor-pointer text-zinc-400 active:text-zinc-500"
              aria-label="Copy email"
            />
            {copied && result && result.includes("successfully") && (
              <h4
                className={`text-xs text-lime-500 mx-2 antialiased`}
                aria-live="polite"
              >
                {result}
              </h4>
            )}
            {copied && result && !result.includes("successfully") && (
              <h4
                className={`text-xs text-red-500 mx-2 antialiased`}
                aria-live="polite"
              >
                {result}
              </h4>
            )}
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
