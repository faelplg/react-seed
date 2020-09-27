import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import {Route} from 'react-router-dom';
import utilStyles from './styles/utils.module.scss';

configure({adapter: new Adapter()});

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render project title', () => {
    expect(wrapper.contains(<h1 className={utilStyles.enterFromLeft}>React seed project</h1>)).toEqual(true);
  });

  it('should render the Route component', () => {
    expect(wrapper.find(Route)).toHaveLength(1);
  });
});
