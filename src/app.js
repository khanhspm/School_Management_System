const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
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

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/infor', (req, res) => {
  res.render('information')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})