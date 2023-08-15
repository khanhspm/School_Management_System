const Student = require('../models/Students');
const Enrollment = require('../models/Enrollment');
const User = require('../models/user');
const Subject = require('../models/Subjects');
const Teacher = require('../models/Teachers');
const Class = require('../models/Classes');

class TeacherController {
    async myclass_teaching(req,res){
        const user = req.session.user;
        isAdmin = user.isAdmin === true;
        
        res.render('myclass_teaching', {isAdmin, layout: 'main'})
      }
    async getTimeTeaching(req,res){
        const user = req.session.user;
        isAdmin = user.isAdmin === true;
        
        res.render('time_teaching', {isAdmin, layout: 'main'})
    }
    async midtermScore(req,res){
        const user = req.session.user;
        isAdmin = user.isAdmin === true;
        
        res.render('midterm_score', {isAdmin, layout: 'main'})
    }
    async finalScore(req,res){
        const user = req.session.user;
        isAdmin = user.isAdmin === true;
        
        res.render('finalterm_score', {isAdmin, layout: 'main'})
    }
}

module.exports = new TeacherController;