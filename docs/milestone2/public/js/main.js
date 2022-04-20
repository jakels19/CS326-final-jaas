async function createExpense(){

}

async function createIncome(){

}

async function fetchIncome(){

}

async function fetchExpense(){
    const response = await fetch('/addExpense')
    const data = response.json()
    console.log(data);
}

async function updateIncome(){

}

async function updateExpense(){


}

async function deleteIncome(){

}

async function deleteExpense(){

}
