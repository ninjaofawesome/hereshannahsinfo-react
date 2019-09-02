import React from 'react';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import styles from './Work.module.scss';

const Work = () => (
  <div className={styles.workPage}>
    <Container>
      <Title size="large">Work</Title>
    </Container>
  </div>
);

export default Work;
