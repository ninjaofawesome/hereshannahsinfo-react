import React from 'react';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import List from '../../components/List/List';
import workInfoData from './workData';
import styles from './Work.module.scss';

const Work = () => (
  <div className={styles.workPage}>
    <Container>
      <div className={styles.header}>
        <Title size="large">Work</Title>
        <Title
          color='living coral'
          size='subtitle'
        >
          Oh, the places I've been.
        </Title>
      </div>
      <div className={styles.workContainer}>
        <p>Here's who I have worked for:</p>
        <List
          items={workInfoData}
        />
      </div>
    </Container>
  </div>
);

export default Work;
