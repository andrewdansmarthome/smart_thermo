const router = require('express').Router()
const { Temperature, Config, ThermostatSchedule} = require('../db/models')
module.exports = router

router.get('/temperature', async (req, res, next) => {
  try {
    console.log('Get temp server was hit!')
    const tempData = await Temperature.findAll();
    res.json(tempData)
  } catch (err) {
    next(err)
  }
})

router.post('/temperature', async (req, res, next) => {
  try {
    const data = req.body
    console.log('Temp server was hit!', data)
    await Temperature.bulkCreate(data)
    res.json(204)
  } catch (err) {
    next(err)
  }
})

router.get('/config/:id', async (req, res, next) => {
  try {
    console.log('Config route was hit!')
    const thermostatConfig = await Config.findOne(req.params.id)
    res.json(thermostatConfig)
  }catch (err) {
    next(err)
  }
})

router.get('/schedule', async (req, res, next) => {
  try {
    console.log('Schedule GET route was hit!');
    const schedule = await ThermostatSchedule.findAll({
      where: {
        locationId: req.query.locationId
      }
    });
    console.log('schedule', req.query, schedule);
    res.json(schedule);
  } catch (err) {
    next(err);
  }
})

router.post('/schedule', async (req, res, next) => {
  try {
    const data = req.body;
    console.log('Schedule POST route was hit!', data);
    if (data.type === 'add') {
      await ThermostatSchedule.create(data.schedule);
    } else if (data.type === 'update') {
      await ThermostatSchedule.find(data.schedule.id).update(data.schedule);
    }
    res.json(204);
  } catch (err) {
    next(err);
  }
})
