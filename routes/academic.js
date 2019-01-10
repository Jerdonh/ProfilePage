//routes/academic.js

var express = require('express');
var router = express.Router();

//get Page
router.get('/academic', function(req, res){
    res.render('academic'); //
});

module.exports = router;