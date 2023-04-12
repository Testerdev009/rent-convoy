import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './IconSocialMediaFacebook.module.css';

const IconSocialMediaFacebook = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <svg
      className={classes}
      width="auto"
      height="15"
      viewBox="0 0 10 17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
        fillRule="evenodd"
      />
    </svg>

  );
};

IconSocialMediaFacebook.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

IconSocialMediaFacebook.propTypes = { rootClassName: string, className: string };

export default IconSocialMediaFacebook;
