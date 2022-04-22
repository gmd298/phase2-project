import React from "react";

function Todo({ todos, setTodos }){

  function handleClick() {
    todos.push(todos.completed = true)
  }

  return (
    <div>
      <p>Todo List</p>
      <ul>
        {todos.map(todo => {
          return(
            <li onDoubleClick={handleClick}>{todo.input}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default Todo;