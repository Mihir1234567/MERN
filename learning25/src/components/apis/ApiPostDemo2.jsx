import React from "react";
import "./Api.css";
import { useForm } from "react-hook-form";
import axios from "axios";

export const ApiPostDemo2 = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = async (data) => {
    console.log(data);
    const res = await axios.post("https://node5.onrender.com/user/user", data);
    res.status ? alert("Misson Succesful....") : "";
  };
  return (
    <div class="main-div">
      <h1>ApiPostDemo2</h1>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="">Enter Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label htmlFor="">Enter Email</label>
          <input type="text" {...register("email")} />
        </div>
        <div>
          <label htmlFor="">Enter Age</label>
          <input type="text" {...register("age")} />
        </div>
        <div>
          <label htmlFor="">Is Active</label>
          Active:
          <input type="radio" value={true} {...register("isActive")} />
          Not Active:
          <input type="radio" value={false} {...register("isActive")} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
