import React, { useRef, forwardRef, useImperativeHandle } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} {...props} />;
});

export default function Parent() {
  const inputRef = useRef();

  return (
    <div>
      <h2>Custom Input</h2>
      <CustomInput ref={inputRef} placeholder="Klik tombol untuk fokus" />
      <button onClick={() => inputRef.current.focus()}>Fokus</button>
    </div>
  );
}
