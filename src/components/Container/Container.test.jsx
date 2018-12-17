import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Container Component', () => {
  it('should render', () => {
    const container = shallow(<Container />);
    expect(container).toHaveLength(1);
  });
});