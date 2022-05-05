import React from "react";
import { Todos, TodosFilter } from "../interface/interface";

const Filter = ({setStatus, todos, setTodos, status}: TodosFilter) => {
  const filterStatus = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setStatus(e.currentTarget.className)
  }

  const ClearCompleted = () => {
    let newtodos = todos.filter((todo: Todos) => !todo.completed)
    setTodos(newtodos)
  }
  const count = todos.filter((todo: Todos) => !todo.completed)
  return (
    <div className="bottom">
      <span id="count">{count.length} item left</span>
      <ul className="ul">
        <li><a onClick={filterStatus} id={`${status === "all"? "pending":""}`} className="all" href="#/all">all</a></li>
        <li><a onClick={filterStatus} id={`${status === "active"? "pending":""}`} className="active" href="#/active">active</a></li>
        <li><a onClick={filterStatus} id={`${status === "completed"? "pending":""}`} className="completed" href="#/completed">completed</a></li>
      </ul>
      <button onClick={ClearCompleted} className="clearcompleted">Clear Completed</button>
    </div>
  )
}

export default Filter
