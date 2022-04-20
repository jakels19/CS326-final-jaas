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

let fakerObj = {
    'randomUsername':faker.internet.userName(),
    'randomPassword': faker.internet.password()
}
// let randomUsername = faker.internet.userName(); // random userName global
// let randomPassword = faker.internet.password(); // random password global
// let randomDate = faker.date.randomDate(); 
// let randomNum = Math.floor(Math.random() * 1000);
const users = [];

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true

}));

app.get('/login', checkNotAuthenticated, (req,res) =>{
    res.render('login.ejs');
});


app.get('/dashboard', checkNotAuthenticated, (req,res) =>{
    res.render('dashboard.ejs');
});

app.get('/signUp', checkNotAuthenticated, (req,res) =>{
    res.render('signup.ejs');
});

app.get('/addExpense', checkAuthenticated, (req,res) =>{
    res.render('expense.ejs');
});

app.get('/addIncome', checkAuthenticated, (req,res) =>{
    res.render('income.ejs'); 
});

app.post('/signUp', checkNotAuthenticated, (req,res) => {
    // sends fake user data to db
    return JSON.stringify(fakerObj);
});

app.post('/addExpense', checkAuthenticated, (req,res) =>{
    return JSON.stringify(fakerObj);
});

app.post('/addIncome', checkAuthenticated, (req,res) => {
    let postUserName =  JSON.stringify(randomUsername);
    //let postDate =  JSON.stringify(randomDate);
    let postNum = JSON.stringify(randomNum); 
    console.log(postUserName,postNum);
    res.redirect('/'); 
});

//app.put()

app.delete('/removeExpense', checkAuthenticated, (req,res) => {
    console.log('item deleted');
    res.redirect('/');
})

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
