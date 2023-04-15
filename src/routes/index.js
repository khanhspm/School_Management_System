const newsRouter = require('./news')
const siteRouter = require('./site')

function route (app){
    // body home
app.get('/', (req, res) => {
    res.render('home')
  })
  
  
  // body information
  app.get('/infor', (req, res) => {
    res.render('information')
  })
  
  // body tuition
  app.get('/tuition', (req, res) => {
    res.render('tuition')
  })
  
  // body meeting schedule
  app.get('/meetsche', (req, res) => {
    res.render('meeting_schedule')
  })
  
  // body result
  app.get('/result', (req, res) => {
    res.render('result')
  })

  function route(app){
    app.use('/', siteRouter)
  }


}

module.exports = route;