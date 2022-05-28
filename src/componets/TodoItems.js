import React from 'react'
import "./TodoItems.css"

export const TodoItems = ({text,tod,todos,setTodos,done,hna}) => {

 const toggleStatus=(text)=>{
   let toggl=
    {
      ...tod,
      done:!done
    }
   
    hna(toggl,text)

   
   
   }
   
 
  
 
  

   


  const HandleDelete=()=>{
    let x=todos.filter(e=>(e.text!=text))

    setTodos(x)
    
    
  }
  return (

    tod.done?"":(
    <div className='Mallo2'>
    <li>
     <input type="checkbox" checked={done} onChange={toggleStatus}
    />
     <div>{text}</div>
    

    </li>
    <div>
    <button onClick={HandleDelete}>Delete</button>
    </div>
    </div>
    )
  )
}
