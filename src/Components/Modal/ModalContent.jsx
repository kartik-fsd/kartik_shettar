import React from "react";

const ModalContent = () => {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <img
        src={selectedProject?.imgPath}
        alt={selectedProject?.title}
        role="presentation"
      />
      <h2 className="text-xl font-bold text-center">
        {selectedProject?.title}
      </h2>
      <ul className="list-disc list-inside text-gray-400">
        <p className="text-lg text-gray-300">Skills</p>
        {selectedProject?.skills.map((skill, key) => (
          <li key={key}>{skill}</li>
        ))}
      </ul>
      <p className="text-gray-400">
        <span className="text-lg text-gray-300">Summary : </span>
        {selectedProject?.description}
      </p>
    </div>
  );
};

export default ModalContent;
