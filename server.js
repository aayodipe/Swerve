const express = require('express');
const config = require('config')
// const connectDB = require('./config/db')
const db = require('./models');
const PORT = process.env.PORT || 3001
const app = express()
const path = require('path')
const userRoute= require('./routes/api/users')
const  authRoute= require('./routes/api/auth')
const postRoute = require('./routes/api/posts')
const mongoose = require('mongoose');

// initialize middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use route
app.use('/api/user', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/auth', authRoute)


if(process.env.NODE_ENV === 'production'){
     //set static folder
     app.use(express.static('client/build'));
};

app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
   });
// Connect to the Mongo DB
mongoose.connect(process.env.Mongo_URL || 'mongodb+srv://aayodipe:Adeyemi2@cluster0-xcjje.mongodb.net/test?retryWrites=true', {useNewUrlParser: true}
   
)
app.listen(PORT, ()=>{
     console.log( `Server Listen to port ${PORT}`)
})

