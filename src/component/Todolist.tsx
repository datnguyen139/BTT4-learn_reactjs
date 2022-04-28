import React from "react";
import Todo from "./Todo.tsx"

const Todolist = ({todos, setTodos, filterstatus}) => {
  return (
  <div className="middle">
    {filterstatus.map((todo) => (
    <Todo
      setTodos = {setTodos}
      todos = {todos}
      todo = {todo}
      task = {todo.task}
      key = {todo.id}
    />
    ))}
  </div>
  )
}

export default Todolist
