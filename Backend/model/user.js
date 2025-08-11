const express = require('express');

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/AUTH");

const schema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },

    password:{
        type: String,
        required:true
    }

}) ;


const User = new mongoose.model("AUTH", schema);

module.exports = User;