import React, { useState } from "react";
import "./css/loginsignup.css";

function Login() {
  const [state, setState] = useState("login");
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const login = async () => {
    if (!formdata.email || !formdata.password) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Login Function Executed", formdata);

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        window.location.replace("/");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("An error occurred during login.");
    }
  };

  const signup = async () => {
    if (!formdata.username || !formdata.email || !formdata.password) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Signup Function Executed", formdata);

    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();
      console.log("Signup response:", data);

      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        window.location.replace("/");
      } else {
        alert(data.errors || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("An error occurred during signup.");
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state === "login" ? "Login" : "Signup"}</h1>
        <div className="loginsignup-fields">
          {state === "signup" && (
            <input
              name="username"
              value={formdata.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            name="email"
            value={formdata.email}
            onChange={changeHandler}
            type="email"
            placeholder="Your email"
          />
          <input
            name="password"
            value={formdata.password}
            onChange={changeHandler}
            type="password"
            placeholder="Your password"
          />
        </div>
        <button onClick={state === "login" ? login : signup}>Continue</button>

        {state === "signup" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={() => setState("login")}>Login</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account{" "}
            <span onClick={() => setState("signup")}>Click here...</span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
