// Profile Page 
// Iteration 0.2
// 10 - 25 - 18
// Jerdon Helgeson

//Can write Html in here for now but it will eventually need to be transferred to a handlebars file
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/profilePage'); //maybe instead of app it will be profilePage
var db = mongoose.connection;

//Create 
var routes = require('./routes/index');
//var academic = require('./routes/academic')
//var settings = require('./routes/settings')
var user = require('./routes/user');
//var profilepage = require('./routes/profilepage')

//init app

var app = express();

//view engine
app.set('views', path.join(__dirname,'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

//bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//express session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

//passport init
app.use(passport.initialize());
app.use(passport.session());

//express validator
app.use(expressValidator({
    errorFormatter: function(param, msg,value){
        var namespace = param.split('.'),
        root = namespace.shift(),
        formParam = root;
        while(namespace.length)
        {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg : msg,
            value : value
        };
    }
}));

//connect flash
app.use(flash());

//global vars
app.use(function(req,res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

//Paths to pages
app.use('/', routes);
app.use('/user', user);
//app.use('/profilepage', profilepage)
//app.use('/academic', academic)

//set port
app.set('port', (process.env.Port || 3000));

app.listen(app.get('port'), function(){
    console.log('Server started on port '+app.get('port'));
})

/*
var $ = require('jquery');
var http = require('http');
var fs = require('fs');
*/
/*
$(document).ready(function () {
    var template = $('#profilePage')
    var templateScript = Handlebars.compile(template);
    context = getContext();
    var html = templateScript(context);
    $(document.body).append(html);
});
*/
/*
http.createServer(function (req, res) {

    
    fs.readFile("profile.html", function (err, data) {
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
        }
         
        res.end();
    });
    
    //res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write("TEST TEST TEST\r\n");
    //res.
    //res.write("\n LINE2?? \n");
    //window.onload();
    //res.end('Hello World!');
    
   
}).listen(8080);
*/
/*
function getContext()
{
    return {"name": "Leblanc Leblanc", "email": "L.Leblanc@email.com","major":"Computer Science"};
}

function getUser()
{
    //This function will replace getContext when included in SCALE 
    return {"name":"name"}
}
*/
/*
window.onload = function()
{
    self.pageIsLoaded();

}

function pageIsLoaded()
{
    res.write("Page is loaded");
}
*/