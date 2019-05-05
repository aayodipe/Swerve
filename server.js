const express = require('express');
const config = require('config')
const connectDB = require('./config/db')
const db = require('./models');
const PORT = process.env.PORT || 3001
const app = express()

//Define Routes
const userRoute = require('./route/api/users')
const postRoute = require('./route/api/posts')
const authRoute = require('./route/api/auth')

// initialize middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use route
app.use('/api/user', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/auth', authRoute)
// Connect to the Mongo DB
connectDB()



app.listen(PORT, ()=>{
     console.log( `Server Listen to port ${PORT}`)
})