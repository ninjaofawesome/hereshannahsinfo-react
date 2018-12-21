import React from 'react';
import { shallow } from 'enzyme';
import NavbarMenu from './NavbarMenu';

describe('Navbar Menu', () => {
  it('should render a section title', () => {
    const menu = shallow(<NavbarMenu />);
    console.log(menu.html());
  });

  it('should render at least one link per section', () => {

  });
});