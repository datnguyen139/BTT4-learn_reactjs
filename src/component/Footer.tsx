import React from "react";
import { Todos, TodosFilter } from "./interface";

const Filter = ({setStatus, todos, setTodos}: TodosFilter) => {
  const filterStatus = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setStatus(e.currentTarget.className)
  }

  const ClearCompleted = () => {
    let todos2 = todos.filter((todo: Todos) => todo.completed === false)
    setTodos(todos2)
  }
  const count = todos.filter((todo: Todos) => todo.completed === false)

  return (
    <div className="bottom">
      <span id="count">{count.length} item left</span>
      <ul className="ul">
        <li><a onClick={filterStatus} className="all" href="#/all">all</a></li>
        <li><a onClick={filterStatus} className="active" href="#/active">active</a></li>
        <li><a onClick={filterStatus} className="completed" href="#/completed">completed</a></li>
      </ul>
      <button onClick={ClearCompleted} className="clearcompleted">Clear Completed</button>
    </div>
  )
}

export default Filter
