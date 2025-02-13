import React from "react";
import "../forms.css";

import { useForm } from "react-hook-form";

export const FormDemo4hw = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div class="form">
      <h1>Time Capsule Submission</h1>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
        <div>
          <br />
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            {...register("name")}
          />
          <br />
        </div>
        <div>
          <br />
          <label htmlFor="">Personal Message</label>
          <input
            class="message"
            type="text"
            placeholder="Write a letter to your future self...."
            {...register("message")}
          />
          <br />
        </div>
        <div>
          <br />
          <label htmlFor="">Pick a Date ("When you want to open this?")</label>
          <br />
          <input
            type="text"
            placeholder="Enter the date"
            {...register("date")}
          />
        </div>
        <div>
          <br />
          <label htmlFor="">Privacy Consent</label>
          <br />
          <input type="checkbox" value={"iagree"} {...register("agree")} /> I
          agree to store this securely until the chosen date
        </div>
        <div>
          <br />
          <input type="submit" />
          <br />
        </div>
      </form>
    </div>
  );
};
