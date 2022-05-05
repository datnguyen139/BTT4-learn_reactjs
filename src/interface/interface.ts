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
export interface TodoList {
  todos: Todos[]
  setTodos: Function
  filterstatus: Todos[]
}
export interface TodosFilter {
  setStatus: Function
  todos: Todos[]
  status: string
  setTodos: Function
}
export interface TodoItem {
  task: string
  todo: Todos
  todos: Todos[]
  setTodos: Function
}
