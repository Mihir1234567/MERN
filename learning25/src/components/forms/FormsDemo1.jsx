import React from "react";
import { useForm } from "react-hook-form";
import "../forms/Forms.css";
import { Link } from "react-router-dom";

export const FormsDemo1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  const validator = {
    nameValidator: {
      required: {
        value: true,
        message: "*Please Enter Your Name",
      },
      minLength: {
        value: 3,
        message: "*Minimum length shoud be 3",
      },
    },
    ageValidator: {
      required: {
        value: true,
        message: "*Please Enter Your Age",
      },
      min: {
        value: 18,
        message: "*Minimum age 18",
      },
      max: {
        value: 60,
        message: "*Maximum age is 60",
      },
    },
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
            {...register("name", validator.nameValidator)}
          />
          <span class="errormsg">{errors.name?.message}</span>
        </div>
        <div>
          <label htmlFor="age">Name:- </label>
          <input
            type="number"
            placeholder="Enter Your Age"
            {...register("age", validator.ageValidator)}
          />
          <span class="errormsg">{errors.age?.message}</span>
        </div>
        <div>
          <input type="submit" />
          <br />
        </div>
        <div>
          <button class="btn ">
            <Link to="/formdemos">Previous Form Demo</Link>
          </button>
          <button class="btn ">
            <Link to="/formdemos">All Forms Demo</Link>
          </button>
          <button class="btn ">
            <Link to="/formdemo2">Next Form Demo</Link>
          </button>
        </div>
      </form>
    </div>
  );
};
