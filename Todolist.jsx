import React,{useState,useEffect} from 'react'

function Todolist() {
   const [todo,setTodo]=useState('');
   const [value,setValue]=useState([]);
   
   const todotype=(e)=>setTodo(e.target.value)
   const updateTodo=()=>{
       if (todo.trim()!==''){
        setValue([...value,todo]);
        setTodo('')

       }
       
   }

  return (
    <div>
        <h1>To-Do List</h1>
        <input type='text' value={todo} 
        onChange={todotype}/>
        <button onClick={updateTodo}>
            Add
        </button>
        <ul>
          {value.map((item,index)=><li key={index}>{item}</li>)}
        </ul>
    </div>
  )
}

export default Todolist