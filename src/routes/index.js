const newsRouter = require('./news')
const siteRouter = require('./site')

function route (app){
    // body home
app.get('/', (req, res) => {
    res.render('home')
  })
  
  app.get('/home', (req, res) => {
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

  // body search
  app.get('/search', (req, res) => {
    res.render('search')
  })

  // Define a route for the login page
  app.get('/login', (req, res) => {
    res.render('login');
  })

  // Define a route for processing the login form data
  app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Add your login logic here
  res.send(`Welcome, ${username}!`);
});

  function route(app){
    app.use('/', siteRouter)
  }


}

module.exports = route;