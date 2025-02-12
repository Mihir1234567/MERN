import React, { useState } from "react";

export const InputDemoHW1 = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState(0);
  const [email, setemail] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  return (
    <div style={{ textAlign: "center" }}>
      <h1>InputDemoHW1</h1>
      <h1>Enter your name</h1>
      <br />
      <label htmlFor="name"></label>
      <input
        type="text"
        id="name"
        onChange={(event) => {
          setname(event.target.value);
        }}
      />
      <h2>Your name is: {name}</h2>
      <h1>Enter your number</h1>
      <br />
      <label htmlFor="num"></label>

      <input
        type="number"
        id="num"
        onChange={(event) => {
          setnumber(event.target.value);
        }}
      />
      <h2>Your number is: {number}</h2>
      <h1>Enter your email</h1>
      <br />
      <label htmlFor="email"></label>
      <input
        type="text"
        id="email"
        onChange={(event) => {
          setemail(event.target.value);
        }}
      />
      <h2>Your email is: {email}</h2>
      <h1>Enter picup location </h1>
      <br />
      <label htmlFor="from"></label>
      <input
        id="from"
        type="text"
        onChange={(event) => {
          setfrom(event.target.value);
        }}
      />
      <h2>You are going from : {from}</h2>
      <h1>Enter drop location </h1>
      <label htmlFor="to"></label>
      <input
        id="to"
        type="text"
        onChange={(event) => {
          setto(event.target.value);
        }}
      />
      <h2>You are going to: {to}</h2>
    </div>
  );
};
