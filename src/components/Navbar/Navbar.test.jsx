import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  const navbar = shallow(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );

  it('should render a menu click option', () => {
    expect(navbar.props().history.entries[0].pathname).toEqual('/');
  });
});