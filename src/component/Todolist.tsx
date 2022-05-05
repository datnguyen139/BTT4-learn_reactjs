import React from "react";
import Todo from "./Todo";
import { TodosTodolist, Todos } from "../interface/interface";

const Todolist = ({todos, setTodos, filterstatus}: TodosTodolist) => {
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
