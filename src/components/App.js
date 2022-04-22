import React, { useState, useEffect } from 'react';
import "../index.css";
import Header from './Header';
import Navigation from './Navigation';
import Priority from './Priority';
import Completed from './Completed';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  const [todos, setTodos] = useState([])
  const [priorityTodos, setPriorityTodos] = useState("")

  const [page, setPage] = useState("/")

  useEffect(() => {
    fetch("http://localhost:3001/todos")
    .then(response => response.json())
    .then((data) => {
      setTodos(data)
      setPriorityTodos(data)
    });
  }, []);

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

  return (
    <Router>
      <div className='Main'>
        <Header />
        <Navigation onChangePage={setPage} />
        <Switch>
          <Route path="/priority">
            <Priority todos={priorityTodos} setPriorityTodos={setPriorityTodos}/>
          </Route>
          <Route path="/completed">
            <Completed />
          </Route>
          <Route exact path="/">
            <Home todos={todos} onTodoSubmit={onTodoSubmit}/>
          </Route>
          <Route path='*'>
            <h1>404 not found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
