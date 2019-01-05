const Sequelize = require('sequelize')
const db = require('../db')

const ThermostatSchedule = db.define('thermostatSchedule', {
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
        defaultValue: 1
    },
    active: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
})

module.exports = ThermostatSchedule