import React from 'react';
import ListItems from './ListItems/ListItems';
import styles from './List.module.scss';

const List = () => (
  <ul className={styles.list}>
    <ListItems />
  <ul>
);

export default List;