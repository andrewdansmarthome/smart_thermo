import axios from 'axios'
import scheduleSort from '../utils/scheduleSort';
/**
 * ACTION TYPES
 */
const GET_TEMPERATURES = 'GET_TEMPERATURES';
const SET_POWER = 'SET_POWER';
const SET_HEAT = 'SET_HEAT';
const SET_COOL = 'SET_COOL';
const SET_HOLD = 'SET_HOLD';
const SET_SCHEDULE = 'SET_SCHEDULE';
const ADD_TO_SCHEDULE = 'ADD_TO_SCHEDULE';
const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
const DELETE_SCHEDULE = 'DELETE_SCHEDULE';

/**
 * INITIAL STATE
 */
const defaultThermostat = {
  tempData: [],
  powerOn: false,
  heatOn: false,
  coolOn: false,
  holdTemp: 72,
  holdTimeRemaining: null,
  schedule: [{
    day: 'Monday',
    time: '1:23',
    temp: 123
  }],
  setScheduleData: {
    locationId: 0,
    date: null,
    time: null,
    temp: null
  }
};

/**
 * ACTION CREATORS
 */
const getTemperatures = tempData => ({ type: GET_TEMPERATURES, tempData });
const setPower = isOn => ({ type: SET_POWER, isOn });
const setHeat = isOn => ({ type: SET_HEAT, isOn });
const setCool = isOn => ({ type: SET_COOL, isOn });
const setHold = (holdTemp, timeRemaining) => ({type: SET_HOLD, holdTemp, timeRemaining});
const setSchedule = (schedule) => ({ type: SET_SCHEDULE, schedule });
const addToSchedule = (schedule) => ({ type: ADD_TO_SCHEDULE, schedule });
const updateSchedule = (schedule) => ({ type: UPDATE_SCHEDULE, schedule });
const deleteSchedule = (scheduleId) => ({ type: DELETE_SCHEDULE, scheduleId });

/**
 * THUNK CREATORS
 */
export const getTemperatureThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/thermostat/temperature')
    return dispatch(getTemperatures(res.data || defaultThermostat.tempData))
  } catch (err) {
    console.error(err)
  }
}

export const togglePowerThunk = () => async dispatch => {
  try {
    const res = await axios.post('/api/thermostat/togglepower');
    dispatch(setPower(res.data.isOn || false));
  } catch (err) {
    console.error(err);
  }
}

export const toggleHeatPowerThunk = () => async dispatch => {
  try {
    const res = await axios.post('/api/thermostat/toggleheat');
    dispatch(setHeat(res.data.isOn || false));
  } catch (err) {
    console.error(err);
  }
}

export const toggleCoolPowerThunk = () => async dispatch => {
  try {
    const res = await axios.post('/api/thermostat/togglecool');
    dispatch(setCool(res.data.isOn || false));
  } catch (err) {
    console.error(err);
  }
}

export const setHoldThunk = () => async dispatch => {
  try {
    const res = await axios.post('/api/thermostat/sethold');
    dispatch(setHold(res.data.holdTemp, res.data.timeRemaining));
  } catch (err) {
    console.error(err);
  }
}

export const getScheduleThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/thermostat/schedule', {
      params: {
        locationId: 0
      }
    });
    const sortedSchedule = scheduleSort(res.data);
    dispatch(setSchedule(sortedSchedule));
  } catch (err) {
    console.error(err);
  }
}

export const addScheduleThunk = (schedule) => async dispatch => {
  schedule.locationId = 0;
  try {
    const res = await axios.post('/api/thermostat/schedule', { schedule });
    if (res.status === 200) {
      dispatch(addToSchedule(res.data));
    }
  } catch (err) {
    console.error(err);
  }
}

export const updateScheduleThunk = (schedule) => async dispatch => {
  schedule.locationId = 0;
  try {
    const res = await axios.put('/api/thermostat/schedule', { schedule });
    if (res.status === 200) {
      dispatch(updateSchedule(res.data));
    }
  } catch (err) {
    console.error(err);
  }
}

export const deleteScheduleThunk = (scheduleId) => async dispatch => {
  try {
    const res = await axios.delete('/api/thermostat/schedule', { data: { scheduleId }   });
    if (res.status === 200) {
      dispatch(deleteSchedule(scheduleId));
    }
  } catch (err) {
    console.error(err);
  }
}

/**
 * REDUCER
 */
export default function(state = defaultThermostat, action) {
  switch (action.type) {
    case GET_TEMPERATURES:
      return { ...state, tempData: action.tempData };
    case SET_POWER:
      return { ...state, powerOn: action.isOn };
    case SET_HEAT:
      return { ...state, heatOn: action.isOn };
    case SET_COOL:
      return { ...state, coolOn: action.isOn };
    case SET_HOLD:
      return { ...state, holdTemp: action.holdTemp, holdTimeRemaining: action.timeRemaining };
    case SET_SCHEDULE:
      return { ...state, schedule: action.schedule }
    case ADD_TO_SCHEDULE:
      return { ...state, schedule: scheduleSort([...state.schedule, action.schedule]) };
    case UPDATE_SCHEDULE:
      return { ...state, schedule: scheduleSort(state.schedule.map(sched => sched.id === action.schedule.id ? action.schedule : sched)) };
    case DELETE_SCHEDULE:
      return { ...state, schedule: state.schedule.filter(sched => sched.id !== action.scheduleId) };
    default:
      return state;
  }
}
