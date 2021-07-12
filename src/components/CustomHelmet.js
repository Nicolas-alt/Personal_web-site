import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

const CustomHelmet = ({ titlePage, contentText, contentColor }) => {
  return (
    <Helmet>
      <title>{titlePage}</title>
      <meta name="description" content={contentText} />
      <meta name="theme-color" content={contentColor} />
    </Helmet>
  );
};

CustomHelmet.propTypes = {
  titlePage: PropTypes.string.isRequired,
  contentText: PropTypes.string.isRequired,
  contentColor: PropTypes.string.isRequired,
};

export default CustomHelmet;
