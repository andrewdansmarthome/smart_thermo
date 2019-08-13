import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_TEMPERATURES = 'GET_TEMPERATURES'
const SET_POWER = 'SET_POWER'
const SET_HEAT = 'SET_HEAT'
const SET_COOL = 'SET_COOL'
const SET_HOLD = 'SET_HOLD'
const SET_SCHEDULE = 'SET_SCHEDULE'

/**
 * INITIAL STATE
 */
const defaultThermostat = {
  tempData: [],
  powerOn: false,
  heatOn: false,
  coolOn: false,
  holdOn: false,
  holdTemp: 72,
  schedule: [{
    day: 'Monday',
    time: '1:23',
    temp: 123
  }],
  setScheduleData: {
    date: null,
    time: null,
    temp: null
  }
};

/**
 * ACTION CREATORS
 */
const getTemperatures = tempData => ({ type: GET_TEMPERATURES, tempData })
const setPower = isOn => ({ type: SET_POWER, isOn })
const setHeat = isOn => ({ type: SET_HEAT, isOn })
const setCool = isOn => ({ type: SET_COOL, isOn })
const setHold = (isOn, holdTemp) => ({type: SET_HOLD, isOn, holdTemp})
const setSchedule = (schedule) => ({ type: SET_SCHEDULE, schedule})

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
  console.log('togglePower')
  try {
    const res = await axios.post('/api/thermostat/togglepower');
    dispatch(setPower(res.data.isOn));
  } catch (err) {
    console.error(err);
  }
}

export const toggleHeatPowerThunk = () => async dispatch => {
  console.log('toggle heat')
  try {
    const res = await axios.post('/api/thermostat/toggleheat');
    dispatch(setHeat(res.data.isOn));
  } catch (err) {
    console.error(err);
  }
}

export const toggleCoolPowerThunk = () => async dispatch => {
  console.log('toggle cool')
  try {
    const res = await axios.post('/api/thermostat/togglecool');
    dispatch(setCool(res.data.isOn));
  } catch (err) {
    console.error(err);
  }
}

export const setHoldThunk = () => async dispatch => {
  console.log('setHold')
  try {
    const res = await axios.post('/api/thermostat/sethold');
    dispatch(setHold(res.data.isOn));
  } catch (err) {
    console.error(err);
  }
}

export const getScheduleThunk = () => async dispatch => {
  console.log('set schedule')
  try {
    const res = await axios.get('/api/thermostat/schedule');
    dispatch(setSchedule(res.data.schedule));
  } catch (err) {
    console.error(err);
  }
}

export const setScheduleThunk = (schedule) => async dispatch => {
  console.log('set schedule')
  try {
    const res = await axios.post('/api/thermostat/schedule', schedule);
    dispatch(setSchedule(res.data.schedule));
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
      return { ...state, holdOn: action.isOn, holdTemp: action.holdTemp };
    case SET_SCHEDULE:
      return { ...state, schedule: action.schedule };
    default:
      return state;
  }
}
