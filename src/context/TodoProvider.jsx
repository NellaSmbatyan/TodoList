import React, { useContext } from "react";
import { createContext, useState } from "react"

const TodoContext = createContext();
export const useTodoContext = () => useContext(TodoContext);

export function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  const deleteTodo = (el) => {
    const filtered = todoList.filter((_, i) => i !== el);
    setTodoList(filtered);
  };

  const contextValue = {
    todoList,
    addTodo,
    deleteTodo,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
}

