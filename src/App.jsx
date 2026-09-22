import { useState } from 'react'
import './App.css'

const CATEGORIES = ["Food", "Transport", "Bills", "Shopping", "Fun", "Health"];

function App() {
  const [expenses, setExpenses] = useState(
    [
      {id : 1, name : "water", amount: 40, category: "Bills"},
      {id : 2, name : "Diner", amount: 30, category: "Food" },
    ]
  );

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [categories, setCategories] = useState("Food");
  const [error, setError] = useState("");

  function handleAdd(){
  const numb = Number(amount);
  if(name.trim() === "" || amount === ""){
    setError("Name or Amount is empty");
    return;
  }
  if(Number.isNaN(numb) || numb <= 0){
    setError("Please give an amount");
    return;
  }
  const newExpense = {id: Date.now(), name : name, amount: numb, category: categories};
  setExpenses([...expenses , newExpense]);
  setName("");
  setAmount("");
  setError("");
  setCategories("Food");
  }

  function handleDelete(id){
    setExpenses(expenses.filter( n => n.id !== id));
  }

  return (
    <div>
      <input value={name} placeholder="name" onChange={e => setName(e.target.value)}/>
      <input type="number" value={amount} placeholder="amount" onChange={e => setAmount(e.target.value)}/>
      <select value={categories} onChange={e => setCategories(e.target.value)}>
          {CATEGORIES.map(category => <option key={category} value={category}>{category}</option>)}
      </select>
      
      {error !== "" && <span>{error}</span>}
      <button onClick={handleAdd} >Add</button>
      <ul>
        {
          expenses.map(expense => <li key={expense.id}>
            {expense.name} - €{expense.amount.toFixed(2)} - {expense.category}
            <button onClick={() => handleDelete(expense.id)}>Delete</button>
          </li>)
        }
      </ul>
    </div>
  )
}

export default App
