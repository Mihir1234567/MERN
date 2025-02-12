import React, { useState } from "react";

export const InputDemoHW2 = () => {
  const [form, setform] = useState({
    fname: "",
    lname: "",
    age: 0,
    gender: "",
    email: "",
  });
  const handler = (event) => {
    setform({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>InputDemoHW2</h1>
      <label htmlFor="fname">Enter your first name :-</label>
      <input type="text" name="fname" id="fname" onChange={handler} /> <br />
      <label htmlFor="lname">Enter your last name :-</label>
      <input type="text" name="lname" id="lname" onChange={handler} /> <br />
      <label htmlFor="age">Enter your age :-</label>
      <input type="number" name="age" id="age" onChange={handler} /> <br />
      <label htmlFor="gender">Enter your gender :-</label>
      <input type="text" name="gender" id="grnder" onChange={handler} /> <br />
      <label htmlFor="email">Enter your email :-</label>
      <input type="" name="email" id="email" onChange={handler} /> <br />
      <h2>
        Your name is: {form.fname} {form.lname}
      </h2>
      <h2>Your age is: {form.age}</h2>
      <h2>Your gender is: {form.gender}</h2>
      <h2>Your email is: {form.email}</h2>
      <br />
    </div>
  );
};
