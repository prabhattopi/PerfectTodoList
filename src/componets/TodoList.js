import React from 'react'
import { TodoItems } from './TodoItems'
import "./TodoItems.css"


export const TodoList = ({todos,setTodos,hna}) => {
  return (
    <>
    <ul className="Mallo">
      {todos.map((e,i)=>{
        return(
        <TodoItems tod={e} setTodos={setTodos} todos={todos} text={e.text} key={e.id} done={e.done} hna={hna}/>
        )
      })}
    </ul>

     
    </>
  )
}
