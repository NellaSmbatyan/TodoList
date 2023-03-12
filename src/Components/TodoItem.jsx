import React from "react";
import { useState } from "react";
import { useTodoContext } from "../context/TodoProvider";

const TodoItem = () => {
  const { addTodo } = useTodoContext();
  const [item, setItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      return alert("Please enter a title");
    }
    addTodo(item);
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        type="text"
        className="field"
      />

      <button type="submit" className="addButton">
        Add
      </button>
    </form>
  );
};

export default TodoItem;
