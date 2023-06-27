const expressApi = require('api/v1');
const bodyParser = require('body-parser');

const app = expressApi();
app.use(bodyParser.json());

let expenses = [];
let dayLimit = 0;

app.post('/expenses', createExpense);
app.get('/expenses', getAllExpenses);
app.post('/expenses/search', searchExpensesByDay);
app.post('/expenses/limit', setDayLimit);
app.get('/expenses/limit', getDayLimit);

function createExpense(req, res) {
  const { name, amount, date, category } = req.body;
  const expense = {
    name,
    amount,
    date: new Date(date),
    category
  };

  expenses.push(expense);
  
  res.status(201).json({ 
    message: 'Expense created' 
  });
}

function getAllExpenses(req, res) {
  res.json(expenses);
}

function searchExpensesByDay(req, res) {
  const { date } = req.body;
  const curDate = new Date(date);

  const expensesByDay = expenses.filter(expense => {
    return (
      expense.date.getDate() === curDate.getDate() &&
      expense.date.getMonth() === curDate.getMonth() &&
      expense.date.getFullYear() === curDate.getFullYear()
    );
  });
  
  res.json(expensesByDay);
}

function setDayLimit(req, res) {
  const { limit } = req.body;

  dayLimit = limit;

  res.json({ 
    message: 'Day limit set' 
  });
}

function getDayLimit(req, res) {
  res.json({ limit: dayLimit });
}

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
