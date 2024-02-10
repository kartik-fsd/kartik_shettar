import React from 'react';
import { projectsData } from '../../assets/data';
import Card from '../Card';

function ProjectShowCase() {
  const filteredFullStackProjects = React.useMemo(() => projectsData.filter((item) => item.isFullStack === true), []);
  const filteredFrontendProjects = React.useMemo(() => projectsData.filter((item) => item.isFrontend === true), []);
  const filteredMobileAppProjects = React.useMemo(() => projectsData.filter((item) => item.isMobileApp === true), []);

  const renderProjects = (title, filteredProjects) => (
    <div className="max-w-2xl py-4 sm:py-6 lg:max-w-none lg:py-8">
      <h2 className="text-2xl font-bold text-gray-200">{title}</h2>
      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        {filteredProjects.map((project) => (
          <Card key={project.id || project.uniqueIdentifier} {...project} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl my-4 mx-auto p-4 lg:px-4">
      {renderProjects('Full Stack Projects', filteredFullStackProjects)}
      {renderProjects('Frontend Projects', filteredFrontendProjects)}
      {renderProjects('Mobile-App Projects', filteredMobileAppProjects)}
    </div>
  );
}

export default ProjectShowCase;
