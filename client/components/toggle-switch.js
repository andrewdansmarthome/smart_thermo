import React from 'react';

const ToggleSwitch = (props) => {
  return (
    <div className="toggle-wrapper">
      { props.left ? (<span className="toggle-left">{props.left}</span>) : null }
      <label className="toggle-control">
        <input type="checkbox"></input>
        <span className="toggle-slider"></span>
      </label>
      { props.right ? (<span className="toggle-right">{props.right}</span>) : null }
    </div>
  )
};

export default ToggleSwitch;
