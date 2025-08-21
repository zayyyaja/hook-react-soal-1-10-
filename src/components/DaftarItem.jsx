import React, { useState, useCallback } from "react";

export default function DaftarItem() {
  const [items, setItems] = useState([]);

  const tambahItem = useCallback(() => {
    setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
  }, []);

  return (
    <div>
      <h2>Daftar Item</h2>
      <button onClick={tambahItem}>Tambah Item</button>
      <ul>
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
