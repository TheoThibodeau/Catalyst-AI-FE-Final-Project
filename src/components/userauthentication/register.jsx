import React from "react";
import { useState } from "react";
import axios from "axios";
import NavBar from "../navbar";

const UserAuthentication = ({ setToken, token }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [logoutMessage, setLogoutMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("https://catalyst-x226.onrender.com/auth/users/", {
        username: username,
        password: password,
      })
      .then((res) => {
        setToken(res.data.auth_token);
        localStorage.setItem("token", res.data.auth_token);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://catalyst-x226.onrender.com/auth/token/login/", {
        username: username,
        password: password,
      })
      .then((res) => {
        setToken(res.data.auth_token);
        localStorage.setItem("token", res.data.auth_token);
      });
  };

  const handleLogout = () => {
    axios
      .post(
        "https://catalyst-x226.onrender.com/auth/token/logout/",
        {},
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )
      .then(() => {
        setToken(null);
        setLogoutMessage("Logged out successfully.");
        localStorage.removeItem("token");
      });
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const toggleRegistrationForm = () => {
    setShowRegistrationForm(!showRegistrationForm);
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <>
    <NavBar />
      <div className="flex justify-center mt-52 h-screen">
        <div className="space-y-5 space-x-2">
          <button
            className="border border-slate-400 p-4"
            onClick={toggleRegistrationForm}
          >
            {showRegistrationForm ? "Hide Registration Form" : "New Account"}
          </button>

          {showRegistrationForm && (
            <form
              className="border border-slate-300 p-4"
              onSubmit={handleRegister}
            >
              
              <div className="space-x-1">
                <label>New Username</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Choose a Username..."
                  value={username}
                  onChange={handleUsername}
                  required
                />
              </div>

              <div className="space-x-1">
                <label>New Password</label>
                <input
                  type="text"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" Choose a Password..."
                  required
                />
              </div>
              <div>
                <button className="border border-slate-300 mt-4 p-2">
                  <input type="submit" className="button" value="Register" />
                </button>
              </div>
            </form>
          )}

          <button
            className="border border-slate-400 p-4"
            onClick={toggleLoginForm}
          >
            {showLoginForm ? "Hide Login Form" : "Login"}
          </button>

          {showLoginForm && (
            <form
              className="border border-slate-300 p-4"
              onSubmit={handleSubmit}
            >
              <div className="space-x-1">
                <label>Username</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={username}
                  onChange={handleUsername}
                  required
                />
              </div>
              <div className="space-x-1">
                <label>Password</label>
                <input
                  type="text"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <button className="border border-slate-300 mt-4 p-2">
                  <input type="submit" className="button" value="Login" />
                </button>
              </div>
            </form>
          )}

          <button
            className="border border-slate-400 p-4"
            onClick={handleLogout}
          >
            Logout
          </button>
          {logoutMessage && <div>{logoutMessage}</div>}
        </div>
      </div>
    </>
  );
};

export default UserAuthentication;
