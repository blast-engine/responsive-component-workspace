import React from 'react';

export const DesktopView = () => {
  const todos = [
    {
      id: 1,
      title: 'do the dishes'
    },
    {
      id: 2,
      title: 'do homework'
    },
    {
      id: 3,
      title: 'go for a walk'
    }, 
    {
      id: 4,
      title: 'do jumping jacks'
    },
    {
      id: 5,
      title: 'cook dinner'
    },
    {
      id: 6,
      title: 'sleep early'
    }
  ]

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