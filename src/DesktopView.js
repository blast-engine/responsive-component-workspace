import React from 'react';


export const DesktopView = () => {
  const todos = [
    {
      id: 1,
      title: 'do the dishes!'
    },
    {
      id: 2,
      title: 'make breakfast'
    }
  ]


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {
        todos.map(todo => (
          <div key={todo.id} style={{ margin: '15px', width: '90%', height: '50px', borderWidth: '2px', borderColor: 'black', borderRadius: '10px', borderStyle: 'solid', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {todo.title}
          </div>
        ))
      }
      
    </div>
  )
}