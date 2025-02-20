import React from "react";
import { useForm } from "react-hook-form";
import "../forms/forms.css";
export const FormDemo3 = () => {
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
        message: "*Please enter this field",
      },
    },
  };
  return (
    <div class="form">
      <h1>FormDemo3</h1>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="">Name:- </label>
          <input
            type="text"
            placeholder="Name"
            {...register("name", validator.nameValidator)}
          />
          <span class="errormsg">{errors.name?.message}</span>{" "}
        </div>
        <div>
          <label htmlFor="">Transport:- </label>
          Bus: <input type="radio" value="bus" {...register("transport")} />
          Train: <input type="radio" value="train" {...register("transport")} />
          Flight:{" "}
          <input type="radio" value="flight" {...register("transport")} />
        </div>
        <div>
          <label htmlFor="">Select your city:-</label>
          <select {...register("city")}>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="mumbai">Mumbai</option>
            <option value="pune">Pune</option>
          </select>
        </div>
        <div>
          <label htmlFor="">choice</label>
          20km <input type="checkbox" value="20km" {...register("choice")} />
          will return{" "}
          <input type="checkbox" value="will return" {...register("choice")} />
          swimming{" "}
          <input type="checkbox" value="swimming" {...register("choice")} />
        </div>
        <div>
          <input type="submit" />
          <br />
        </div>
        <div>
          <button class="btn ">
            <Link to="/formdemo1">Previous Form Demo</Link>
          </button>
          <button class="btn ">
            <Link to="/formdemos">All Forms Demo</Link>
          </button>
          <button class="btn ">
            <Link to="/formdemo3">Next Form Demo</Link>
          </button>
        </div>
      </form>
    </div>
  );
};
