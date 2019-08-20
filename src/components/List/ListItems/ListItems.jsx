import React from 'react';
import PropTypes from 'prop-types';

import styles from './ListItems.module.scss';

const ListItems = props => {
  const dataObjects = Object.entries(props).map(item => item[1]).filter(item => item.id !== '');

  return (
    dataObjects.map(item => (
      <li key={`listItem_${item.id}`} className={styles.listItem}>
        {item.copy()}
      </li>
    ))
  );
};

ListItems.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string,
    copy: PropTypes.func,
  }),
};

ListItems.defaultProps = {
  props: {
    id: '',
    copy: () => {},
  },
};

export default ListItems;