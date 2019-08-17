import React from 'react';

const ToggleSwitch = (props) => {
  let cls = `toggle-wrapper toggle-${props.labelLoc}`;

  return (
    <div className={cls}>
      <span>{props.title}</span>
      <label className="toggle-control">
        <input type="checkbox" onClick={props.clickCallback}></input>
        <span className="toggle-slider"></span>
      </label>
    </div>
  )
};

export default ToggleSwitch;
