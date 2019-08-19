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
    console.log('Temp server was hit!')
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
    res.json(schedule);
  } catch (err) {
    next(err);
  }
})

router.post('/schedule', async (req, res, next) => {
  try {
    const data = req.body;
    console.log('Schedule POST route was hit!');
    const schedule = await ThermostatSchedule.create(data.schedule);

    res.json(schedule);
  } catch (err) {
    next(err);
  }
})

router.put('/schedule', async (req, res, next) => {
  try {
    const data = req.body;
    console.log('Schedule PUT route was hit!');
    const schedule = await ThermostatSchedule.findById(data.schedule.id);
    await schedule.update(data.schedule);

    res.json(schedule);
  } catch (err) {
    next(err);
  }
})

router.delete('/schedule', async (req, res, next) => {
  try {
    const data = req.body;
    console.log('Schedule PUT route was hit!');
    const schedule = await ThermostatSchedule.findById(data.scheduleId);

    await schedule.destroy();

    res.json(schedule);
  } catch (err) {
    next(err);
  }
})
