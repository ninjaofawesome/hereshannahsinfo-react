import React from 'react';
import { shallow } from 'enzyme';
import Work from './Work';

describe('IWorkPage', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Work />);
    expect(wrapper).toHaveLength(1);
  });
});

