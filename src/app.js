const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const route = require('./routes')
const db = require('./config/db')
const bcrypt = require('bcryptjs');
const session = require('express-session');

// Connect to DB
db.connect()

const app = express()

const port = 3000

// HTTP local
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Template engine
app.engine('.handlebars', handlebars.engine({
  defaultLayout: false
}));
app.set('view engine', '.handlebars') 
app.set('views', path.join(__dirname, 'resources/views')) 

// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})