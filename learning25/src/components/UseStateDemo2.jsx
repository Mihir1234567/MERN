import React, { useState } from "react";

export const UseStateDemo2 = () => {
  const [isLoading, setisLoading] = useState(true);
  const stoploading = () => {
    setisLoading(false);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseStateDemo2</h1>
      <h1>{isLoading ? "Loading......" : ""}</h1>
      <button
        onClick={() => {
          stoploading();
        }}
      >
        Click
      </button>
    </div>
  );
};
