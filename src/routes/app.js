const authRoute = require('./authRoute');
const myclassRouter = require('./myclass');
const errorRouter = require('./errorRoute');
const studentRouter = require('./student');
const session = require('express-session');

function route (app){

    // Use the express-session middleware to create a session object
  app.use(session({
    secret: 'khanhspm',
    resave: true,
    saveUninitialized: true
  }));

  // Middleware để kiểm tra xác thực
  app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.user ? true : false;
    next();
  });

  // Sử dụng routes cho đăng nhập, đăng xuất
  app.use('/', authRoute);

  // body home
  app.get('/home', (req, res) => {
    res.render('home', {layout: 'main'})
  })

  app.use('/', studentRouter);
  app.use('/myclass', myclassRouter);
  app.use('/', errorRouter);
} 
module.exports = route;