import React from 'react';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import List from '../../components/List/List';
import styles from './Index.module.scss';

const Index = () => (
  <div className={styles.indexPage}>
    <Container>
      <div className={styles.header}>
        <Title
          copy="Hello.  I'm Hannah."
          size='large'
        />
        <Title
          color='dark gray'
          copy='I make things.'
          size='subtitle'
        />
        <List />
      </div>
    </Container>
  </div>
);

export default Index;
