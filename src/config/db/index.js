// Using Node.js `require()`
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const indexRouter = require('../../routes/app');

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://khanhcshadu:mvk652002@cluster0.ceyfv4w.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect successfully!')
    } catch (error) {
        console.log('Connect failure!!!')
        
    }
}

module.exports = {connect}