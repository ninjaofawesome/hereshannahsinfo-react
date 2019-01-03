import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render a menu click option', () => {
    const navbar = shallow(<Navbar />);
    console.log('navbar', navbar.html());
  });

  it('should open the menu on button click', () => {

  });

  it('should close the menu when clicking on an item', () => {

  });

  it('should link the site title to the index page', () => {

  });
});