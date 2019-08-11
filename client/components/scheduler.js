import React from 'react';
import { connect } from 'react-redux';
import { getScheduleThunk, setScheduleThunk } from '../store';

const Scheduler = (props) => {
  return (
    <div className="scheduler content-panel">
      <h2 className="content-header">Scheduler</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Temp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/**
 * CONTAINER
 */
const mapStateToProps = (store) => {
  return {
    schedule: store.thermostat.schedule,
    setScheduleData: store.thermostat.setScheduleData
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getScheduleThunk: () => dispatch(getScheduleThunk()),
    setScheduleThunk: (evt) => {
      evt.preventDefault();
      const day = evt.target.day.value;
      const time = evt.target.time.value;
      const temp = evt.target.temp.value;
      dispatch(setScheduleThunk({day, time, temp}));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler);
