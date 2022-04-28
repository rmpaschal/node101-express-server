// import files and packages up here
const express = require('express'); 
const app = express ();
let data = require('./data.json');
const morgan = require('morgan')
app.use(morgan('dev'));


// create your express server below
app.get('/', (req, res, next) =>{
     res.status(200).send("HelloWorld");
   });
   app.get('/data', (req, res, next) => {
        res.status(200).send(data);
   
   })

 

// add your routes and middleware beloapp.use(function(req, res, next) {



// finally export the express application
module.exports = app

