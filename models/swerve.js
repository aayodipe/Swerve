const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required"
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  streetname: {
    type: String,
    trim: true
  },
  post: {
    type: String,
    trim: true
  },
  like: {
    type: Boolean
  },
  Comment: String,
  
  date: {
  type: Date,
  default: Date.now
  }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;