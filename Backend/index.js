const express = require('express');
const app = express();
const router = require('./routes/user'); 
const cors  = require('cors');

app.use(express.json()); //this is a middleware so we have to use it before any route
app.use('/',router);


app.listen(5000,()=>{
    console.log('Server is running on port 5000');


})