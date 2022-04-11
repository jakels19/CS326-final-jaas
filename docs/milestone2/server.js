const express = require("express");
const {faker} = require("@faker-js/faker");
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/login', (req,res) => {
// send fake user data to database
let randomUsername = faker.internet.userName(); // random user name
let randomPassword = faker.internet.password(); // random password
res.send(`Username: ${randomUsername} Password: ${randomPassword}`); //responds by showing username and password
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