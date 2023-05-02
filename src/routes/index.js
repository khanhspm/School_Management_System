const loginRouter = require('./login');
const session = require('express-session');

function route (app){

    // Use the express-session middleware to create a session object
  app.use(session({
    secret: 'khanhspm',
    resave: false,
    saveUninitialized: true
  }));

  app.use('/login', loginRouter);

  // body home
  app.get('/', (req, res) => {
    res.render('home', {layout: 'main'})
  })
} 
module.exports = route;