import React from "react";

const Form = ({setInputValue, setTodos, todos, inputValue}) => {

  const inputHandler = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit= (event) => {
    if(event.key !== "Enter"||event.target.value ===""){
      return
    }
    event.preventDefault()

    setTodos([
      ...todos, {
        task: inputValue,
        completed: false,
        id: Math.random()*100,
        checked: false
      }
    ])
    setInputValue("")
  }

  const CompletedAll = () => {
    const a = document.querySelectorAll(".checkbox")
    const newtodos = todos.filter((todo) => todo.completed !== false)
    if (newtodos.length === todos.length && newtodos.length !== 0) {
      a.forEach((index => {
        index.removeAttribute("checked")
      }))
      setTodos(todos.map((item) => {
        return {
          ...item, completed: false, checked: false
        }
      }))
    } else {
      a.forEach((index => {
        index.setAttribute("checked","checked")
      }))
      setTodos(todos.map((item) => {
        return {
          ...item, completed: true, checked: true
        }
      }))
    }
}

  return (
    <div className="top">
      <button onClick={CompletedAll} className="selectall"><i className="fa-solid fa-caret-down"></i></button>
      <input
            value={inputValue}
            placeholder="What need to be done ?"
            onChange={inputHandler}
            onKeyUp={handleSubmit}
            type="text"
            className="newtask"
      />
    </div>
  )
}

export default Form
