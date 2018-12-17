import React from 'react';
import PropTypes from 'prop-types';

import styles from './Container.module.scss';

const Container = props => (
  <div className={styles.wrapper}>
    {props.children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: <div />,
};

export default Container;