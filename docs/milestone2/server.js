if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require("express");
const {faker} = require("@faker-js/faker");
const app = express();
const passport = require('passport');
const bcrypt = require('bcrypt');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view-engine', 'ejs');
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

const initializePassport = require('./passport-config');

initializePassport(
    passport,
    userName => users.find(user => user.userName === userName),
    id => users.find(user => user.id === id)
);

let randomUsername = faker.internet.userName(); // random userName global
let randomPassword = faker.internet.password(); // random password global
const users = [];

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true

}));

app.get('/login', checkNotAuthenticated, (req,res) =>{
res.render('login.ejs');
});


app.get('/dashboard', (req,res) =>{

});

app.get('/signUp', checkNotAuthenticated, (req,res) =>{

});

app.get('/addExpense', (req,res) =>{
// res.sendFile("./public/html/expenses.html");
});

app.get('/addIncome', (req,res) =>{

});

app.post('/signUp', checkNotAuthenticated, (req,res) => {
// sends fake user data to db
});

app.post('/addExpense', (req,res) =>{
    // needs to send dummy data to server using faker-js
});

app.post('/addIncome', (req,res) => {

});

app.delete('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login');
})

function checkAuthenticated(req, res, next){ //used for index
    if (req.isAuthenticated()){
        return next();
    }

    res.redirect('/login');
}

function checkNotAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    next();
}
app.listen(3000)