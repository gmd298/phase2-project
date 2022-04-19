import React, { useState } from 'react';

function Form({ onTodoSubmit }) {
  const [inputText, setInputText] = useState("")
  const [priority, setPriority] = useState(false)
  // onSubmit(event) => // grab input values from state, make object, pass to onTodoSubmit

  function handleSubmit(event) {
    event.preventDefault();
    onTodoSubmit({ inputText, priority });
    setInputText("");
    setPriority(false);
  }

  const handleOnChange = () => {
    setPriority(!priority)
  }

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputText} 
        onChange={(event) => setInputText(event.target.value)}></input> { /* give input name, make it controlled, add input for priority, make it controlled */ }
      <input 
        type="checkbox" 
        checked={priority} 
        onChange={handleOnChange}></input>
      <label>Priority</label>
      <br></br>
      <button className='Button' type='submit'>Submit</button>
    </form>
  </div>
  )
}

export default Form;