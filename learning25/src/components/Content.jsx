import React from "react";
import "../assets/content.css";
export const Content = () => {
  var name = "Mihir";
  var age = 21;
  var isActive = true;
  return (
    <div class="content">
      <h1>Hello World</h1>
      <h2>Name = {name}</h2>
      <h2>Age = {age}</h2>
      <h2>isActive ?</h2>
      <h2>Active = {isActive == true ? "Active" : "NotActive"}</h2>
    </div>
  );
};
