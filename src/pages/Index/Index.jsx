import React from 'react';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import List from '../../components/List/List';
import styles from './Index.module.scss';

const Index = () => (
  <div className={styles.indexPage}>
    <Container>
      <Title copy='Hello World!' />
      <p>"Oooh baby, you are looking sickening tonight! I have got'sta get me some of those heels!" admires <a href="www.google.com">Princess Pop</a></p>
      <List />
    </Container>
  </div>
);

export default Index;
