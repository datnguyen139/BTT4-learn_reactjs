import Todolist from './Todolist';
export interface Todos {
  task: string
  completed: boolean
  id: number
  checked: boolean
}
export interface TodosForm {
  setInputValue: Function
  setTodos: Function
  todos: Todos[]
  inputValue: string
}
export interface TodosTodolist {
  todos: Todos[]
  setTodos: Function
  filterstatus: Todos[]
}
export interface TodosFilter {
  setStatus: Function
  todos: Todos[]
  setTodos: Function
}
export interface TodosTodo {
  task: string
  todo: Todos
  todos: Todos[]
  setTodos: Function
}
