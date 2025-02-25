import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Api.css";
import { Loader } from "../Loader";
import { Bounce, ToastContainer, toast } from "react-toastify";

export const ApiDemo1 = () => {
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const getUserData = async () => {
    setisLoading(true);
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res);
    console.log(res.data);
    console.log(res.data.message);
    setmessage(res.data.message);
    setusers(res.data.data);
    setisLoading(false);
  };
  const deletUser = async (id) => {
    const res = await axios.delete(
      `https://node5.onrender.com/user/user/${id}`
    );
    if (res.status === 204) {
      toast.error("The User Has Been Deleted!!!!!!!!!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
    getUserData();
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div class="main-div ">
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <h1>ApiDemo1</h1>

      {isLoading == true && <Loader />}
      <h2>{message}</h2>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">AGE</th>
            <th scope="col">ACTIVE</th>
            <th scope="col">ACITON</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <th>{user._id}</th>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>{user.age}</th>
                <th>{user.isActive ? "Active" : "Not Active"}</th>

                <button
                  class="btn btn-danger"
                  onClick={() => {
                    deletUser(user._id);
                  }}
                >
                  Delete
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
