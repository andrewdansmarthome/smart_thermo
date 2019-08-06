import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Graph from './graph'
import ControlPanel from './control-panel'
import Scheduler from './scheduler'
import Status from './status'
import { getTemperatureThunk } from '../store/thermostat'

/**
 * COMPONENT
 */
class Dashboard extends Component {
  async componentWillMount() {
    if (!this.props.tempData || !this.props.tempData.length) {
      await this.props.getTemperatureThunk();
    }
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <div className="top-content">
          <ControlPanel />
          <Scheduler />
          <Status />
        </div>
        <div className="content-panel">
          <Graph graphData={this.props.tempData} graphName="Temperature" />
        </div>
      </div>
    )
  };
}

/**
 * CONTAINER
 */
const mapStateToProps = (store) => {
  return {
    tempData: store.thermostat.tempData
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTemperatureThunk: () => dispatch(getTemperatureThunk())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

/**
 * PROP TYPES
 */
Dashboard.propTypes = {};
