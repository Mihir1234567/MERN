import React from "react";

export const ArrayDemo2 = () => {
  var users = [
    { name: "ram", age: 20, marks: 50 },
    { name: "shyam", age: 25, marks: 55 },
    { name: "arjun", age: 27, marks: 60 },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red", textAlign: "center" }}>DemoArray2</h1>
      {users.map((user) => {
        return (
          <div>
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.marks}</li>
            <br />
          </div>
        );
      })}
    </div>
  );
};
