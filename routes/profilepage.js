//routes/profilepage.js

var express = require('express');
var router = express.Router();

//get Page
router.get('/profilepage', function(req, res){
    res.render('profilepage'); //
});

module.exports = router;