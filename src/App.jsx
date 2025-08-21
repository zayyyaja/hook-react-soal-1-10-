import React from "react";
import Counter from "./components/Counter";
import FetchUsers from "./components/FetchUsers";
import FormInput from "./components/FormInput";
import Factorial from "./components/Factorial";
import DaftarItem from "./components/DaftarItem";
import TodoReducer from "./components/TodoReducer";
import ThemeProvider from "./components/ThemeContext";
import ScrollPosition from "./components/ScrollPosition";
import Parent from "./components/CustomInput";
import LocalStorageDemo from "./components/LocalStorageDemo";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Hooks Demo</h1>

      <Counter />
      <hr />

      <FetchUsers />
      <hr />

      <FormInput />
      <hr />

      <Factorial />
      <hr />

      <DaftarItem />
      <hr />

      <TodoReducer />
      <hr />

      <ThemeProvider />
      <hr />

      <ScrollPosition />
      <div style={{ height: "1000px" }} /> {/* biar bisa di-scroll */}
      <hr />

      <Parent />
      <hr />

      <LocalStorageDemo />
    </div>
  );
}
