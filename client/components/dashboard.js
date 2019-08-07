import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Temperature from './temperature'
import ControlPanel from './control-panel'
import Scheduler from './scheduler'
import Status from './status'
import { getTemperatureThunk } from '../store/thermostat'

/**
 * COMPONENT
 */
class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="top-content">
          <ControlPanel />
          <Scheduler />
          <Status />
        </div>
        <Temperature />
      </div>
    )
  };
}

/**
 * CONTAINER
 */
const mapStateToProps = (store) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

/**
 * PROP TYPES
 */
Dashboard.propTypes = {};
