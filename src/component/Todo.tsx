import React, {FC} from "react";
import { Todos, TodosTodo } from "./interface";

const Todo = ({task, todo, todos, setTodos}: TodosTodo) => {
  const EditTask = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.removeAttribute("readOnly")
  }
  const SaveEdit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      setTodos(todos.map((item: Todos) => {
        if(item.id === todo.id){
          return {
            ...item, task: e.currentTarget.value
          }
        }
        return item
      }))
      e.currentTarget.setAttribute("readOnly","readOnly")
  }
}

  const DeleteTask = () => {
    setTodos(todos.filter((index: Todos) => index.id !== todo.id))
  }

  const CompletedTask = (e: React.MouseEvent<HTMLInputElement>) => {
    setTodos(todos.map((item: Todos) => {
      if(item.id === todo.id) {
        e.currentTarget.setAttribute("checked","checked")
        return {
          ...item, completed: !item.completed, checked: !item.checked
        }
      }
      e.currentTarget.removeAttribute("checked")
      return item
    }))
  }

  return (
    <div className="to-do">
      <input type="checkbox" readOnly checked={todo.checked} className="checkbox" onClick={CompletedTask} />
      <input
          type="text"
          className={`text ${todo.completed ? "checked" : ""}`}
          defaultValue={task}
          readOnly
          onDoubleClick={EditTask}
          onKeyUp={SaveEdit}
        />
      <button className="delete" onClick={DeleteTask}><i className="fa-solid fa-xmark"></i></button>
    </div>
  )
}
export default Todo
