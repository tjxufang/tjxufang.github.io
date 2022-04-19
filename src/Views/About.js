import React from 'react';
import './About.scss';
import ExperienceCard from 'Components/Cards/ExperienceCard';
import { AboutStrings } from 'Utils/Strings';
import ProjectOverview from 'Components/ProjectOverview';
import { isProdEnv } from 'Utils/constants';

function About() {
  return (
    <div className="about-container view-container">
      {!isProdEnv && <ProjectOverview />}

      {AboutStrings?.map((item, i) => (
        <ExperienceCard
          orientation={i % 2 === 0 ? 'left' : 'right'}
          title={item.title}
          subtitle={item.subtitle}
          imgSrc={item.imgSrc}
          // eslint-disable-next-line react/no-array-index-key
          key={i}
        >
          {item.detail}
        </ExperienceCard>
      ))}
    </div>
  );
}

export default About;
