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

app.get('/addExpense', (req,res) =>{
// res.sendFile("./public/html/expenses.html");
});

app.get('/addIncome', (req,res) =>{

});

app.post('/signUp', (req,res) => {
// sends fake user data to db
});

app.post('/addExpense', (req,res) =>{
    // needs to send dummy data to server using faker-js
});

app.post('/addIncome', (req,res) => {

});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})