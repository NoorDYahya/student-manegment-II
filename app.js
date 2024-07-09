var MongoClient = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

//cors 
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH'); // Allow specific HTTP methods
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
    next();
});
//To parse URL encoded data
app.use(bodyParser.urlencoded({extended: false}));
//To parse json data
app.use(bodyParser.json());
// for parsing multipart/form-data
app.use(upload.array());

var students = require('./routers/students');
app.use('/students',students); // localhost:3000/students

app.get('*',function(req,res){
  res.send('Sorry, this is an invalid URL.');
});

app.listen(3000);


