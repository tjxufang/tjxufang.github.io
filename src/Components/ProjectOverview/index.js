import React from 'react';
import './index.scss';
import ProjectCard from 'Components/ProjectOverview/ProjectCard';

function ProjectOverview() {
  return (
    <div className="project-overview-container">
      Notable projects
      <ProjectCard />
    </div>
  );
}

export default ProjectOverview;
