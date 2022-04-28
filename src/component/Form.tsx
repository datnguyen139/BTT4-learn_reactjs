import React from "react";

const Form = ({setInputValue, setTodos, todos, inputValue}) => {

  const inputHandler = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit= (event) => {
    if(event.key !== "Enter"||event.target.value ===""){
      return
    }
    event.preventDefault()

    setTodos([
      ...todos, {
        task: inputValue, completed: false, id: Math.random()*100
      }
    ])
    setInputValue("")
  }

  return (
    <div className="top">
      <button className="selectall">A</button>
      <input value={inputValue} onChange={inputHandler} onKeyUp={handleSubmit} type="text" className="newtask" />
    </div>
  )
}

export default Form
