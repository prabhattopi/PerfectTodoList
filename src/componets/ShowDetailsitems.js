import React from 'react'
import { Todo } from './Todo'

export const ShowDetailsitems = ({tod}) => {
  return (
    tod.done?( <div>
        <li>
        <input type="checkbox" checked />
        
          {tod.text}
        </li>
    </div>):""
   
  )
}
