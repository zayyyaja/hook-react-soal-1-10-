import React, { useReducer, useState } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.text, done: false }];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

export default function TodoReducer() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");

  return (
    <div>
      <h2>Todo List</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          dispatch({ type: "ADD", text: input });
          setInput("");
        }}
      >
        Tambah
      </button>
      <ul>
        {todos.map((t) => (
          <li
            key={t.id}
            style={{ textDecoration: t.done ? "line-through" : "none" }}
          >
            {t.text}
            <button onClick={() => dispatch({ type: "TOGGLE", id: t.id })}>
              Done
            </button>
            <button onClick={() => dispatch({ type: "DELETE", id: t.id })}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
