import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getScheduleThunk, setScheduleThunk } from '../store';

class Scheduler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editRowIndex: null,
      editRow: {
        day: '',
        time: null,
        temp: null
      },
      addDay: '',
      addTime: null,
      addTemp: null
    }
  }

  async componentWillMount() {
    this.days = [
      'Select Date',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];

    await this.props.getScheduleThunk();
  }

  handleSelectDay = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      ...this.state,
      addDay: value
    })
  }

  handleTimeChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    // should add validations here
    this.setState({
      ...this.state,
      addTime: value
    })
  }

  handleTempChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    // should add validations here
    this.setState({
      ...this.state,
      addTemp: value
    })
  }

  submitAddSchedule = (event) => {
    event.preventDefault();
    const newSchedule = {
      day: this.state.addDay,
      time: this.state.addTime,
      temp: this.state.addTemp
    };

    this.props.setScheduleThunk(newSchedule);
  }

  editRow = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      editRowIndex: event.target.id.slice(-1)
    });
  }

  render() {
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
                <select name="schedulerDay" onChange={this.handleSelectDay}>
                  {this.days.map((option, index) => {
                    return (<option key={`day-add-option-${index}`}>{option}</option>);
                  })}
                </select>
              </td>
              <td>
                <input name="schedulerTime" value={this.state.time} onChange={this.handleTimeChange} />
              </td>
              <td>
                <input name="schedulerTemp" value={this.state.temp} onChange={this.handleTempChange} />
              </td>
              <td>
                <button type='button' onClick={this.submitAddSchedule}>Add</button>
              </td>
            </tr>
            {
              this.props.schedule.map((scheduleInfo, index) => {
                if (this.state.editRowIndex === index) {
                  return (<tr key={`scheduler-edit-row-${index}`}>
                    <td key={`scheduler-edit-day-${index}`}>
                      <select name="editSchedulerDay" value={this.state.day} onChange={this.handleSelectDay}>
                        {days.map((option, index) => {
                          return (
                            <option
                              key={`day-edit-option-${index}`}
                              value={option === 'Select Date' ? '' : option}
                            >
                              {option}
                            </option>);
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
                      <button id={`edit-schedule-${index}`} type='button' onClick={this.editRow}>Edit</button>
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
}

/**
 * CONTAINER
 */
const mapStateToProps = (store) => {
  return {
    schedule: store.thermostat.schedule
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getScheduleThunk: () => dispatch(getScheduleThunk()),
    setScheduleThunk: (newSchedule) => dispatch(setScheduleThunk(newSchedule))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler);
