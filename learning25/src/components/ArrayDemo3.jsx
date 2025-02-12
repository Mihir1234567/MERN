import React from "react";

export const ArrayDemo3 = () => {
  var employees = [
    { id: 1, name: "John", age: 30, salary: 25000, gender: "Male" },
    { id: 2, name: "Jane", age: 25, salary: 20000, gender: "Female" },
    { id: 3, name: "Mike", age: 35, salary: 12000, gender: "Male" },
    { id: 4, name: "Khushi", age: 35, salary: 15000, gender: "Female" },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Array Demo 3</h1>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>SALARY</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            return (
              <tr>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.salary}</td>
                <td>{emp.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
