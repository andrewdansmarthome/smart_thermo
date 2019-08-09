import React from 'react'
import ToggleSwitch from './toggle-switch';

const ControlPanel = (props) => {
  return (
    <div className="control-panel content-panel">
      <h2 className="content-header">Control Panel</h2>
      <ToggleSwitch left="Off" right="On" />
      <ToggleSwitch left="Heat" />
      <ToggleSwitch left="Cool" />
    </div>
  )
}

export default ControlPanel
