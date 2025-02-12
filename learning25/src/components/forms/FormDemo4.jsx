import React from "react";
import "../forms/forms.css";
import { useForm } from "react-hook-form";
import { data } from "react-router-dom";

export const FormDemo4 = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div class="form">
      <h1>FormDemo4</h1>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="">Food Name</label>
          <input type="text" placeholder="Foodname" {...register("name")} />
        </div>
        <div>
          <label htmlFor="">Food Preferance</label> <br />
          VEG: <input type="radio" value="veg" {...register("fpref")} />
          NON-VEG: <input type="radio" value="non-veg" {...register("fpref")} />
        </div>
        <div>
          <label htmlFor="">Toppings</label>
          cheese{" "}
          <input type="checkbox" value="cheese" {...register("toping")} />
          onion <input type="checkbox" value="onion" {...register("toping")} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
