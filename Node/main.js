const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Данные о расходах (хранятся в памяти)
let expenses = [];

// Лимит потраченных денег на день (хранится в памяти)
let dailyLimit = 0;

// POST метод для создания объекта расхода
app.post('/expenses', (req, res) => {
  const { name, amount, date, category } = req.body;
  const expense = {
    name,
    amount,
    date: new Date(date),
    category
  };
  expenses.push(expense);
  res.status(201).json({ message: 'Expense created successfully' });
});

// GET метод для получения всех трат
app.get('/expenses', (req, res) => {
  res.json(expenses);
});

// POST метод поиска трат за конкретный день
app.post('/expenses/search', (req, res) => {
  const { date } = req.body;
  const formattedDate = new Date(date);
  const expensesForDay = expenses.filter(expense => {
    return (
      expense.date.getDate() === formattedDate.getDate() &&
      expense.date.getMonth() === formattedDate.getMonth() &&
      expense.date.getFullYear() === formattedDate.getFullYear()
    );
  });
  res.json(expensesForDay);
});

// POST метод для установки лимита потраченных денег на день
app.post('/expenses/limit', (req, res) => {
  const { limit } = req.body;
  dailyLimit = limit;
  res.json({ message: 'Daily limit set successfully' });
});

// GET метод для получения этого лимита
app.get('/expenses/limit', (req, res) => {
  res.json({ limit: dailyLimit });
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});