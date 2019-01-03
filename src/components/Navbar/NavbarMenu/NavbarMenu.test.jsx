import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import NavbarMenu from './NavbarMenu';

describe('Navbar Menu', () => {
  const menu = shallow(
    <MemoryRouter>
      <NavbarMenu />
    </MemoryRouter>,
  );

  it('should render a section title', () => {
    expect(menu.prop('children').type().props.children[0].props.className).toEqual('navbarMenuSectionTitle');
  });

  it('should render at least one link per section', () => {
    const menuLinks = menu.prop('children').type().props.children[1].props.children[1].props.children.props;
    expect(Object.keys(menuLinks).length).toBeGreaterThan(0);
  });
});