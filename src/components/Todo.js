import React from "react";

function Todo({ todos }){
  return (
    <div>
      <p>Todo List</p>
      <ul>
        {todos.map(todo => {
          return(
            <li>{todo.input}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default Todo;