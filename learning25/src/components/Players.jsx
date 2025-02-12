import React from "react";

export const Players = () => {
  var players = [
    {
      id: 1,
      name: "player1",
      score: 350,
      gender: "male",
      age: 40,
      isActive: true,
    },
    {
      id: 2,
      name: "player2",
      score: 60,
      gender: "male",
      age: 23,
      isActive: true,
    },
    {
      id: 3,
      name: "player3",
      score: 200,
      gender: "female",
      age: 36,
      isActive: true,
    },
    {
      id: 4,
      name: "player4",
      score: 250,
      gender: "female",
      age: 37,
      isActive: false,
    },
    {
      id: 5,
      name: "player5",
      score: 70,
      gender: "male",
      age: 27,
      isActive: true,
    },
  ];
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Players Table</h1>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>SCORE</th>
            <th>GENDER</th>
            <th>AGE</th>
            <th>ISACTIVE</th>
          </tr>
        </thead>
        <tbody>
          {players.map((play) => {
            return (
              <tr>
                <td>{play.id}</td>
                <td>{play.name}</td>
                <td style={{ color: play.score > 100 ? "green" : "white" }}>
                  {play.score}
                </td>
                <td>{play.gender}</td>
                <td>
                  {play.age}
                  {play.age > 35 && play.isActive ? " (Please Retire)" : ""}
                </td>
                <td style={{ backgroundColor: play.isActive ? "" : "yellow" }}>
                  {play.isActive ? "IS ACTIVE" : "IS NOT ACTIVE"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
