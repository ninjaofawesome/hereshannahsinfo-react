import React from 'react';
import { shallow } from 'enzyme';
import Index from './Index';

describe('Index Page', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper).toHaveLength(1);
  });
});

