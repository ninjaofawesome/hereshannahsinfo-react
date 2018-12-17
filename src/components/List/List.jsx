import React from 'react';
import ListItems from './ListItems/ListItems';
import data from './ListData.js';
import styles from './List.module.scss';

const List = () => (
  <ul className={styles.list}>
    <ListItems {...data} />
  </ul>
);

export default List;