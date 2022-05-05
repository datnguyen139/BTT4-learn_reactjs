import React from "react";
import { Todos } from "../interface/interface";
import { TodosForm } from "../interface/interface";

const FormSubmit = ({setInputValue, setTodos, todos, inputValue}: TodosForm) => {

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit= (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter"|| inputValue === "") return

    event.preventDefault()

    let todo = {
      task: inputValue,
      completed: false,
      id: Math.random()*100,
      checked: false
    }
    todos.push(todo)
    setTodos(todos)
    setInputValue("")
  }

  const CompletedAll = () => {
    const newtodos = todos.filter((todo: Todos) => todo.completed !== false)
    if (newtodos.length && newtodos.length === todos.length) {
      setTodos(todos.map((item: Todos) => {
        return {
          ...item, completed: false, checked: false
        }
      }))
    } else {
      setTodos(todos.map((item: Todos) => {
        return {
          ...item, completed: true, checked: true
        }
      }))
    }
}

  return (
    <div className="top">
      <button onClick={CompletedAll}
            className={`select ${todos.length? "all" : ""}`}>
            <i className="fa-solid fa-circle-chevron-down"></i>
      </button>
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

export default FormSubmit
