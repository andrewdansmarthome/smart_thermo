import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getScheduleThunk, addScheduleThunk, updateScheduleThunk, deleteScheduleThunk } from '../store';
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

  handleAddSubmit = (event, schedule) => {
    event.preventDefault();
    this.props.addScheduleThunk(schedule);
  }

  handleUpdateSubmit = (event, schedule) => {
    event.preventDefault();
    this.props.updateScheduleThunk(schedule);
  }

  handleDeleteSubmit = (event, schedule) => {
    event.preventDefault();
    this.props.deleteScheduleThunk(schedule.id);
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
                handleSubmitRow={this.handleAddSubmit}
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
                      clearButtonName="X"
                      handleSubmitRow={this.handleUpdateSubmit}
                      handleDeleteRow={this.handleDeleteSubmit}
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
    addScheduleThunk: (newSchedule) => dispatch(addScheduleThunk(newSchedule)),
    updateScheduleThunk: (updatedSchedule) => dispatch(updateScheduleThunk(updatedSchedule)),
    deleteScheduleThunk: (scheduleId) => dispatch(deleteScheduleThunk(scheduleId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler);
