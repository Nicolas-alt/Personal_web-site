import React from 'react';
import '../assets/sass/templates/DetailsProject.scss';

const DetailsProject = () => {
  return (
    <>
      <div className="div--detailsProject">
        <button className="button--return">
          <i className="bx bx-left-arrow"></i> Go back
        </button>
        <div className="div--image"></div>
        <i class="bx bx-mouse"></i>
        <div className="div--info">
          <h2>
          </h2>
          <p>
            <span>Technologys:</span>
          </p>
          <p>
            <span>Description:</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailsProject;
