import { useState } from 'react'
import './App.css'
import ExpenseList from './ExpenseList'
import ExpenseForm from './ExpenseForm'
import FilterBar from './FilterBar'




function App() {
  const [expenses, setExpenses] = useState(
    [
      {id : 1, name : "water", amount: 40, category: "Bills"},
      {id : 2, name : "Diner", amount: 30, category: "Food" },
    ]
  );
   const [filter, setFilter] = useState("All");

  
  
  
 

  function handleAdd(name, amount , category){
  
  const newExpense = {id: Date.now(), name : name, amount: amount, category: category};
  setExpenses([...expenses , newExpense]);
  
  
  }

  function handleDelete(id){
    setExpenses(expenses.filter( n => n.id !== id));
  }

    const visible = expenses.filter(e => {
    if(filter === "All") return true;
    return e.category === filter ;
  });

  const total = visible.reduce((sum,n) => sum + n.amount  , 0).toFixed(2);


  return (
    <div>
      
      <ExpenseForm onAdd={handleAdd}/>
      <FilterBar setFilter={setFilter}/>
      
      <ExpenseList visible={visible} onDelete={handleDelete}/>
      <p>Total: €{total}</p>
      
    </div>
  )
}

export default App
