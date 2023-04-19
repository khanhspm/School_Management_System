const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const route = require('./routes')
const db = require('./config/db')

// Connect to DB
db.connect()

const app = express()
const port = 3000

// HTTP local
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))

//Template engine
app.engine('.hdb', handlebars.engine({
  extname: '.hdb'   // change file.handlebars to file.hdb
}));
app.set('view engine', '.hdb') 
app.set('views', path.join(__dirname, 'resources\\views')) 

// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})