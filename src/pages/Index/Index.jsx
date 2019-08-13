import React from 'react';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import List from '../../components/List/List';
import styles from './Index.module.scss';

const dateObj = () => {
  const startDate = new Date('03/14/2015').getTime();
  const today = new Date().getTime();
  const numberOfDays = (today - startDate) / (1000 * 3600 * 24);
  const totalTime = (numberOfDays / 365).toFixed(2);
  return totalTime;
};

const data = [
  {
    id: 1,
    copy: () => `As of today, I have been a developer for ${dateObj()} years.`,
  },
  {
    id: 2,
    copy: () => 'I have a degree in fine art and I was a licenced hairdresser in 2 states!',
  },
  {
    id: 3,
    copy: () => 'JavaScript is my primary language.',
  },
  {
    id: 3,
    copy: () => 'I knit voraciously.',
  },
];

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
        <p> Here are some things that you should know about me:</p>
        <List {...data} />
      </div>
    </Container>
  </div>
);

export default Index;
