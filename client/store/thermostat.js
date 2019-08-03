import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_TEMPERATURES = 'GET_TEMPERATURES'

/**
 * INITIAL STATE
 */
const defaultThermostat = {
  tempData: []
}

/**
 * ACTION CREATORS
 */
const getTemperatures = tempData => ({type: GET_TEMPERATURES, tempData})

/**
 * THUNK CREATORS
 */
export const getTemperatureThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/thermostat/temperature')
    dispatch(getTemperatures(res.data || defaultThermostat.tempData))
  } catch (err) {
    console.error(err)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultThermostat, action) {
  switch (action.type) {
    case GET_TEMPERATURES:
      return action.tempData
    default:
      return state
  }
}
