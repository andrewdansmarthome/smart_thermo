import React from 'react';
import { connect } from 'react-redux';
import { getScheduleThunk, setScheduleThunk } from '../store';

const Scheduler = (props) => {
  let editRowIndex = null;

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'Select Date'
  ];

  return (
    <div className="scheduler content-panel">
      <h2 className="content-header">Scheduler</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Temp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr key="scheduler-add-row">
            <td>
              <select name="schedulerDay">
                {days.map((option, index) => {
                  return (<option key={`day-add-option-${index}`}>{option}</option>);
                })}
              </select>
            </td>
            <td>
              <input name="schedulerTime" />
            </td>
            <td>
              <input name="schedulerTemp" />
            </td>
            <td>
              <button type='button' onClick={(()=>{})}>Add</button>
            </td>
          </tr>
          {
            props.schedule.map((scheduleInfo, index) => {
              if (editRowIndex === index) {
                return (<tr key={`scheduler-edit-row-${index}`}>
                  <td key={`scheduler-edit-day-${index}`}>
                    <select name="editSchedulerDay">
                      {days.map((option, index) => {
                        return (<option key={`day-edit-option-${index}`}>{option}</option>);
                      })}
                    </select>
                  </td>
                  <td key={`scheduler-edit-time-${index}`}>
                    <input name="editSchedulerTime" />
                  </td>
                  <td key={`scheduler-edit-temp-${index}`}>
                    <input name="editSchedulerTemp" />
                  </td>
                  <td key={`scheduler-edit-action-${index}`}>
                    <button type='button' onClick={(() => { })}>Update</button>
                    <button type='button' onClick={(() => { })}>Cancel</button>
                  </td>
                </tr>)
              }
              return (
                <tr key={`scheduler-row-${index}`}>
                  <td key={`scheduler-cell-day-${index}`}>{scheduleInfo.day}</td>
                  <td key={`scheduler-cell-time-${index}`}>{scheduleInfo.time}</td>
                  <td key={`scheduler-cell-temp-${index}`}>{scheduleInfo.temp}</td>
                  <td key={`scheduler-cell-action-${index}`}>
                    <button type='button' onClick={(() => { })}>Edit</button>
                  </td>
                </tr>
              )
            })
          }
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
