import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';


describe('titleComponent', () => {
  it('renders default text if none is provided', () => {
    const titleComponent = shallow(<Title />);

    expect(titleComponent.text()).toEqual('TBD');
  });

  it('should render a stock font size if one is specified', () => {

  });

  it('should render a stock font color if one is specified', () => {

  });
});