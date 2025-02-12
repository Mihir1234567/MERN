import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo2 = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div class="form">
      <h1>FormDemo2</h1>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="">Enter your name:- </label>
          <input type="text" placeholder="Enter Name" {...register("name")} />
        </div>
        <div>
          <label htmlFor="">Enter your age:- </label>
          <input type="number" placeholder="Enter Age" {...register("age")} />
        </div>
        <div>
          <label htmlFor="">Enter your Budget:- </label>
          <input
            type="number"
            placeholder="Enter Budget"
            {...register("budget")}
          />
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
