const express = require('express')
 const router = express.Router()

 //@routes Get api/auth
 //@ desc Test route
 //@ access Public

 router.get('/', (req,res)=>res.json('Auth route'))

 module.exports = router