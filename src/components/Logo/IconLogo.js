import React from 'react';
import PropTypes from 'prop-types';

const IconLogo = props => {
  const { className, ...rest } = props;

  return (
    <img src='/static/icons/logoicon-white.png'></img>
  );
};

const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;
