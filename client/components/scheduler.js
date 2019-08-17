import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getScheduleThunk, setScheduleThunk } from '../store';
import ScheduleFormRow from './schedule-form-row';

class Scheduler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editRowIndex: null,
      editRow: {
        day: '',
        time: '',
        temp: ''
      }
    }
  }

  async componentWillMount() {
    await this.props.getScheduleThunk();
  }

  handleSubmitRow = (event, schedule, type) => {
    event.preventDefault();
    this.props.setScheduleThunk(schedule, type);
  }

  editRow = (event) => {
    event.preventDefault();
    const index = +event.target.id.slice(-1);
    this.setState({
      editRowIndex: index,
      editRow: {
        ...this.props.schedule[index]
      }
    });
  }

  handleClearRow = () => {
    this.setState({
      editRowIndex: null,
      editRow: {
        day: '',
        time: '',
        temp: ''
      }
    });
  }

  render() {
    return (
      <div className="scheduler content-panel">
        <h2 className="content-header">Scheduler</h2>
        <div className="schedule-table">
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Temp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <ScheduleFormRow
                key="add-row-key"
                type="add"
                submitButtonName="Add"
                clearButtonName="Clear"
                handleSubmitRow={this.handleSubmitRow}
                handleClearRow={this.handleClearRow}
              />
              {
                this.props.schedule.map((scheduleInfo, index) => {
                  return this.state.editRowIndex === index ? (
                    <ScheduleFormRow
                      key={`scheduler-edit-row-${index}`}
                      type="edit"
                      index={index}
                      schedule={this.state.editRow}
                      submitButtonName="Update"
                      clearButtonName="Cancel"
                      handleSubmitRow={this.handleSubmitRow}
                      handleClearRow={this.handleClearRow}
                    />
                  ) : (
                    <tr key={`scheduler-row-${index}`}>
                      <td key={`scheduler-cell-day-${index}`}>{scheduleInfo.day}</td>
                      <td key={`scheduler-cell-time-${index}`}>{scheduleInfo.time}</td>
                      <td key={`scheduler-cell-temp-${index}`}>{scheduleInfo.temp}</td>
                      <td key={`scheduler-cell-action-${index}`}>
                          <button id={`edit-schedule-${index}`} type='button' className="button secondary" onClick={this.editRow}>Edit</button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
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
