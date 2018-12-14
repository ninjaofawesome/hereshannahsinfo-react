import React from 'react';
import Title from '../components/Title/Title';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.App}>
    <Title copy='Hello World!' />
    <p>"Oooh baby, you are looking sickening tonight! I have got'sta get me some of those heels!" admires <a href="#">Princess Pop</a></p>
  </div>
);

export default App;
