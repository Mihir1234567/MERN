import React from "react";
import { useForm } from "react-hook-form";
import "../forms.css";

export const FormDemo2hw = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div class="form">
      <h1>Personalized Playlist Generator</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <br />
          <label htmlFor="">Favorite Music Genres</label>
          <br />
          Pop{" "}
          <input type="checkbox" value="pop" {...register("FavMusicGeners")} />
          Rock{" "}
          <input type="checkbox" value="rock" {...register("FavMusicGeners")} />
          Hip-Hop{" "}
          <input
            type="checkbox"
            value="hip-hop"
            {...register("FavMusicGeners")}
          />
        </div>
        <div>
          <br />
          <label htmlFor="">List 3 Artists You Love</label>
          <br />
          <input
            type="text"
            placeholder="Artist 1"
            {...register("artistname1")}
          />
          <input
            type="text"
            placeholder="Artist 2"
            {...register("artistname2")}
          />
          <input
            type="text"
            placeholder="Artist 3"
            {...register("artistname3")}
          />
        </div>
        <div>
          <br />
          <label htmlFor="">Music Platform</label>
          <br />
          <select name="" id="" {...register("activity")}>
            <option value="Workout">Workout</option>
            <option value="Relaxation">Relaxation</option>
            <option value="Road Trip">Road Trip</option>
            <option value="Focus/Study">Focus/Study</option>
          </select>
        </div>
        <div>
          <br />
          <label htmlFor="">Music Platform</label>
          <br />
          <select name="" id="" {...register("musicPlatform")}>
            <option value="Spotify">Spotify</option>
            <option value="Apple Music">Apple Music</option>
            <option value="YouTube">YouTube</option>
          </select>
        </div>
        <div>
          <br />
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
