import React from "react";


function Priority({todos, setPriorityTodos}){


    const filtered = todos.filter((todo) => {
      return todo.priority.includes(true) 
    })
    setPriorityTodos(filtered)


  // function filterByPri() {
  //   const filtered = todos.filter((todo) => {
  //     return todo.input
  //   })
  // }
  // useEffect(() => {
  //   fetch("http://localhost:3001/todos")
  //   .then(response => response.json())
  //   .then((data) => {
  //     setTodos(data)
  //   });
  // }, []);



  return (
    <div>
        <ul>
          <li>{todos.input}</li>
        </ul>
    </div>
  )
}

export default Priority;