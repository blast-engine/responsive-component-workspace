import React from 'react'

import { todos } from './data'

export const MobileView = () => {
  return (
    <div>
      {
        todos.map(todo => (
          <div key={todo.id} className="mobile-mode">
            {todo.title}
          </div>
        ))
      }
      
    </div>
  )
}