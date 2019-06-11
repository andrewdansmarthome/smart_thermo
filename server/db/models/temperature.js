const Sequelize = require('sequelize')
const db = require('../db')

const Temperature = db.define('temperature', {
  temperature: {
    type: Sequelize.FLOAT,
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
    type: Sequelize.FLOAT
  },
  locationId: {
    type: Sequelize.STRING,
    defaultValue: "1"
  }
})

module.exports = Temperature
