### Documentation
For our database, we decided to use the NOSQL database mongoDB. We implemented the basic functions that come with mongodb such as insertOne(), deleteOne() and updateOne(). Below is the schema of how our database is modeled by each collection. 

BudgetUsers Document
{
  _id: objectId,
  username: String
  password: String
}

Expenses Document
{
  _id: objectId,
  product: String,
  date: date,
  price: Integer,
  purchase: String
  
}

Income Document
{
  _id: objectId,
  product: String
  amount: Integer
}

### Division Of Labor
Abenezer Fesseha
