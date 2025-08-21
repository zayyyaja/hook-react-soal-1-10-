import React, { useRef, useEffect } from "react";

export default function FormInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Form Input</h2>
      <input ref={inputRef} placeholder="Ketik sesuatu..." />
    </div>
  );
}
