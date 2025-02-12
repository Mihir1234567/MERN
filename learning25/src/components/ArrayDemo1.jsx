import React from "react";

export const ArrayDemo1 = () => {
  var users = ["user1", "user2", "user3", "user4", "user5"];
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "blue", textAlign: "center" }}>DemoArray1</h1>
      {users.map((user) => {
        return <li>{user}</li>;
      })}
    </div>
  );
};
