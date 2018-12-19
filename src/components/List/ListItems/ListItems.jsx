import React from 'react';
import PropTypes from 'prop-types';

import styles from './ListItems.module.scss';

const ListItems = props => {
  const dataObjects = Object.entries(props).map(item => item[1]);
  return (
    dataObjects.map(item => (
      <li
        key={item.id}
        className={styles.listItem}
      >
        {item.copy()}
      </li>
    ))
  );
};

ListItems.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number,
    copy: PropTypes.func,
  }),
};

ListItems.defaultProps = {
  props: {
    id: 0,
    copy: () => <div>TBD</div>,
  },
};

export default ListItems;