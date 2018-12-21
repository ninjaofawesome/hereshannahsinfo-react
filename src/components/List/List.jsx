import React from 'react';
import ListItems from './ListItems/ListItems';
import styles from './List.module.scss';

const List = props => (
  <ul className={styles.list}>
    <ListItems {...props} />
  </ul>
);

export default List;