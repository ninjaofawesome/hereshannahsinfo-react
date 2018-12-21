import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Index from '../Index/Index';
import Work from '../Work/Work';

import styles from './App.module.scss';

const App = () => (
  <Router>
    <div className={styles.app}>
      <Navbar />
      <Route exact path='/' component={Index} />
      <Route path='/work' component={Work} />
    </div>
  </Router>
);

export default App;