const router = require('express').Router()
const { Temperature, Config } = require('../db/models')
module.exports = router

router.post('/temperature', async (req, res, next) => {
  try {
      const data = req.body
      console.log('Temp server was hit!', data)
      const newTemp = await Temperature.create(data)
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
