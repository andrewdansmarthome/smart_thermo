const Sequelize = require('sequelize')
const db = require('../db')

const ThermostatSchedule = db.define('thermostatSchedule', {
    locationId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    targetTemperature: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    time: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    day: {
        type: Sequelize.STRING,
        allowNull: false
    },
    holiday: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    active: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
})

module.exports = ThermostatSchedule
