import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Api.css";

export const ApiDemo1 = () => {
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);
  const getUserData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res);
    console.log(res.data);
    console.log(res.data.message);
    setmessage(res.data.message);
    setusers(res.data.data);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div class="main-div ">
      <h1>ApiDemo1</h1>
      {/* <button class="btn btn-primary" onClick={getUserData}>
        Get
      </button> */}
      <h2>{message}</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">AGE</th>
            <th scope="col">ACTIVE</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <th>{user._id}</th>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>{user.age}</th>
                <th>{user.isActive ? "Active" : "Not Active"}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
