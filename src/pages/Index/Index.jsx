import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import List from '../../components/List/List';
import {
  genInfoData,
  techInfoData,
  totalTime,
} from './IndexData';
import styles from './Index.module.scss';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      weather: {},
    }
    this.getWeatherData = this.getWeatherData.bind(this);
    this.generalInfo = this.generalInfo.bind(this);
  }

  componentWillMount() {
    this.getWeatherData();
  }

  getWeatherData() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c421e91928f6e782525fdb451b666ede/42.3601,-71.0589')
        .then(res => res.json())
        .then((data) => {
          this.setState({ weather: data })
         })
        .catch(console.log)
  }

  generalInfo(){

    const weather = (Object.keys(this.state.weather).length === 0 && this.state.weather.constructor === Object) ? '' : this.state.weather.hourly.summary.toLowerCase();

    return (
      [
         {
           id: 'genInfo0',
           copy: () => `As of today, I have been a developer for ${totalTime('03/14/2015')}.`,
         },
         {
           id: 'genInfo1',
           copy: () => 'JavaScript is my primary language.',
         },
         {
           id: 'genInfo2',
           copy: () => 'I love being a Front End Engineer.',
         },
         {
           id: 'genInfo3',
           copy: () => 'I have a BFA in Fashion Design and (lapsed) hairdressing licences in 2 states.',
         },
         {
           id: 'genInfo4',
           copy: () => `Today in New York it will be ${weather}`,
         },
       ]
    )
  }

  render() {
    return (
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
            items={this.generalInfo()}
            bulleted
          />
          <p>It's amazing that I have found a way to let my creativity transcend many mediums. From technical fashion design to cutting hair to being an engineer, I enjoy figuring out how things work, and then make them work efficiently (and elegantly).</p>
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
  }
};

export default Index;
