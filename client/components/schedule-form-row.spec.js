/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ScheduleFormRow } from './schedule-form-row'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('ScheduleFormRow', () => {
  let scheduleFormRow

  beforeEach(() => {
    scheduleFormRow = shallow(<ScheduleFormRow email="cody@email.com" />)
  })

  it('renders the email in an h3', () => {
    expect(scheduleFormRow.find('h3').text()).to.be.equal('Welcome, cody@email.com')
  })
})
