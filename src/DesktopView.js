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
    <div className="desktop-list">
      {
        todos.map(todo => (
          <div className="desktop-list-element" key={todo.id} style={{ margin: '15px', width: '90%', height: '50px', display: 'flex', borderWidth: '2px', borderColor: 'black', borderRadius: '10px', borderStyle: 'solid', alignItems: 'center', justifyContent: 'center'}}>
            {todo.title}
          </div>
        ))
      }
    </div>
  )
}