const express = require('express');
const config = require('config')
const connectDB = require('./config/db')
const db = require('./models');
const PORT = process.env.PORT || 3001
const app = express()
const userRoute= require('./routes/api/users')
const  authRoute= require('./routes/api/auth')
const postRoute = require('./routes/api/posts')

// initialize middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use route
app.use('/api/user', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/auth', authRoute)

// Connect to the Mongo DB
connectDB()

if(process.env.NODE_ENV === 'production'){
     app.use(express.static('client/build'))
}

app.get("*", (req, res)=>{
   res.sendFile(path.resolved(__dirname, 'client', 'build', 'index.html'))  
})
app.listen(PORT, ()=>{
     console.log( `Server Listen to port ${PORT}`)
})