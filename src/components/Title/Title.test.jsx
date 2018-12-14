import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';


describe('titleComponent', () => {
  const titleComponent = shallow(<Title />);

  it('renders default text if none is provided', () => {
    expect(titleComponent.text()).toEqual('TBD');
  });

  it('should render a stock font size none is specified', () => {
    expect(titleComponent.exists('.title')).toEqual(true);
  });

  it('should render a stock font color none is specified', () => {
    expect(titleComponent.children().prop('className')).toEqual('navyCopy');
  });
});