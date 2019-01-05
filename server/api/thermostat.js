const router = require('express').Router()
const { Temperature, Config, Schedule } = require('../db/models')
module.exports = router

router.post('/temperature', async (req, res, next) => {
  try {
    const data = req.body
    console.log('Temp server was hit!', data)
    await Temperature.create(data)
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
    console.log('Schedule GET route was hit!')
    const schedule = await Schedule.findOne(req.chipId)
    res.json(schedule)
  } catch (err) {
    next(err)
  }
})

router.post('/schedule', async (req, res, next) => {
  try {
    const data = req.body
    console.log('Schedule POST route was hit!', data)
    await Schedule.findOne(data)
    res.json(204)
  } catch (err) {
    next(err)
  }
})
