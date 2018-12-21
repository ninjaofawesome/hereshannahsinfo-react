import React from 'react';
import { shallow } from 'enzyme';
import ListItems from './ListItems';

describe('List Item Component', () => {
  it('should not render items if none is provided', () => {
    const sampleData = [];
    const listItem = shallow(<ListItems {...sampleData} />);
    expect(listItem.prop('children')).toEqual(undefined);
  });
});