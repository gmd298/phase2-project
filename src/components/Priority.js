import React from "react";


function Priority({todos}){

  
  return (
    <div>
      <ul>
        {todos.filter(todo => todo.priority === true).map(filteredTodos => (
          <li key={filteredTodos.priority}>{filteredTodos.input}</li>
        ))}
      </ul>
    </div>
  )
}

export default Priority;