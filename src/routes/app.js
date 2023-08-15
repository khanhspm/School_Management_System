const authRoute = require('./authRoute');
const errorRouter = require('./errorRoute');
const studentRouter = require('./student');
const teacherRouter = require('./teacher');
const session = require('express-session');
const authConfig = require('../config/auth/auth.config');

function route (app){

  app.use(session({
    secret: authConfig.secret,
  resave: authConfig.resave,
  saveUninitialized: authConfig.saveUninitialized,
  }));

  app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.user ? true : false;
    next();
  });

  app.use('/', authRoute);

  app.get('/home', (req, res) => {
    const isAdmin = req.session.user.isAdmin === true;
    res.render('home', {layout: 'main', isAdmin})
  })

  app.use('/', studentRouter);
  app.use('/', errorRouter);
  app.use('/', teacherRouter);
} 
module.exports = route;