import React from "react";
import "./Forms.css";
import { useForm } from "react-hook-form";
export const FormDemo5 = () => {
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
        message: "*Please Enter your name",
      },
    },
    refValidator: {
      required: {
        value: true,
        message: "*Please enter the ref code",
      },
      validate: (value) => {
        return value == "royal" || "Not a ref code";
      },
    },
  };
  return (
    <div class="form">
      <h1>FormDemo5</h1>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="">Name:-</label>
          <input
            type="text"
            placeholder="Enter name"
            {...register("name", validator.nameValidator)}
          />
          <span class="errormsg"> {errors.name?.message}</span>
        </div>

        <div>
          <label htmlFor="">Referal Code:-</label>
          <input
            type="text"
            placeholder="Enter Referal Code"
            {...register("ref", validator.refValidator)}
          />
          <span class="errormsg"> {errors.ref?.message}</span>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
