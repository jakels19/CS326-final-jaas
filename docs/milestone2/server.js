const express = require("express");
const faker = require("faker");
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/login', (req,res) => {

});


app.get('/dashboard', (req,res) =>{

});

app.get('/signUp', (req,res) =>{

});

app.post('/addExpense', (req,res) =>{
    // res.render("expenses.html");
});

app.post('/addIncome', (req,res) => {

});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})