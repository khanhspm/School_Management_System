const express = require('express');
const router = express.Router();

class StudentController{
    getView(req,res){
        console.log('aaaaaaaaaaaaaaaaaaaaaa')
        res.render('mygrade', {layout: 'main'});
    }
    getProfile(req, res){
        // Lấy thông tin người dùng từ phiên đăng nhập
        const user = req.session.user;
      
        res.render('profile', { user, layout: 'main'});
      };
    mygrade(req,res){
        res.render('mygrade', {layout: 'main'})
    }
    myclass(req,res){
        res.render('myclass', {layout: 'main'})
    }
}

module.exports = new StudentController;