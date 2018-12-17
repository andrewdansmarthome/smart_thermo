const Sequelize = require('sequelize')
const db = require('../db')

const Temperature = db.define('temperature', {
  temperature: {
    type: Sequelize.INTEGER
  },
  serializedValue: {
    type: Sequelize.INTEGER
  },
  time: {
    type: Sequelize.INTEGER,
    // allowNull: false
  },
  targetTemperature: {
    type: Sequelize.INTEGER
  },
  locationId: {
    type: Sequelize.INTEGER,
    // allowNull: false
  }
})

module.exports = Temperature
