import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://minimal-resume-backend-1.onrender.com/users/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      const { id } = response.data.user;
      const { token } = response.data;
      // console.log(id)
      // console.log(token)
      Cookies.set("token", token);
      Cookies.set("userId", id);

      console.log("Login successful");
      window.location.href = `/profile/${id}`;
    } catch (error) {
      console.error("Error:", error);
      setError(error.response.data.error || "Login failed");
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen bg-white font-mono">
      <div>
        <p
        className=" text-center text-3xl font-bold">A single place to showcase <br /> ur <span className=" text-orange-400"> talent</span> globally and locally</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-6"></div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#e09860] hover:bg-[#ad805d] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
        <div>
        <p className=" h-1">don't have account?</p>
        <br />
        <Link to="/register">register</Link>
      </div>
      </form>
     
    </div>
  );
}

export default Login;
