//* ///////////////////////////////////////////////////////////////////////////
//* TodoListContext
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import { createContext, ReactNode, useState, useContext, useEffect } from 'react';
import { ITodo } from '../../models';
import { generateId } from '../../utilities';
//* ===========================================================================

//* ===========================================================================
//* 2.- Models / Interfaces
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 2.1.- ITodoListContextValues
//* ---------------------------------------------------------------------------
interface ITodoListContextValues {
 todos: ITodo[];
 setTodos: (value: React.SetStateAction<ITodo[]>) => void;
 todoEdit: ITodo | null;
 setTodoEdit: (value: React.SetStateAction<ITodo | null>) => void;
 addTodo: (form: ITodo) => void;
 updateTodo: (form: ITodo) => void;
 deleteTodo: (todoId: string) => void;
 complitedToggleTodo: (todoId: string) => void;
}
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 2.2.- ITodoListProviderProps
//* ---------------------------------------------------------------------------
interface ITodoListProviderProps {
 children: ReactNode;
}
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* Validations to know if they exist "Todos" in LocalStaorage
//* True: Todos of LocalStorage / False: []
//* ===========================================================================
const localStorageTodos = localStorage.getItem('todos');
let initialTodosState: ITodo[];

if (localStorageTodos !== null) {
 initialTodosState = JSON.parse(localStorageTodos);
} else {
 localStorage.setItem('todos', JSON.stringify([]));
}
//* ===========================================================================

//* ===========================================================================
//* 3.- Create the context
//* ===========================================================================
const TodoListContext = createContext<ITodoListContextValues | undefined>(undefined);
//* ===========================================================================

//* ===========================================================================
//* 4.- Create the Provider
//* ===========================================================================
const TodoListProvider = ({ children }: ITodoListProviderProps) => {
 const [todos, setTodos] = useState<ITodo[] | []>(initialTodosState);
 const [todoEdit, setTodoEdit] = useState<ITodo | null>(null);

 useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
 }, [todos]);

 const addTodo = (form: ITodo) => {
  const newTodo = {
   ...form,
   id: generateId()
  };

  setTodos([newTodo, ...todos]);
 };

 const updateTodo = (form: ITodo) => {
  if (todoEdit && form.id === todoEdit?.id) {
   setTodoEdit(null);
  }

  const newTodos = todos.map((todo: ITodo) => (todo.id === form.id ? form : todo));
  setTodos(newTodos);
 };

 const deleteTodo = (todoId: string) => {
  if (todoEdit && todoId === todoEdit?.id) {
   setTodoEdit(null);
  }

  const newTodos = todos.filter(todo => todo.id !== todoId);
  setTodos(newTodos);
 };

 const complitedToggleTodo = (todoId: string) => {
  const newTodos = todos.map((todo: ITodo) =>
   todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
  );
  setTodos(newTodos);
 };

 const data: ITodoListContextValues = {
  todos,
  setTodos,
  todoEdit,
  setTodoEdit,
  addTodo,
  updateTodo,
  deleteTodo,
  complitedToggleTodo
 };

 return <TodoListContext.Provider value={data}>{children}</TodoListContext.Provider>;
};
//* ===========================================================================

//* ===========================================================================
//* 5.- Create useTodoListContext
//* ===========================================================================
const useTodoListContext = () => {
 const context = useContext(TodoListContext);

 if (context === undefined) {
  throw Error(
   '"useTodoListContext", must be used within a "TodoListProvider" - "useTodoListContext", debe usarse dentro de un "TodoListProvider"'
  );
 }

 return context;
};
//* ===========================================================================

//* ===========================================================================
//* 6.- Export
//* ===========================================================================
export { TodoListProvider, useTodoListContext };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
