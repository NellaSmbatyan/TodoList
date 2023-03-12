import React, { useState } from "react";

import { useTodoContext } from "../context/TodoProvider";

const TodoList = () => {
  const { todoList, deleteTodo } = useTodoContext();

  return (
    <div className="todo">
      {todoList && todoList.length ? "" : "No Todos"}
      {todoList.map((todo, index) => (
        <div className="todoItem" key={index}>
          <input type="checkbox" className="checkBox" />
          {todo}

          <div>
            <button className="deleteButton" onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
