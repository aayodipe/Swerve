const router = require('express').Router();
const trafficAPI  = require('./API')

router.use('/traffic', trafficAPI)

module.exports = router