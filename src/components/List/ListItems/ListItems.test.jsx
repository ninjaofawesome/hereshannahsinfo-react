import React from 'react';
import { shallow } from 'enzyme';
import ListItems from './ListItems';

describe('List Item Component', () => {
  it('should have default content if none is provided', () => {
    const sampleData = [];
    const listItem = shallow(<ListItems {...sampleData} />);
    expect(listItem.text()).toEqual('TBD');
  });
});