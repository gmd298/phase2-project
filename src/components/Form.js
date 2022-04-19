import React, { useState } from 'react';

function Form({ onTodoSubmit }) {
  const [input, setInput] = useState("")
  const [priority, setPriority] = useState(false)

  function handleSubmit(event) {
    event.preventDefault();
    onTodoSubmit({ input, priority });
    setInput("");
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
        value={input} 
        onChange={(event) => setInput(event.target.value)}></input>
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