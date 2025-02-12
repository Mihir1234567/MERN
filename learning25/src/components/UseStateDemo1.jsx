import React, { useState } from "react";

export const UseStateDemo1 = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Use State Demo 1</h1>
      <h1>{count}</h1>

      <button
        onClick={() => {
          increment();
        }}
      >
        Click
      </button>
    </div>
  );
};
