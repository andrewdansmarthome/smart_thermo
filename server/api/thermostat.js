const router = require('express').Router()
const { Temperature } = require('../db/models')
module.exports = router

router.post('/temperature', async (req, res, next) => {
  try {
      const {temperature} = req.body
      const newTemp = Temperature.create({temperature})

      //temperature
  } catch (err) {
    next(err),
  }
})

//

