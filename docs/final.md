### Title
Jaas

### Subtitle
Student Personal Finance App

### Semester
Spring 2022

### Overview
Our application is designed to help college students stay in line with their finances. The application is designed to keep track of a students income and expenses to let them know how much they have.

### Team Members
Abenezer Fesseha, 
Aaron Tsui, 
Shaham Zahir, 
Jacob Stulgis

### User Interface

Users are first greeted with the login page. Here they enter their username and password to sign.

![login3](https://user-images.githubusercontent.com/61201778/164344572-ac0276e4-cf58-442b-9ba9-dd9600d694a8.png)

If users do not have an account, they click the blue link that brings them to the sign up page. After inputting their information and clicking sign up it will bring them back to the login page.

![signup](https://user-images.githubusercontent.com/61201778/164344606-619b85d5-bfda-441b-9d26-943db3ff4fc7.png)

After successfully logging in users are presented the dashboard. On the user dashboards the user will see their expenses and income. The total balance of the user is presented at the bottom of the page.

![dashboar](https://user-images.githubusercontent.com/61201778/164344557-c042e072-16af-4b0f-9878-becf9a67f4e9.png)

If the user clicks on the add income button, they are brought to the income page. The income page takes the date your entering it and the amount your entering in. It is then sent back to the dashboard page.

![income2](https://user-images.githubusercontent.com/61201778/164344522-830e3bf4-c052-46ef-ae92-710fe40dc05d.png)

If the user clicks on the add expense button, they are brought to the expense page. The expense page take the product name for the expense, the date of the expense, the price of the expense and the method of purchase. After submitting, the expense is sent back to the dashboard.

![expense](https://user-images.githubusercontent.com/61201778/164344543-01674e2c-761e-4e58-b99d-0cd4f8b57302.png)


### APIs

![apiplanning](https://user-images.githubusercontent.com/77024369/161867114-b3203ace-8151-4ee8-9c02-83d3d6e6f421.png)

### Database

For our database, we decided to use the NOSQL database mongoDB. We implemented the basic functions that come with mongodb such as insertOne(), deleteOne() and updateOne(). Below is the schema of how our database is modeled by each collection. 

BudgetUsers Document
{
  _id: objectId,
  username: String
  password: String
}

Expenses Document
{
  _id: 
  objectId,
  product: 
  String,
  date:
  date,
  price: 
  Integer,
  purchase: 
  String
}

Income Document
{
  _id: objectId,
  product: String
  amount: Integer
}


### URL Routes/Mappings

/login - brings you to the login page and uses authentication permisssions

/signUp - brings you to the signup page and uses authentication permissions

/dashboard - brings you to the dashboard page after successfully getting through authentication

/addExpense - brings you to the expense page and creates a new expense

/addIncome - brings you to the income page and creates a new income

/updateExpense - allows the user to update their expense information

/updateIncome - allows the user to update their income information

/removeExpense - allows the user to remove any expense information

/removeIncome - allows the user to remove any income information

### Authentication/Authorization
We used passport as an authentication middleware for node.js in a .env file. This authentication creates a user in the database with their correct username and password. Once authenticated, the user then has full access to the dashboard and all other features on the page. 

### Division of Labor

Jacob Stulgis - Authentication, MongoDB dependency setup

Shaham Zahir - Final write up, back-end functionality 

Abenezer Fesseha - Finished backend logic, milestone3.md, setup and connected MongoDb to our web-app, added Mongo functionality to crud routes

### Conclusion
Our experience working on the project was filled with many challenges. We were able to implement information we learned about html, css, javascript, crud, and databases in general to finalize our project. The biggest challenge we faced was tryig to implement crud functionality into our website. Ideally, we would have like to have more of an understanding on how to use bootstrap as well as creating fake data using faker.js.
