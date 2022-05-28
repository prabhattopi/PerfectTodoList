import React,{useState} from 'react'
import { TodoList } from "./TodoList";
import "./Todo.css"
import { TodoShowDetails } from './TodoShowDetails';
import {v4} from "uuid"

export const Todo = () => {

   
    const [change, setChange] = useState("")
    const [todos, setTodos] = useState([])


   
    const handleClick=()=>{
     
      let newTask=todos.find((todo)=>todo.text===change)
      if(!newTask && change){
      const newtaksk={
        id:v4(),
        text:change,
        done:false
        
      }
      setTodos([...todos,newtaksk])
      setChange("")
     
    }
    

  
 
   
    }


    const HandleUpdates=(updateTasks,text)=>{
      let newTasks=todos.reduce((acc,curr)=>{
        if(curr.id===updateTasks.id){
          acc.push(updateTasks)
        }
        else{
          acc.push(curr)
        }
       return acc
      },[])
      console.log(newTasks)
   
      setTodos([...newTasks])
      
}

  return (
    <>
    <div className='yoyo'>
        <h1>Todo List</h1>
        <div className="input">
            <input type="text" value={change} onChange={(e)=>{setChange(e.target.value)}}/>
            <button disabled={!change} onClick={handleClick}>Add</button>
        </div>
      <TodoList setTodos={setTodos} todos= {todos} hna={HandleUpdates}/>

      

    </div>
    <TodoShowDetails todos={todos}/>
    </>
  )
}
