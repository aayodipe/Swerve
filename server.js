const express = require("express");
const route =  require('./route')
const mongoose = require("mongoose");
const userSeed = require('./scripts/seedDb')
const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models/swerve")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(route)

// app.post('/api/traffic/seed', (req, res)=>{
// db.User.insertMany(userSeed)
// })

// Connect to the Mongo DB
const connectDB = require('./config/db')
connectDB()
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/swervedb");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
