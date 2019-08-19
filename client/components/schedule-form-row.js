import React, { Component } from 'react';

class ScheduleFormRow extends Component {
  constructor(props) {
    super(props);

    this.state = props.schedule ? {
      id: props.schedule.id || null,
      day: props.schedule.day || '',
      time: props.schedule.time || '',
      temp: props.schedule.temp || ''
    } : {
      id: null,
      day: '',
      time: '',
      temp: ''
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
    const value = event.target.value;
    this.setState({
      day: value
    });
  }

  handleTimeChange = (event) => {
    const value = event.target.value;
    // should add validations here
    this.setState({
      time: value
    });
  }

  handleTempChange = (event) => {
    const value = event.target.value;
    // should add validations here
    this.setState({
      temp: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.handleSubmitRow(event, this.state, this.props.type);
    this.props.type === 'add' && this.handleClearRow();
  }

  handleClearRow = () => {
    this.setState({
      day: '',
      time: '',
      temp: ''
    });

    this.props.handleClearRow();
  }

  render() {
    const { props, days, state } = this;
    const { day, time, temp } = state
    const idx = props.index || props.type;
    return (
      <tr className="scheduler-form-row" key={`scheduler-${props.type}-row-${idx}`}>
        <td key={`scheduler-${props.type}-day-${idx}`}>
          <select name="editSchedulerDay" value={day} onChange={this.handleSelectDay}>
            {days.map((option, index) => {
              const key = `day-${props.type}-option-${idx}-${index}`;
              return (
                <option
                  key={key}
                  value={option === 'Select Date' ? '' : option}
                >
                  {option}
                </option>
              );
            })}
          </select>
        </td>
        <td key={`scheduler-${props.type}-time-${idx}`}>
          <input name="editSchedulerTime" type="text" value={time} onChange={this.handleTimeChange} ref="time" />
        </td>
        <td key={`scheduler-${props.type}-temp-${idx}`}>
          <input name="editSchedulerTemp" type="text" value={temp} onChange={this.handleTempChange} ref="temp" />
        </td>
        <td key={`scheduler-${props.type}-action-${idx}`}>
          <button type='submit' className="button primary" onClick={this.handleSubmit}>{props.submitButtonName}</button>
          <button type='button' className="button secondary" onClick={this.handleClearRow}>{props.clearButtonName}</button>
        </td>
      </tr>
    );
  }
}

export default ScheduleFormRow;
