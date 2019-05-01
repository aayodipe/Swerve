const express = require('express')
const router = express.Router()
const config = require('config')
const User = require('../../models/User')
const {  check,  validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');



//@routes POST api/users
//@ desc Test route
//@ access Public
router.post('/', [
  //name must be atleast 2 character
  check('name', "Name is require")
  .not()
  .isEmpty(),
  // username must be an email
  check('email', 'Valid Email is require').isEmail(),
  // password must be at least 6 chars long
  check('password', 'Please enter a password with atleast 6 characters').isLength({
    min: 6
  })
], async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    });
  }

  const { name, email, password} = req.body

  try{
    let user = await User.findOne({email}) 
    if(user){
      //If user already exist
      res.status(400).json({msg:'User already exits'})
    }

    //If user is not found, set user  to new user
          user = new User({
          name,
          email,
          password
          })
       
    // Encrypt Password
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);
   
    await user.save();

   const payload = {
     user: {
       id: user.id
     }
   };

jwt.sign(payload, config.get('jwtScrect'), { expiresIn:360 }, (err, token) =>{
   if(err) throw err;
   res.json({token})
  });
  }
  catch(err){
    console.log(err.message)
    res.status(500).send('Server error')
  }

  
  
});
module.exports = router