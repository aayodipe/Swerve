const express = require('express')
 const router = express.Router()

 //@routes Get api/post
 //@ desc Test route
 //@ access Public

 router.get('/', (req,res)=>res.json('Post route'))

 module.exports = router