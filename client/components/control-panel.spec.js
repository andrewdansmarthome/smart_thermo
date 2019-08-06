/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ControlPanel } from './control-panel'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('ControlPanel', () => {
  let controlPanel

  beforeEach(() => {
    controlPanel = shallow(<ControlPanel email="cody@email.com" />)
  })

  it('renders the email in an h3', () => {
    expect(controlPanel.find('h3').text()).to.be.equal('Welcome, cody@email.com')
  })
})
