const form = document.querySelector('.myForm');
const expenseList = document.getElementById('expense-list');
const expenseName = document.getElementById('expense-name');
const expenseAmount = document.getElementById('expense-amount');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = expenseName.value;
    const amount = expenseAmount.value;
    if (name && amount) {
        const newExpense = document.createElement('li');
        newExpense.textContent = `${name}: £${amount}`;
        expenseList.appendChild(newExpense);
        expenseName.value = '';
        expenseAmount.value = '';
        console.log('Expense added:', name, amount);
    } else {
        alert('Please enter a valid expense name and amount');
    }
});