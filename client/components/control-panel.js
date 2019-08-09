import React from 'react'

const ControlPanel = (props) => {
  return (
    <div className="control-panel content-panel">
      <h2 className="content-header">Control Panel</h2>
      <label className="toggle-control">
        <input type="checkbox"></input>
        <span className="toggle-slider"></span>
      </label>
    </div>
  )
}

export default ControlPanel
