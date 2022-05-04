import React from "react";
import { Todos } from "./interface";
import { TodosForm } from "./interface";

const Form = ({setInputValue, setTodos, todos, inputValue}: TodosForm) => {

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit= (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key !== "Enter"|| inputValue === ""){
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
    const newtodos = todos.filter((todo: Todos) => todo.completed !== false)
    if (newtodos.length === todos.length && newtodos.length !== 0) {
      a.forEach((index => {
        index.removeAttribute("checked")
      }))
      setTodos(todos.map((item: Todos) => {
        return {
          ...item, completed: false, checked: false
        }
      }))
    } else {
      a.forEach((index => {
        index.setAttribute("checked","checked")
      }))
      setTodos(todos.map((item: Todos) => {
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
