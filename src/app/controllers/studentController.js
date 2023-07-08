const express = require('express');
const Student = require('../models/Students');
const Enrollment = require('../models/Enrollment')
const User = require('../models/user')
class StudentController{
    async getView(req,res){
        const user = req.session.user;
        const id = user.id;
        const enrollments = await Enrollment.find({ student_id: id});
        res.render('mygrade', { enrollments, layout: 'main' });
    }
    getProfile(req, res){
        const user = req.session.user;
        console.log(user)
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