import React from "react";
import "./Api.css";
import axios from "axios";
export const ApiPostDemo1 = () => {
  const postData = async () => {
    const user = {
      name: "raju",
      email: "raju@gmail.com",
      age: "555",
      isActive: true,
    };
    const res = await axios.post("https://node5.onrender.com/user/user", user);
    if (res.status == 201) {
      alert("Misson Succesful....");
    }
  };
  return (
    <div class="main-div">
      <h1>ApiPostDemo1</h1>
      <button onClick={postData}>POST DATA</button>
    </div>
  );
};
