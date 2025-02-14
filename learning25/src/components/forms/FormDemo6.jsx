import React, { useState } from "react";
import "./Forms.css";
import { useForm } from "react-hook-form";

export const FormDemo6 = () => {
  const { register, handleSubmit } = useForm();
  const [output, setOutput] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitHandler = (data) => {
    console.log(data);
    setOutput(data);
    setIsSubmitted(true);
  };
  return (
    <div class="form">
      <h1>FormDemo6</h1>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="">Enter Your Name:-</label>
          <input type="text" placeholder="Enter Name" {...register("name")} />
        </div>
        <div>
          <label htmlFor="">Enter Your Age:-</label>
          <input type="text" placeholder="Enter Age" {...register("age")} />
        </div>
        <div>
          <label htmlFor="">color</label>
          <input type="color" {...register("color")} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      {isSubmitted == true ? (
        <div style={{ color: output?.color }}>
          <h1>{output?.name}</h1>
          <h2>{output?.age}</h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
