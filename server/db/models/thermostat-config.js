const Sequelize = require('sequelize')
const db = require('../db')

const ThermostatConfig = db.define('thermostatConfig', {
  chipId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  transmitDelay: {
    type: Sequelize.INTEGER,
  },
  targetTemp: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  nextScheduledTime: {
    type: Sequelize.INTEGER,
  },
  nextScheduledTemp: {
    type: Sequelize.INTEGER,
  }
})

module.exports = ThermostatConfig
