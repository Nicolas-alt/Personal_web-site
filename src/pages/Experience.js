import React from 'react';
import Fade from 'react-reveal/Fade';

import '../assets/sass/templates/Experience.scss';
import CustomHelmet from '../components/CustomHelmet';
import ProjectCard from '../components/ProjectCard';
import TitlePage from '../components/TitlePage';

export const Experience = () => {
  return (
    <Fade right>
      <CustomHelmet
        titlePage="My experience"
        contentText="Mi experiencia como front dev"
        contentColor="#8a7dda"
      />
      <section className="section--experience">
        <TitlePage title="TAKE A LOOK AT" />
        <h2>My Projects</h2>
        <div className="div--projects">
          <ProjectCard title="asdf" />
        </div>
      </section>
    </Fade>
  );
};

export default Experience;
