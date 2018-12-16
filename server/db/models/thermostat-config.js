const Sequelize = require('sequelize')
const db = require('../db')

const ThermostatConfig = db.define('temperature', {
  temperature: {
    type: Sequelize.STRING
  },
  serializedValue: {
    type: Sequelize.INTEGER
  },
  time: {
    type: Sequelize.DATE,
    unique: true,
    allowNull: false
  },
  targetTemperature: {
    type: Sequelize.INTEGER
  },
  locationId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = ThermostatConfig
