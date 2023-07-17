const express = require('express');
const Student = require('../models/Students');
const Enrollment = require('../models/Enrollment');
const User = require('../models/user');
const Subject = require('../models/Subjects');
const Teacher = require('../models/Teachers');
const Class = require('../models/Classes');
class StudentController{
    getProfile(req, res){
        const user = req.session.user;
        isAdmin = user.isAdmin === true;
        res.render('profile', { user, isAdmin, layout: 'main'});
      };
    async mygrade(req,res){
        const user = req.session.user;
        isAdmin = user.isAdmin === true;
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
        
        res.render('mygrade', {isAdmin, subject_ids, semesters, midterm_scores, final_scores, layout: 'main'})
    }
    async myclass(req,res){
        const user = req.session.user;
        isAdmin = user.isAdmin === true;
        const id = user.id;
        const me = await Student.findOne({student_id: id});
        const students = await Student.find({class_id: me.class_id});
        const names = [];
        const emails = [];
        const dobs = [];
        const genders = [];
        for (const student of students) {
          const staff = await User.findOne({id: student.student_id});
          console.log(staff);
          names.push(staff.name);
          emails.push(staff.email);
          const date = new Date(staff.dob);
          const dob = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
          console.log(dob);
          dobs.push(dob);
          if(staff.gender){
            genders.push('Nam');
          } else{
            genders.push('Nữ')
          }
        }
        
        res.render('myclass', {isAdmin, names, emails, dobs, genders, layout: 'main'})
    }

    async myteacher(req,res){
      const user = req.session.user;
      isAdmin = user.isAdmin === true;
      const id = user.id;
      const me = await Student.findOne({student_id: id});
      const myclass = await Class.findOne({class_id: me.class_id});
      const myteacher_ids = myclass.teacher_id;
      const subjects = [];
      const names = [];
      const emails = [];
      const phones = [];
      const genders = [];
      for(const myteacher_id of myteacher_ids) {
        const myteacher_inf = await User.findOne({id: myteacher_id});
        const myteacher = await Teacher.findOne({teacher_id: myteacher_id});
        const myteacher_sj = await Subject.findOne({subject_id: myteacher.subject_id});
        subjects.push(myteacher_sj.subject_name);
        names.push(myteacher_inf.name);
        emails.push(myteacher_inf.email);
        phones.push(myteacher.phone);
        if(myteacher_inf.gender){
          genders.push('Nam');
        } else{
          genders.push('Nữ');
        }
      }
      
      res.render('myteacher', {isAdmin, subjects, emails, names, phones, genders, layout: 'main'})
  }

  async teacher_contact(req,res){
    const user = req.session.user;
    isAdmin = user.isAdmin === true;
    const subjects = [];
    const names = [];
    const emails = [];
    const phones = [];
    const genders = [];
    const teacher_infs = await User.find({isAdmin});
    for(const teacher_inf of teacher_infs) {
      const teacher = await Teacher.findOne({teacher_id: teacher_inf.id});
      const teacher_sj = await Subject.findOne({subject_id: teacher.subject_id});
      subjects.push(teacher_sj.subject_name);
      names.push(teacher_inf.name);
      emails.push(teacher_inf.email);
      phones.push(teacher.phone);
      if(teacher_inf.gender){
        genders.push('Nam');
      } else{
        genders.push('Nữ');
      }
    }
    
    res.render('myteacher', {isAdmin, subjects, emails, names, phones, genders, layout: 'main'})
  }

  async myclass_teaching(req,res){
    const user = req.session.user;
    isAdmin = user.isAdmin === true;
    
    res.render('myclass_teaching', {isAdmin, layout: 'main'})
  }
}

module.exports = new StudentController;