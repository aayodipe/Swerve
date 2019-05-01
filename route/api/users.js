const express = require('express')
 const router = express.Router()
// ...rest of the initial code omitted for simplicity.
const { check, validationResult } = require('express-validator/check');
const User = require('../../models/User')

 //@routes POST api/users
 //@ desc Test route
 //@ access Public
 router.post('/', [
      //name must be atleast 2 character
      check('Name', "Name is require")
      .not()
      .isEmpty(),
     // username must be an email
     check('email', 'Valid Email is require').isEmail(),
     // password must be at least 6 chars long
     check('password', 'Please enter a password with atleast 6 characters').isLength({ min: 6 })
   ], (req, res) => {
     // Finds the validation errors in this request and wraps them in an object with handy functions
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(422).json({ errors: errors.array() });
     }
     console.log(req.body)
     res.json(req.body)
//      // User.create({
//      //   username: req.body.username,
//      //   password: req.body.password
//      }).then(user => res.json(user));
   });
 module.exports = router