import React from "react";

const Filter = ({setStatus}) => {
  const filterStatus = (e) => {
    setStatus(e.target.className)
  }
  return (
    <div className="bottom">
      <span id="count"><strong>0</strong> item left</span>
      <ul className="ul">
        <li><a onClick={filterStatus} className="all" href="#/all">all</a></li>
        <li><a onClick={filterStatus} className="active" href="#/active">active</a></li>
        <li><a onClick={filterStatus} className="completed" href="#/completed">completed</a></li>
      </ul>
      <button className="clearcompleted">clear completed</button>
    </div>
  )
}

export default Filter
