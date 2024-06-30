import React, { useState, useEffect } from 'react';
import './AddExpenseForm.css';

const AddExpenseForm = ({ expenses, setExpenses, editingExpense, setEditingExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (editingExpense !== null) {
      const expense = expenses[editingExpense];
      setDescription(expense.description);
      setAmount(expense.amount);
      setCategory(expense.category);
      setFormValid(true);
    }
  }, [editingExpense, expenses]);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    validateForm();
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    validateForm();
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    validateForm();
  };

  const validateForm = () => {
    if (description && amount && category) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      const newExpenses = [...expenses];
      const expense = {
        description,
        amount: parseFloat(amount),
        category,
        date: new Date().toISOString(),
      };
      if (editingExpense !== null) {
        newExpenses[editingExpense] = expense;
        setEditingExpense(null);
      } else {
        newExpenses.push(expense);
      }
      setExpenses(newExpenses);
      clearForm();
    }
  };

  const clearForm = () => {
    setDescription('');
    setAmount('');
    setCategory('');
    setFormValid(false);
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          <option value="stationary">Stationary</option>
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
        </select>
      </div>
      <button type="submit" disabled={!formValid}>
        {editingExpense !== null ? 'Update Expense' : 'Add Expense'}
      </button>
    </form>
  );
};

export default AddExpenseForm;
