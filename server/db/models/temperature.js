const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Temperature = db.define('temperature', {
  temperature: {type: Sequelize.STRING},
  serializedValue: {type: Sequelize.INTEGER},
  time: {
	type: Sequelize.DATE,
	unique: true,
	allowNull: false
  },
  targetTemperature: {Sequelize.INTEGER},
  locationId: {
	Sequelize.INTEGER,
	allowNull: false
  }
})

module.exports = Temperature
