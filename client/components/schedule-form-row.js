import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getScheduleThunk, setScheduleThunk } from '../store';

class ScheduleFormRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: '',
      time: null,
      temp: null
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
  }

  handleSelectDay = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      ...this.state,
      day: value
    })
  }

  handleTimeChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    // should add validations here
    this.setState({
      ...this.state,
      time: value
    })
  }

  handleTempChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    // should add validations here
    this.setState({
      ...this.state,
      temp: value
    })
  }

  render() {
    return (
      <tr key={`scheduler-${props.type}-row-${props.index}`}>
        <td key={`scheduler-${props.type}-day-${props.index}`}>
          <select name="editSchedulerDay" value={this.state.day} onChange={this.handleSelectDay}>
            {days.map((option, index) => {
              return (
                <option
                  key={`day-${props.type}-option-${index}`}
                  value={option === 'Select Date' ? '' : option}
                >
                  {option}
                </option>);
            })}
          </select>
        </td>
        <td key={`scheduler-${props.type}-time-${props.index}`}>
          <input name="editSchedulerTime" />
        </td>
        <td key={`scheduler-${props.type}-temp-${props.index}`}>
          <input name="editSchedulerTemp" />
        </td>
        <td key={`scheduler-${props.type}-action-${props.index}`}>
          <button type='button' onClick={(() => { })}>Update</button>
          <button type='button' onClick={(() => { })}>Cancel</button>
        </td>
      </tr>
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

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleFormRow);
