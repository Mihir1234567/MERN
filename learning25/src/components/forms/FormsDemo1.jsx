import React from "react";
import { useForm } from "react-hook-form";
import "../forms/Forms.css";
export const FormsDemo1 = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div class="form">
      <h1>Forms Demo 1</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="name">Name:- </label>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            {...register("name")}
          />
        </div>
        <div>
          <label htmlFor="age">Name:- </label>
          <input
            type="number"
            placeholder="Enter Your Age"
            {...register("age")}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
