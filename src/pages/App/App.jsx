import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Index from '../Index/Index';
import Work from '../Work/Work';

import styles from './App.module.scss';

const App = () => (
  <Router>
    <div className={styles.app}>
      <Navbar />
      <ul>
        <li>
          <Link to='/work'>Work</Link>
        </li>
      </ul>

      <Route exact path='/' component={Index} />
      <Route path='/work' component={Work} />
    </div>
  </Router>
);

export default App;