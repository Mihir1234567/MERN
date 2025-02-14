import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo2 = () => {
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
        message: "*Minimum Length Should be 3 ",
      },
    },
    ageValidator: {
      required: {
        value: true,
        message: "*Please Enter Your Age",
      },
      min: {
        value: 18,
        message: "*Minimum age is 18",
      },
      max: {
        value: 60,
        message: "*Maximum age is 60",
      },
    },

    budgetValidator: {
      required: {
        value: true,
        message: "*Please Enter Your Budget",
      },
      min: {
        value: 1000,
        message: "*Minimum amount is 1000",
      },
    },
  };
  return (
    <div class="form">
      <h1>FormDemo2</h1>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="">Enter your name:- </label>
          <input
            type="text"
            placeholder="Enter Name"
            {...register("name", validator.nameValidator)}
          />
          <span class="errormsg">{errors.name?.message}</span>{" "}
        </div>
        <div>
          <label htmlFor="">Enter your age:- </label>
          <input
            type="number"
            placeholder="Enter Age"
            {...register("age", validator.ageValidator)}
          />
          <span class="errormsg">{errors.age?.message}</span>{" "}
        </div>
        <div>
          <label htmlFor="">Enter your Budget:- </label>
          <input
            type="number"
            placeholder="Enter Budget"
            {...register("budget", validator.budgetValidator)}
          />
          <span class="errormsg">{errors.budget?.message}</span>{" "}
        </div>
        <div>
          <label htmlFor="">Select Your Gender </label> <br />
          MALE: <input type="radio" value="male" {...register("gender")} />
          FEMALE: <input type="radio" value="female" {...register("gender")} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
