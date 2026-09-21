import { useState } from 'react'
import './App.css'

const CATEGORIES = ["Food", "Transport", "Bills", "Shopping", "Fun", "Health"];

function App() {
  const [expenses, setExpenses] = useState(
    [
      {id : 1, name : "water", amount: 40, category: "Bills"},
      {id : 2, name : "Diner", amount: 30, category: "Food" },
    ]
  )

  return (
    <div>
      <ul>
        {
          expenses.map(expense => <li key={expense.id}>
            {expense.name} - €{expense.amount.toFixed(2)} - {expense.category}
          </li>)
        }
      </ul>
    </div>
  )
}

export default App
