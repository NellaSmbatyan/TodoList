import "./App.css";
import React from "react";
import TodoItem from "./Components/TodoItem";
import TodoList from "./Components/TodoList";
import { TodoProvider } from "./context/TodoProvider";

function App() {
  return (
    <div className="allDiv">
      <h1 className="header">TODO LIST</h1>
      <TodoProvider>
        <TodoItem />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
