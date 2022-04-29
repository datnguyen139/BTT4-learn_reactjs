import React from "react";

const Todo = ({task, todo, todos, setTodos}) => {
  const EditTask = (e) => {
    e.target.removeAttribute("readOnly")
  }
  const SaveEdit = (e) => {
    if(e.key === "Enter"){
      console.log(e.target.value)
      setTodos(todos.map((item) => {
        if(item.id === todo.id){
          return {
            ...item, task: e.target.value
          }
        }
        return item
      }))
      e.target.setAttribute("readOnly","readOnly")
  }
}

  const DeleteTask = () => {
    setTodos(todos.filter((index) => index.id !== todo.id))
  }

  const CompletedTask = (e) => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id) {
        e.target.setAttribute("checked","checked")
        return {
          ...item, completed: !item.completed, checked: !item.checked
        }
      }
      e.target.removeAttribute("checked")
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
