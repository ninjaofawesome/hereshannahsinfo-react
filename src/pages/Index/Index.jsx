import React from 'react';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import List from '../../components/List/List';
import {
  genInfoData,
  techInfoData,
} from './IndexData';
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
          copy='I am a Front End Engineer.'
          size='subtitle'
        />
      </div>
      <p> Here are some things that you should know about me:</p>
      <List
        items={genInfoData}
        bulleted
      />
      <Title
        color='dark gray'
        copy='But what else?'
        size='subtitle'
      />
      <List
        items={techInfoData}
        bulleted
      />
    </Container>
  </div>
);

export default Index;
