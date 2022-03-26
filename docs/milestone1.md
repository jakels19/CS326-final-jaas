### Part 0

## Team Name
jaas

## Application Name
Student Personal Finance Web App

## Team Overview
Jacob Stulgis - jakels19

Abenezer Fesseha - AbenezerF

Aaron Tsui - atsui-umass

Shaham Zahir - shahamzahir

## Innovative Idea
Our innovative idea is a Student Personal Finance Web App. There are many versions of personal finance apps out there but none of them aid young adults in understanding their finances better. Students all across the world constantly fall into debt and live paycheck to paycheck because they don't understand how to track expenses ultimately saving money. Our project focuses on the perspective of the young adult just starting their financial journey and aids them in understanding their personal finances. Our project will allow users to manage their personal finances in an easy and intuitive way. The main data they would upload is their expenses, assets, revenue, recommended savings amount and monthly net income. Our target users would be young adults primarily individuals in college. 

## Important Components
Users will upload their information such as their expenses or income. Then we will store their data in a table with the date it was uploaded. This will make looking at their data easy and clear for the user to view. We will then have running totals of their total expenses during the current month as well as a monthly net income data point that will allow them to see how much leftover income they have left. Also, we will have a recommended savings amount where we will take the monthly net income and deduce how much the user should be saving for that current month. Lastly, we will implement a login/logout system for authenticating users to ensure that each user is receiving their personal data and no information is shared with unauthorized users. We will add visualizations such as pie and bar charts so that the users can understand their assets, expenses and net income more clearly.

### Part 1
![CS326 Team JAAS Milestone 1 Wireframes@1 25x](https://user-images.githubusercontent.com/61201778/159808643-890768ab-e0ee-405c-8f60-7d9a59e201b4.png)

## Login
The login page functionality works so that users provide their email and password in the provided textboxes. Once the user has correctly input their email and password, they then click the login button. The click of the login button will then direct the user to the dashboard page. If a user is new and does not have an account, they should click the sign up button. The click of the sign up button will direct the user to the sign up page.

## Sign Up
Users that are not signed up will need to sign up to use the web application. Users need to input their email as well as a chosen password twice, in order to confirm the password they chose. Once users are signed up, they will be redirected back to the login page.

## Dashboard
The dashboard will essentially be the home page for the user. It will contain all their financial data in an easy to understand table. The dashboard will be split into expenses, income and their balance. Expenses and income will be placed into tables while their balance will be a single value at the bottom of the page. This page also gives the user the ability to add expenses to their expense table as well as additional income to their income table. These buttons will link to the add expense page as well as the add income page. 


## Add Expense
For this page, we want to ensure we've authenticated the user so they have access to edit. Then, we want to allow the user to enter their expense data into the forms. In this case we would like the user to enter the name of the product, the amount the product was purchased for, the date the product was purchased and the method in which the product was purchased. Lastly, we want the user to click the submit button and send their expense information into our database and redirect the user back to their home dashboard.
<img width="599" alt="Screen Shot 2022-03-26 at 11 51 47 AM" src="https://user-images.githubusercontent.com/77024369/160247224-5c3cefae-ea43-46a5-916e-36b0ca37641b.png">


## Add Income
On this page, users will be able to manually add the amount of their income as well as the date they recieved their income. The income and date will be updated to the main dashboard under the income chart after the users submits its income. The program will ensure that their account is protected and cannot be accessed by a third party account.
