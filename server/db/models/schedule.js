const Sequelize = require('sequelize')
const db = require('../db')

const Schedule = db.define('temperature', {
  temperature: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  time: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  dayCode: { // 1 = Sunday => 7 = Saturday
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Schedule
