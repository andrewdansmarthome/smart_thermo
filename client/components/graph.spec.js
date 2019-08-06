/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Graph} from './graph'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Graph', () => {
  let graph

  beforeEach(() => {
    graph = shallow(<Graph email="cody@email.com" />)
  })

  it('renders the email in an h3', () => {
    expect(graph.find('h3').text()).to.be.equal('Welcome, cody@email.com')
  })
})
