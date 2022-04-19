import React, { useState, useEffect } from 'react';
import "../index.css";
import Header from './Header';
import Form from './Form';
import Navigation from './Navigation';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([])

  const onTodoSubmit = (newTodo) => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newTodo)
    }

    fetch("http://localhost:3001/todos", configObj)
    .then(response => response.json())
    .then((createdTodo) => {
      setTodos((todos) => [...todos, createdTodo])
    })
  }

  useEffect(() => {
    fetch("http://localhost:3001/todos")
    .then(response => response.json())
    .then((data) => {
      setTodos(data)
    });
  }, []);

  return (
    <div className='Main'>
      <Header />
      <Navigation />
      <Form onTodoSubmit={onTodoSubmit}/>
      <Todo todos={todos}/>
    </div>
  );
}

export default App;
