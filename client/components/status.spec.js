/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Status} from './status'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Status', () => {
  let statue

  beforeEach(() => {
    statue = shallow(<Status email="cody@email.com" />)
  })

  it('renders the email in an h3', () => {
    expect(statue.find('h3').text()).to.be.equal('Welcome, cody@email.com')
  })
})
