import React from 'react';
import data from './ListData.js';

import styles from './ListItems.module.scss';

const ListItems = () => (
  data.map(listItem => (
    <li
      key={listItem.id}
      className={styles.listItem}
    >{listItem.copy}</li>
  ))
);

export default ListItems;