import { CATEGORIES } from './categories';
import { useState } from 'react'
import './App.css'

function ExpenseForm({onAdd}) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");
    const [categories, setCategories] = useState("Food");
    function handleSubmit(){
        
        const numb = Number(amount);
        if(name.trim() === "" || amount === ""){
        setError("Name or Amount is empty");
        return;
        }
        if(Number.isNaN(numb) || numb <= 0){
        setError("Please give an amount");
        return;
        }
        onAdd(name , numb, categories);
        setName("");
        setAmount("");
        setError("");
        setCategories("Food");

    }
    return(
        <>
      <input value={name} placeholder="name" onChange={e => setName(e.target.value)}/>
      <input type="number" value={amount} placeholder="amount" onChange={e => setAmount(e.target.value)}/>
      <select value={categories} onChange={e => setCategories(e.target.value)}>
          {CATEGORIES.map(category => <option key={category} value={category}>{category}</option>)}
      </select>
      {error !== "" && <span>{error}</span>}
      <button onClick={handleSubmit} >Add</button>
      </>
    )
       
    
}

export default ExpenseForm;