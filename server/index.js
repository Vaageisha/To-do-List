const express = require ('express');
const mongoose = require('mongoose');
const dotenv= require('dotenv').config();
const cors= require('cors');

const app= express();
//to get data into json format we use express.json()
app.use(express.json());
//port
const PORT= process.env.PORT || 5500;

//use cors
app.use(cors());

//importing routes
const todoItemRoute=require('./routes/TodolistItems');

// connecting to mongoDB
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err=>console.log(err))

app.use('/', todoItemRoute);

//adding port to connect to server
app.listen(PORT, ()=> console.log("Server connected"));

