let expenses = [];
const form = document.querySelector('.myForm');
const expenseList = document.getElementById('expense-list');
const expenseName = document.getElementById('expense-name');
const expenseAmount = document.getElementById('expense-amount');
const totalElement = document.querySelector('p');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = expenseName.value;
    const amount = parseFloat(expenseAmount.value);
    if (name && amount) {
        const expense = {
            name: name,
            amount: amount
        };
        expenses.push(expense);
       updateExpenseList();
       updateTotal();
       expenseName.value = '';
       expenseAmount.value = '';
       console.log('Expense added:', expense);
       console.log('All expenses:', expenses);
        
    } else {
        alert('Please enter a valid expense name and amount');
    }
});
function updateExpenseList() {
    expenseList.innerHTML = '';
    expenses.forEach(expense => {
        const newExpense = document.createElement('li');
        newExpense.textContent = `${expense.name}: £${expense.amount}`;
        expenseList.appendChild(newExpense);
    });
}
function updateTotal() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0); 
    totalElement.textContent = `Total: £${total.toFixed(2)}`;
}