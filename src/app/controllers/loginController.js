const User = require('../models/user');

class LoginController {

  //Get /login
  getLogin(req, res){
    res.render('login', {layout: 'login_layout'})
  }

  //Post /login
  postLogin(req, res, next){
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email})
        .then(user => {
            if (!user) {
                return res.redirect('/login');
            }
            if (password !== user.password) {
                return res.redirect('/login');
            }
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
                console.log(err);
                res.redirect('/');
            });
        })
        .catch(err => console.log(err));
  }

  postLogout(req, res, next){
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    })
  }
}
// Tạo ra đối tượng mới và export ra ngoài.
module.exports = new LoginController;  