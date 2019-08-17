'use strict'

const db = require('../server/db')
const { User, Temperature, ThermostatConfig, ThermostatSchedule } = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  console.log(`seeded ${users.length} users`)

  const tempList = [
    { temperature: 68.5, serializedValue: 137, time: 1564798477, targetTemperature: 70, locationId: 1},
    { temperature: 69, serializedValue: 138, time: 1564798577, targetTemperature: 70, locationId: 1},
    { temperature: 70.5, serializedValue: 141, time: 1564798677, targetTemperature: 70, locationId: 1},
    { temperature: 70, serializedValue: 140, time: 1564798777, targetTemperature: 70, locationId: 1},
    { temperature: 71, serializedValue: 142, time: 1564798877, targetTemperature: 70, locationId: 1},
    { temperature: 71.5, serializedValue: 143, time: 1564798977, targetTemperature: 70, locationId: 1}
  ]
  const temperatures = await Promise.all(tempList.map(temp => Temperature.create(temp)))

  console.log(`seeded ${temperatures.length} temperatures`)

  const thermoconfig = await Promise.all([
    ThermostatConfig.create({
      chipId: 1,
      transmitDelay: 100,
      targetTemp: 72,
      nextScheduledTime: 500,
      nextScheduledTemp: 75
    })
  ]);

  console.log(`seeded ${thermoconfig.length} thermostatConfigs`)

  const thermostatSchedule = await Promise.all([
    ThermostatSchedule.create({
      locationId: 0,
      targetTemperature: 80,
      time: '8:00',
      day: 'Monday'
    }),
    ThermostatSchedule.create({
      locationId: 0,
      targetTemperature: 72,
      time: '5:30',
      day: 'Monday'
    }),
    ThermostatSchedule.create({
      locationId: 0,
      targetTemperature: 80,
      time: '8:00',
      day: 'Tuesday'
    }),
    ThermostatSchedule.create({
      locationId: 0,
      targetTemperature: 72,
      time: '5:30',
      day: 'Tuesday'
    }),
    ThermostatSchedule.create({
      locationId: 0,
      targetTemperature: 76,
      time: '8:00',
      day: 'Wednesday'
    }),
    ThermostatSchedule.create({
      locationId: 0,
      targetTemperature: 72,
      time: '5:30',
      day: 'Wednesday'
    })
  ])

  console.log(`seeded ${thermostatSchedule.length} thermostatConfigs`)

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
