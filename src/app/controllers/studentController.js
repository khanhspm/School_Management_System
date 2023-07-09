const express = require('express');
const Student = require('../models/Students');
const Enrollment = require('../models/Enrollment');
const User = require('../models/user');
const Subject = require('../models/Subjects');
class StudentController{
    getProfile(req, res){
        const user = req.session.user;
        res.render('profile', { user, layout: 'main'});
      };
    async mygrade(req,res){
        const user = req.session.user;
        const id = user.id;
        const enrollments = await Enrollment.find({student_id: id})
        const subject_ids = [];
        const semesters = [];
        const midterm_scores = [];
        const final_scores = [];
        for (const enrollment of enrollments) {
            const subject = await Subject.findOne({ subject_id: enrollment.subject_id });
            const subject_name = subject.subject_name;
            subject_ids.push(subject_name);
            semesters.push(enrollment.semester);
            midterm_scores.push(enrollment.midterm_score);
            final_scores.push(enrollment.final_score);
          }
        console.log(subject_ids);
        
        res.render('mygrade', { subject_ids, semesters, midterm_scores, final_scores, layout: 'main'})
    }
    async myclass(req,res){
        const user = req.session.user;
        const id = user.id;
        const me = await Student.findOne({student_id: id});
        const students = await Student.find({class_id: me.class_id});
        console.log(students);
        const staffs = await User.find({id: students.student_id});
        console.log(staffs);
        res.render('myclass', {layout: 'main'})
    }
}

module.exports = new StudentController;