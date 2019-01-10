//user.js

var express = require('express');
var router = express.Router();

//get Page
router.get('/profilePage', function(req, res){
    res.render('profilePage'); //
});

router.get('/academic', function(req, res){
    res.render('academic'); //
});

router.get('/settings', function(req, res){
    res.render('settings'); //
});

router.get('/editInfo', function(req, res){
    res.render('editInfo'); //
});

router.get('/logout', function(req, res){
    res.render('logout'); //
});

router.get('/extracurriculars', function(req, res){
    res.render('extracurriculars'); //
});

router.get('/greekLife', function(req, res){
    res.render('greekLife'); //
});

router.get('/clubs', function(req, res){
    res.render('clubs'); //
});

router.get('/sports', function(req, res){
    res.render('sports'); //
});

// Login // Won't need this
/*
router.get('/login', function(req, res){
    res.render('login'); //
});
*/
//module.exports = router;

module.exports = router;