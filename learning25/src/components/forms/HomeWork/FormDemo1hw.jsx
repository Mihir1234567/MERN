import React from "react";
import "../forms.css";
import { useForm } from "react-hook-form";

export const FormDemo1hw = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div class="form">
      <h1>Movie Recommendation Form</h1>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
        <div>
          <br />
          <label htmlFor="">List 3 Movies You Love</label>
          <br />
          <input
            type="text"
            placeholder="Movie 1"
            {...register("moviename1")}
          />
          <input
            type="text"
            placeholder="Movie 2"
            {...register("moviename2")}
          />
          <input
            type="text"
            placeholder="Movie 3"
            {...register("moviename3")}
          />
        </div>
        <div>
          <br />
          <label htmlFor="">Select Your Movie Preferance</label> <br />
          Action{" "}
          <input
            type="checkbox"
            value="action"
            {...register("moviePreferance")}
          />
          Comedy{" "}
          <input
            type="checkbox"
            value="Comedy"
            {...register("moviePreferance")}
          />
          Horror{" "}
          <input
            type="checkbox"
            value="Horror"
            {...register("moviePreferance")}
          />
          Romance{" "}
          <input
            type="checkbox"
            value="Romance"
            {...register("moviePreferance")}
          />
          Sci-Fi{" "}
          <input
            type="checkbox"
            value="Sci-Fi"
            {...register("moviePreferance")}
          />
          Documentry{" "}
          <input
            type="checkbox"
            value="Documentry"
            {...register("moviePreferance")}
          />
          SuperHero{" "}
          <input
            type="checkbox"
            value="SuperHero"
            {...register("moviePreferance")}
          />
        </div>
        <div>
          <br />
          <label htmlFor="">Preferred Era</label> <br />
          Classic(pre-2000)
          <input type="radio" value="classic" {...register("Era")} />
          Morden(2001-2020)
          <input type="radio" value="morden" {...register("Era")} />
          Latest(2020-now)
          <input type="radio" value="latest" {...register("Era")} />
        </div>
        <div>
          <br />
          <label htmlFor="">Avoid Genres</label> <br />
          Action:{" "}
          <input type="checkbox" value="action" {...register("avoidMovie")} />
          Comedy:{" "}
          <input type="checkbox" value="Comedy" {...register("avoidMovie")} />
          Horror:{" "}
          <input type="checkbox" value="Horror" {...register("avoidMovie")} />
          Romance:{" "}
          <input type="checkbox" value="Romance" {...register("avoidMovie")} />
          Sci-Fi:{" "}
          <input type="checkbox" value="Sci-Fi" {...register("avoidMovie")} />
          Documentry:{" "}
          <input
            type="checkbox"
            value="Documentry"
            {...register("avoidMovie")}
          />
          SuperHero:{" "}
          <input
            type="checkbox"
            value="SuperHero"
            {...register("avoidMovie")}
          />
        </div>
        <div>
          <br />
          <label htmlFor="">Streaming Platforms</label> <br />
          Netflix:{" "}
          <input
            type="radio"
            value="Netflix"
            {...register("streamingPlatform")}
          />
          Hulu:{" "}
          <input type="radio" value="Hulu" {...register("streamingPlatform")} />
          Hotstar:{" "}
          <input
            type="radio"
            value="Hotstar"
            {...register("streamingPlatform")}
          />
          Prime Video:{" "}
          <input
            type="radio"
            value="Prime Video"
            {...register("streamingPlatform")}
          />
          YouTube:{" "}
          <input
            type="radio"
            value="YouTube"
            {...register("streamingPlatform")}
          />
        </div>
        <div>
          <br />
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
