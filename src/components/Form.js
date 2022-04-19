import React, { useState } from 'react';

function Form({ onTodoSubmit }) {
  const [inputText, setInputText] = useState("")
  const [priority, setPriority] = useState(false)

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
        onChange={(event) => setInputText(event.target.value)}></input>
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