import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Title.module.scss";

const Title = props => (
  <div className={styles.title}>
    {props.copy}
  </div>
);

Title.propTypes = {
  copy: PropTypes.string,
};

Title.defaultProps = {
  copy: 'TBD',
};

export default Title;