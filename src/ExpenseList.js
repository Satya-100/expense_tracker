import React, { useState, useEffect } from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, setExpenses, setEditingExpense }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const calculateTotal = () => {
      const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
      setTotalAmount(total);
    };
    calculateTotal();
  }, [expenses]);

  const handleDelete = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  const handleEdit = (index) => {
    setEditingExpense(index);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredExpenses = filter === 'all' 
    ? expenses 
    : expenses.filter(expense => expense.category === filter);

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <div className="filter">
        <label htmlFor="category-filter">Filter by Category: </label>
        <select id="category-filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="stationary">Stationary</option>
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
        </select>
      </div>
      <ul>
        {filteredExpenses.map((expense, index) => (
          <li key={index}>
            <div>{expense.description}</div>
            <div>${expense.amount.toFixed(2)}</div>
            <div>{expense.category}</div>
            <div>{new Date(expense.date).toLocaleString()}</div>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="total">
        <strong>Total: ${totalAmount.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default ExpenseList;
