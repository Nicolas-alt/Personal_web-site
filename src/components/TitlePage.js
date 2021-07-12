import React from 'react';
import PropTypes from 'prop-types';

import '../assets/sass/components/TitlePage.scss';

const TitlePage = ({ title }) => {
  return (
    <div className="div--titlePage">
      <span></span>
      <p>{title}</p>
    </div>
  );
};

TitlePage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitlePage;
