import PropTypes from "prop-types";
import React from "react";

export function ContactButton({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded px-4 py-2 text-gray-300 font-medium flex items-center border border-indigo-300   hover:scale-105 transition duration-300 ease-in-out"
    >
      <span role="img" aria-hidden="true">
        {React.createElement(icon)}
      </span>
      <span className="ml-2">{label}</span>
    </a>
  );
}
ContactButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};
