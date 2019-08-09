/* global describe beforeEach it */

import {expect} from 'chai';
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ToggleSwitch } from './toggle-switch';

const adapter = new Adapter();
enzyme.configure({adapter});

describe('ToggleSwitch', () => {
  let toggleSwitch;

  beforeEach(() => {
    toggleSwitch = shallow(<ToggleSwitch email="cody@email.com" />);
  });

  it('renders the email in an h3', () => {
    expect(toggleSwitch.find('h3').text()).to.be.equal('Welcome, cody@email.com');
  });
})
