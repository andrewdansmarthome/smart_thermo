const router = require('express').Router()
const { Temperature, Config } = require('../db/models')
module.exports = router

router.post('/temperature', async (req, res, next) => {
  try {
      const {temperature} = req.body
      const newTemp = await Temperature.create({temperature})
      res.json(204)
  } catch (err) {
    next(err)
  }
})

router.get('/config/:id', async (req, res, next) => {
  try {
    const thermostatConfig = await Config.findOne(req.params.id)
    res.json(thermostatConfig)
  }catch (err) {
    next(err)
  }
})
