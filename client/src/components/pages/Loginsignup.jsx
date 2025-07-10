import React, { useState } from "react";
import "./css/loginsignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login"); // Default to "Login"
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    if (!formData.email || !formData.password) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Login Function Executed", formData);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
    if (!formData.username || !formData.email || !formData.password) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Signup Function Executed", formData);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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

  return (
    <div className="login-signup-joyful">
      <div className="login-signup-container-joyful">
        <h1>{state}</h1>
        <div className="login-signup-fields-joyful">
          {state === "Sign Up" && (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button onClick={state === "Login" ? login : signup}>
          {state === "Login" ? "Login" : "Sign Up"}
        </button>

        {state === "Sign Up" ? (
          <p className="login-signup-switch-joyful">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className="login-signup-switch-joyful">
            Don't have an account?{" "}
            <span onClick={() => setState("Sign Up")}>Sign up here</span>
          </p>
        )}

        <div className="login-signup-agree-joyful">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            By continuing, I agree to the terms of use & privacy policy.
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;