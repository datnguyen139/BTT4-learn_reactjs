import { useEffect } from "react";
import {useState} from "react";
import React from "react";
import Todolist from "./Todolist";
import Filter from "./Footer";
import { Todos } from "../interface/interface";
import FormSubmit from "./Form";


const Data = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [status, setStatus] = useState<string>("all")
  const [filterstatus, setFilterStatus] = useState<Todos[]>([])
  const [todos, setTodos] = useState<Todos[]>(() => {
    const savedTodos = localStorage.getItem("listTodo");
      if (savedTodos) {
        return JSON.parse(savedTodos);
      } else {
        return [];
      }
    })
  useEffect(() => {
    localStorage.setItem("listTodo", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    FilterStatus()
  }, [todos, status])

  const FilterStatus = () => {
    switch(status) {
      case "active":
        setFilterStatus(todos.filter((todo) => !todo.completed))
        break
      case "completed":
        setFilterStatus(todos.filter((todo) => todo.completed))
        break
      default:
        setFilterStatus(todos)
    }
  }

  return (
    <div className="container">
      <h1>TODOS</h1>
      <FormSubmit
        inputValue={inputValue}
        setInputValue={setInputValue}
        todos={todos}
        setTodos={setTodos}
      />
      <Todolist
        todos={todos}
        setTodos={setTodos}
        filterstatus={filterstatus}
      />
      <Filter
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
    </div>
  )
}

export default Data;
