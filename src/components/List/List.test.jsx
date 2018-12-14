import React from 'react';
import { mount } from 'enzyme';
import List from './List';


describe('List Component', () => {
  it('should render a list of items', () => {
    const list = mount(<List />);
    console.log(list.html());
    // expect(list.contains(<li class='listItem'>Foo</li>)).toEqual(true);
  });
});