import React from 'react'

import { todos } from './todos'

export const MobileView = () => {

  return (
    <div className='mobile-view'>
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