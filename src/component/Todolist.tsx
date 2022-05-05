import React from "react";
import Todo from "./Todo";
import { TodoList, Todos } from "../interface/interface";

const Todolist = ({todos, setTodos, filterstatus}: TodoList) => {
  return (
  <div className="middle">
    {filterstatus.map((todo: Todos) => (
    <Todo
      setTodos={setTodos}
      todos={todos}
      todo={todo}
      task={todo.task}
      key={todo.id}
    />
    ))}
  </div>
  )
}

export default Todolist
