const User = require('./user')
const Temperature = require('./temperature')
const ThermostatConfig = require('./thermostat-config')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

module.exports = {
  User,
  Temperature,
  ThermostatConfig
}
