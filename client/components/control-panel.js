import React from 'react'
import ToggleSwitch from './toggle-switch';

const ControlPanel = (props) => {
  return (
    <div className="control-panel content-panel">
      <h2 className="content-header">Control Panel</h2>
      <div className="control-panel-content">
          <ToggleSwitch right="Power" />
          <ToggleSwitch right="Heat" />
          <ToggleSwitch right="Cool" />
      </div>
      <form className="control-panel-content">
        <label className="input-label" labelfor="hold-input">Hold</label>
        <input id="hold-input" />
        <button type="button" className="button secondary" onClick={(()=>{})()}>1 hr</button>
        <button type="submit" className="button primary">Hold</button>
      </form>
      <span className="panel-note">No hold currently active</span>
    </div>
  )
}

export default ControlPanel
