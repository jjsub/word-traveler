
'use strict';

exports.init = function(req, res){
  res.render('vacations/new');
};

exports.index = function(req, res){
  res.render('vacations/index');
};

exports.create = function(req, res){
  console.log(req.body);
  res.redirect('/vacations');//This redirect send the browser back to /vacations... /vacations go to the index//
};
