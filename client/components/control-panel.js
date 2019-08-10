import React from 'react'
import { connect } from 'react-redux'
import ToggleSwitch from './toggle-switch';
import { togglePowerThunk, toggleHeatPowerThunk, toggleCoolPowerThunk, setHoldThunk } from '../store';

const ControlPanel = (props) => {
  return (
    <div className="control-panel content-panel">
      <h2 className="content-header">Control Panel</h2>
      <div className="control-panel-content">
        <ToggleSwitch right="Power" clickCallback={props.togglePowerThunk} />
        <ToggleSwitch right="Heat" clickCallback={props.toggleHeatPowerThunk} />
        <ToggleSwitch right="Cool" clickCallback={props.toggleCoolPowerThunk} />
      </div>
      <form className="control-panel-content" onSubmit={props.setHoldThunk}>
        <label className="input-label" labelfor="hold-input">Hold</label>
        <input id="hold-input" name="holdValue" type="number" />
        <button type="button" className="button secondary" onClick={(()=>{})()}>1 hr</button>
        <button type="submit" className="button primary">Hold</button>
      </form>
      <span className="panel-note">No hold currently active</span>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapStateToProps = (store) => {
  return {
    powerOn: store.thermostat.powerOn,
    heatOn: store.thermostat.heatOn,
    coolOn: store.thermostat.coolOn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    togglePowerThunk: () => dispatch(togglePowerThunk()),
    toggleHeatPowerThunk: () => dispatch(toggleHeatPowerThunk()),
    toggleCoolPowerThunk: () => dispatch(toggleCoolPowerThunk()),
    setHoldThunk: (evt, time) => {
      evt.preventDefault();
      const holdTemp = evt.target.holdValue.value
      dispatch(setHoldThunk(holdTemp, time))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);

/**
 * PROP TYPES
 */
ControlPanel.propTypes = {};
