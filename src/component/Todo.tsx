import React from "react";

const Todo = ({task, todo, todos, setTodos}) => {

  const DeleteTask = () => {
    setTodos(todos.filter((index) => index.id !== todo.id))
  }
  const CompletedTask = () => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item
    }))
  }
  return (
    <div className="to-do">
      <input type="checkbox" checked={todo.complete} className="checkbox" onClick={CompletedTask} />
      <input type="text" className={`text ${todo.completed ? "checked" : ""}`} value={task} readOnly/>
      <button className="delete" onClick={DeleteTask}>delete</button>
    </div>
  )
}
export default Todo
