/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Scheduler} from './scheduler'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Scheduler', () => {
  let scheduler

  beforeEach(() => {
    scheduler = shallow(<Scheduler email="cody@email.com" />)
  })

  it('renders the email in an h3', () => {
    expect(scheduler.find('h3').text()).to.be.equal('Welcome, cody@email.com')
  })
})
