import React from 'react';
import { Link } from 'react-router-dom';
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
        <Title size='large'>
          Hello,  I'm Hannah.
        </Title>
        <Title
          color='living coral'
          size='subtitle'
        >
          I make beautiful things for interesting people.
        </Title>
      </div>
      <p>Here are some things that you should know about me:</p>
      <List
        items={genInfoData}
        bulleted
      />
      <p>It's amazing that I have found a way to let my creativity transcend many mediums. From technical fashion design to cutting hair to being an engineer, I enjoy figuring out how things work, and then make them work efficiently and elegantly.</p>
      <Title
        color='dark gray'
        size='subtitle'
      >
        But wait... <i>There's more.</i>
      </Title>
      <List
        items={techInfoData}
        bulleted
      />
      <Title
        color='dark gray'
        size='subtitle'
      >
      What else?
      </Title>
      <p>I may have left out a thing or two.  Fortunately, I have a resume that you can view <Link to='work'>Here</Link>.</p>
    </Container>
  </div>
);

export default Index;
