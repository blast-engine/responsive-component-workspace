import React from 'react'

import { todos } from './todos'

export const DesktopView = () => {

  return (
    <div className='desktop-view'>
      {
        todos.map(todo => (
          <div key={todo.id} className='todo'>
            {todo.title}
          </div>
        ))
      }
    </div>
  )
}