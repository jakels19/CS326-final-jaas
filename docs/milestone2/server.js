if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

// const MongoClient =  require('mongodb');
// require('dotenv/config');

const express = require("express");
const app = express();
const passport = require('passport');
const bcrypt = require('bcrypt');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');

const MongoClient = require("mongodb").MongoClient;
// const client = new MongoClient(process.env.DATABASE_URL);

const initializePassport = require('./passport-config');
initializePassport(
    passport,
    username => users.find(user => user.username === username),
    id => users.find(user => user.id === id)
)

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

const users = []; // local database

let db, 
DB_STRING = "mongodb+srv://123:123@cluster0.bpmdg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(DB_STRING, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to milestone3 Database`);
        db = client.db('milestone3');
    })


app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true

}));

app.get('/', checkAuthenticated, (req, res) => {
    res.render('dashboard.ejs');
});

app.get('/login', (req,res) =>{
    res.render('login.ejs');
});


app.get('/dashboard', checkNotAuthenticated, (req,res) =>{
    res.render('dashboard.ejs');
});

app.get('/signUp', checkNotAuthenticated, (req,res) =>{
    res.render('signup.ejs');
});

app.get('/addExpense', checkNotAuthenticated, (req,res) =>{
    res.render('expense.ejs');
});

app.get('/addIncome', checkNotAuthenticated, (req,res) =>{
    res.render('income.ejs'); 
});

app.post('/signUp', checkNotAuthenticated,  async (req,res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        db.collection('budgetUsers').insertOne({
            username: req.body.username,
            password: hashedPassword
        })
        // users.push({
        //     username: req.body.username,
        //     password: hashedPassword
        // })
        res.redirect('/login');
    } catch {
        res.redirect('/signup');
    }
});

app.post('/addExpense', checkNotAuthenticated, (req,res) =>{
    db.collection('userExpenses').insertOne({
        product: req.body.productName,
        date: req.body.date,
        price: req.body.price,
        purchase: req.body.methodPurchase
    })
    res.redirect('/'); 
});

app.post('/addIncome', checkAuthenticated, (req,res) => {
    // let postUserName =  JSON.stringify(randomUsername);
    // //let postDate =  JSON.stringify(randomDate);
    // let postNum = JSON.stringify(randomNum); 
    db.collection('userIncome').insertOne({
        product: req.body.Date,
        amount: req.body.Amount
    });
    // console.log(postUserName,postNum);
    res.redirect('/'); 
});

app.put('/updateExpense', (req,res) =>{
    db.collection('userExpenses').updateOne({},{
        $set: {
            product: req.body.productName,
            date: req.body.date,
            price: req.body.price,
            purchase: req.body.methodPurchase
        }
    });
    console.log('item updated');
    res.redirect('/');
});

//app.put()

app.delete('/removeExpense', checkAuthenticated, (req,res) => {
    db.collection('userExpenses').deleteOne({
        product: req.body.productName,
        date: req.body.date,
        price: req.body.price,
        purchase: req.body.methodPurchase
    });
    console.log('item deleted');
    res.redirect('/');
});

app.delete('/removeIncome',checkAuthenticated,(req,res) =>{
    db.collection('userExpenses').deleteOne({
        product: req.body.Date,
        amount: req.body.Amount
    });
    console.log('income deleted');
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
//change
app.listen(process.env.PORT || 8080);
