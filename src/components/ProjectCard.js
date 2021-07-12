import React from 'react';
import '../assets/sass/components/ProjectCard.scss';
import url from '../assets/img/lg.png'

const ProjectCard = ({ title }) => {
  return (
    <div className="div-project-card">
      <img src={url} alt="project" />
      <h3>LogBook</h3>
      <div className="div-buttons">
        <a href="/" className="button-code">
          <i className='bx bxl-github'></i>
          Ver código
        </a>
        <a href="/" className="button-view">
          <i className='bx bx-plus'></i>
          Ver
          </a>
      </div>
    </div>
  );
};

export default ProjectCard;
