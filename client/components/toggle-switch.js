import React from 'react';

const ToggleSwitch = (props) => {
  return (
    <div className="toggle-wrapper">
      <p className="toggle-left">{props.left}</p>
      <label className="toggle-control">
        <input type="checkbox"></input>
        <span className="toggle-slider"></span>
      </label>
      <p className="toggle-right">{props.right}</p>
    </div>
  )
};

export default ToggleSwitch;
