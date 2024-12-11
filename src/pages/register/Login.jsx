import { request } from "@/api";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "@/redux/slices/token-slice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    let formData = new FormData(e.target);
    const user = Object.fromEntries(formData);

    request
      .post("/auth/signin-admin", user)
      .then((res) => {
        dispatch(signIn(res.data.access_token));
        navigate("/admin");
      })
      .catch((err) => {
        alert(err.response.data.message.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleSignIn} className="space-y-4">
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
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md text-white ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } transition-colors`}
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
