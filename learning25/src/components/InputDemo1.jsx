import React, { useState } from "react";

export const InputDemo1 = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  return (
    <div style={{ textAlign: "center" }}>
      <h1>InputDemo1</h1>
      <label htmlFor="name">Enter your name</label>
      <br />
      <input
        id="name"
        type="text"
        onChange={(event) => setname(event.target.value)}
      />
      <br />
      <h2>Your name is: {name}</h2> <br />
      <label htmlFor="email">Enter your email</label> <br />
      <input
        id="email"
        type="text"
        onChange={(event) => {
          setemail(event.target.value);
        }}
      />
      <h2>Your email is: {email}</h2>
    </div>
  );
};
