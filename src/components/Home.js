import React from "react";
import Todo from "./Todo";
import Form from "./Form";

function Home({todos, onTodoSubmit}) {
  return (
    <div>
      <Form onTodoSubmit={onTodoSubmit}/>
      <Todo todos={todos} />
    </div>
  )
}

export default Home;