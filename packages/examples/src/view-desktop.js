import React from 'react'

import { todos } from './data'

export const DesktopView = () => {
  return (
    <div>
      {
        todos.map(todo => (
          <div key={todo.id} className='desktop-mode'>
            {todo.title}
          </div>
        ))
      }
    </div>
  )
}