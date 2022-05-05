import React, { useRef } from "react";
import { Todos, TodosTodo } from "../interface/interface";

const Todo = ({task, todo, todos, setTodos}: TodosTodo) => {
  const editTask = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.removeAttribute("readOnly")
  }

  const saveEdit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter"){
      if(e.currentTarget.value.trim() === "") {
        alert("please fill in the task")
        return
      } else {
          let newtodos = todos.map((item: Todos) => {
          if(item.id === todo.id){
            return {
              ...item, task: e.currentTarget.value
            }
          }
          return item
      })
      setTodos(newtodos)
      e.currentTarget.setAttribute("readOnly","readOnly")
    }
  }
}

  const deleteTask = () => {
    setTodos(todos.filter((index: Todos) => index.id !== todo.id))
  }

  const completedTask = (e: React.MouseEvent<HTMLInputElement>) => {
    let newtodos = todos.map((item: Todos) => {
      if (item.id === todo.id) {
        e.currentTarget.setAttribute("checked","checked")
        return {
          ...item, completed: !item.completed, checked: !item.checked
        }
      }
      e.currentTarget.removeAttribute("checked")
      return item
    })
    setTodos(newtodos)
  }

  return (
    <div className="to-do">
      <input type="checkbox" readOnly checked={todo.checked} className="checkbox" onClick={completedTask} />
      <input
          type="text"
          className={`text ${todo.completed ? "checked" : ""}`}
          defaultValue={task}
          readOnly
          onDoubleClick={editTask}
          onKeyUp={saveEdit}
        />
      <button className="delete" onClick={deleteTask}><i className="fa-solid fa-xmark"></i></button>
    </div>
  )
}
export default Todo
