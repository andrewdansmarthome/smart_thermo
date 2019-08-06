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
class Temperature extends Component {
  async componentWillMount() {
    if (!this.props.tempData || !this.props.tempData.length) {
      await this.props.getTemperatureThunk();
    }
  }

  render() {
    return (
      <div className="content-panel">
        <h2 className='content-header'>Temperature History</h2>
        <Graph graphData={this.props.tempData} graphName="Temperature" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Temperature);

/**
 * PROP TYPES
 */
Temperature.propTypes = {};
