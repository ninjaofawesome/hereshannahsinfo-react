import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Title.module.scss';

const titleStyles = props => {
  return cx({
    [styles.title]: props.size === 'title' || props.size === undefined,
    [styles.smallTitle]: props.size === 'small',
    [styles.largeTitle]: props.size === 'large',
    [styles.subHeadingTitle]: props.size === 'subtitle',
    [styles.eyebrowTitle]: props.size === 'eyebrow',
  });
};

const copyColor = props => {
  return cx({
    [styles.navyCopy]: props.color === 'navy' || props.color === undefined,
    [styles.whiteCopy]: props.color === 'white',
    [styles.darkGrayCopy]: props.color === 'dark gray',
    [styles.grayCopy]: props.color === 'gray',
    [styles.livingCoralCopy]: props.color === 'living coral',
  });
};

const Title = props => (
  <div className={titleStyles(props)}>
    <span className={copyColor(props)}>{props.copy}</span>
  </div>
);

titleStyles.propTypes = {
  size: PropTypes.oneOf(['title', 'subtitle', 'eyebrow']),
  color: PropTypes.oneOf(['white', 'dark gray', 'gray', 'living coral', 'navy']),
};

titleStyles.defaultProps = {
  size: 'title',
  color: 'navy',
};

Title.propTypes = {
  copy: PropTypes.string,
};

Title.defaultProps = {
  copy: 'TBD',
};

export default Title;