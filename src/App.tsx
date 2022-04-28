import './App.css';
import { useEffect } from 'react';
import {useState} from 'react';
import React from 'react';
import Form from './component/Form.tsx'
import Todolist from './component/Todolist.tsx';
import Filter from './component/Footer.tsx';

function App() {
  const [inputValue, setInputValue] = useState<string>("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState<string>("all")
  const [filterstatus, setFilterStatus] = useState<object>([])

  useEffect(() => {
    getlocalstorage()
  })

  useEffect(() => {
    FilterStatus()
    savetolocal()
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

  const savetolocal = () => {
      localStorage.setItem("listTodo", JSON.stringify(todos))
  }
  const getlocalstorage = () => {
    if(localStorage.getItem("listTodo") === null) {
      localStorage.setItem("listTodo",JSON.stringify([]))
    } else {
      let todolocal = JSON.parse(localStorage.getItem("listTodo"))
      setTodos(todolocal)
    }
  }
  return (
    <div className='container'>
      <h1>TODOS</h1>
      <Form
        setInputValue={setInputValue}
        todos={todos}
        setTodos={setTodos}
        inputValue={inputValue}
      />
      <Todolist
        todos={todos}
        setTodos={setTodos}
        filterstatus={filterstatus}
      />
      <Filter
        setStatus={setStatus}
      />
    </div>
  )
}

export default App;
