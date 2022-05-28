import React from 'react'
import { ShowDetailsitems } from './ShowDetailsitems'
import "./showdetails.css"

export const TodoShowDetails = ({todos}) => {
  return (
    <div>

 <h2>Show Complete Todo</h2>
 <button onClick={()=>{
  let x= document.querySelector(".Mall")
  x.classList.toggle("active")
 }}>Show</button>
 <ul className="Mall">
      {todos.map((e,i)=>{
        return(
          
         
        <ShowDetailsitems key={e.id} tod={e}/>
    
        )
      })}
    </ul>
 

    </div>
  )
}
