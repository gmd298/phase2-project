import React, { useEffect } from 'react';
import "../index.css";
import Header from './Header';
import Button from './Button';
import Form from './Form';
import Navigation from './Navigation';
import Todo from './Todo';

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/todos")
    .then(response => response.json())
    .then(data => console.log(data))
  }, []);

  return (
    <div className='Main'>
      <Header />
      <Navigation />
      <Form />
      <Button />
      <Todo />
    </div>
  );
}

export default App;
