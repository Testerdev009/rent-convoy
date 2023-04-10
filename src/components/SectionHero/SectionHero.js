import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '../../components';

import css from './SectionHero.module.css';

const SectionHero = props => {
  const [mounted, setMounted] = useState(false);
  const { rootClassName, className } = props;

  useEffect(() => {
    setMounted(true);
  }, []);

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={classNames(css.heroMainTitle, { [css.heroMainTitleFEDelay]: mounted })}>
          <FormattedMessage id="SectionHero.title" />
        </h1>
        <h2 className={classNames(css.heroSubTitle, { [css.heroSubTitleFEDelay]: mounted })}>
          <FormattedMessage id="SectionHero.subTitle" />
        </h2>
        <NamedLink
          name="SearchPage"
          to={{
            search:
              'address=New%20York%2C%20United%20States&bounds=45.0239467%2C-71.763627%2C40.4771401%2C-79.8046875',
          }}
          className={classNames(css.heroButton, { [css.heroButtonFEDelay]: mounted })}
        >
          <FormattedMessage id="SectionHero.browseButton" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
