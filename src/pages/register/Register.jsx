import { request } from "@/api";
import React from "react";
import { useDispatch } from "react-redux";
import { signIn } from "@/redux/slices/token-slice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let user = Object.fromEntries(formData);

    console.log(user);

    request.post("/auth/signup-admin", user).then((res) => {
      console.log(res);
      dispatch(signIn(res.data.access_token));
      navigate("/admin");
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Register
        </h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
