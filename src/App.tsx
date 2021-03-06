import './App.css';
import { useEffect } from 'react';
import {useState} from 'react';
import React from 'react';
import Form from './component/Form.tsx'
import Todolist from './component/Todolist.tsx';
import Filter from './component/Footer.tsx';

function App() {
  const [inputValue, setInputValue] = useState<string>("")
  const [status, setStatus] = useState("all")
  const [filterstatus, setFilterStatus] = useState([])
  const [edit, setEdit] = useState<string>("")
  const [todos, setTodos] = useState(() => {
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
        setFilterStatus(todos.filter((todo) => todo.completed === false))
        break
      case "completed":
        setFilterStatus(todos.filter((todo) => todo.completed === true))
        break
      default:
        setFilterStatus(todos)
    }
  }

  return (
    <div className='container'>
      <h1>TODOS</h1>
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        todos={todos}
        setTodos={setTodos}
      />
      <Todolist
        todos={todos}
        setTodos={setTodos}
        setEdit = {setEdit}
        filterstatus={filterstatus}
      />
      <Filter
        todos = {todos}
        setTodos = {setTodos}
        setStatus={setStatus}
      />
    </div>
  )
}

export default App;
