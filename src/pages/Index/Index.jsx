import React from 'react';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import List from '../../components/List/List';
import ItalicText from '../../utils/type';
import {
  genInfoData,
  techInfoData,
} from './IndexData';
import styles from './Index.module.scss';

const Index = () => (
  <div className={styles.indexPage}>
    <Container>
      <div className={styles.header}>
        <Title size='large'>
          'Hello.  I\'m Hannah.'
        </Title>
        <Title
          color='dark gray'
          size='subtitle'
        >'I am a Front End Engineer.'
        </Title>
      </div>
      <p> Here are some things that you should know about me:</p>
      <List
        items={genInfoData}
        bulleted
      />
      <Title
        color='dark gray'
        size='subtitle'
      >
        <ItalicText type={"there's more"} />
      </Title>
      <List
        items={techInfoData}
        bulleted
      />
    </Container>
  </div>
);

export default Index;
