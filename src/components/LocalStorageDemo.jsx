import React from "react";
import useLocalStorage from "./useLocalStorage";

export default function LocalStorageDemo() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div>
      <h2>Nama: {name}</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ketik nama..."
      />
    </div>
  );
}
