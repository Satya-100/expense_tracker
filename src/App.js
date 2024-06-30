import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AddExpenseForm from './AddExpenseForm';
import ExpenseList from './ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className="content">
        <AddExpenseForm
          expenses={expenses}
          setExpenses={setExpenses}
          editingExpense={editingExpense}
          setEditingExpense={setEditingExpense}
        />
        <ExpenseList
          expenses={expenses}
          setExpenses={setExpenses}
          setEditingExpense={setEditingExpense}
        />
      </div>
    </div>
  );
}

export default App;
