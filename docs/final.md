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

{
    username: character
    password: character
    total: integer
}

### URL Routes/Mappings

/login

/signUp

/dashboard

/addExpense

/addIncome

/updateExpense

/updateIncome

/removeExpense

/removeIncome

### Authentication/Authorization
We used passport as an authentication middleware for node.js in a .env file. 

### Division of Labor

### Conclusion
