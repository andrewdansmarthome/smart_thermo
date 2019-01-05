const Sequelize = require('sequelize')
const db = require('../db')

const Temperature = db.define('temperature', {
  temperature: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  serializedValue: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  time: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  targetTemperature: {
    type: Sequelize.INTEGER
  },
  locationId: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})

module.exports = Temperature
