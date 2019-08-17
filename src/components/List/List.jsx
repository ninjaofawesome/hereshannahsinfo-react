import React from 'react';
import cx from 'classnames';
import ListItems from './ListItems/ListItems';
import styles from './List.module.scss';


const listStyles = ({ bulleted }) => {
  return cx({
    [styles.list]: bulleted === false,
    [styles.bulletedList]: bulleted === true,
  });
};

const List = props => (
  <ul className={listStyles(props)}>
    <ListItems {...props.items} />
  </ul>
);

export default List;