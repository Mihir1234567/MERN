import React from "react";
import "../forms.css";

import { useForm } from "react-hook-form";

export const FormDemo3hw = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div class="form">
      <h1>Personal Superpower Quiz</h1>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
        <div>
          <br />
          <label htmlFor="">Personality Traits</label>
          <br />
          Empathetic{" "}
          <input type="checkbox" value={"Empathetic"} {...register("trait")} />
          Analytical{" "}
          <input type="checkbox" value={"Analytical"} {...register("trait")} />
          Adventurous{" "}
          <input type="checkbox" value={"Adventurous"} {...register("trait")} />
          Creative{" "}
          <input type="checkbox" value={"Creative"} {...register("trait")} />
        </div>
        <div>
          <br />
          <label htmlFor="">Strengths</label>
          <br />
          <select name="" id="" {...register("strengths")}>
            <option value="Leadership">Leadership</option>
            <option value="Problem-solving">Problem-solving</option>
            <option value="Creativity">Creativity</option>
            <option value="Teamwork">Teamwork</option>
          </select>
        </div>
        <div>
          <br />
          <label htmlFor="">Scenario Preference</label>
          <br />
          Save someone in danger <input type="radio" value={"Scenario"} />
          Invent something new{" "}
          <input type="radio" value={"invent"} {...register("Scenario")} />
          Lead a team{" "}
          <input type="radio" value={"lead"} {...register("Scenario")} />
          Explore the unknown{" "}
          <input type="radio" value={"explore"} {...register("Scenario")} />
        </div>
        <div>
          <br />
          <label htmlFor="">What’s Your Motto? </label>
          <br />
          <input type="text" {...register("moto")} />
        </div>
        <div>
          <br />
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
