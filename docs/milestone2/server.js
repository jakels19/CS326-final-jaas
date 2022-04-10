const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/login', (req,res) => {

});


app.get('/dashboard', (req,res) =>{

});

app.get('/signUp', (req,res) =>{

});

app.post('/addExpense', (req,res) =>{

});

app.post('/addIncome', (req,res) => {

});