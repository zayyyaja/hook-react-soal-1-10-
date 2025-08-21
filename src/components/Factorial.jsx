import React, { useState, useMemo } from "react";

function factorial(n) {
  console.log("Hitung factorial...");
  if (n <= 0) return 1;
  return n * factorial(n - 1);
}

export default function Factorial() {
  const [number, setNumber] = useState(5);
  const [text, setText] = useState("");

  const result = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <h2>Factorial</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Hasil: {result}</p>
      <input
        placeholder="Input lain..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
