import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// component for login
function Login() {
  // state variables for user id and password
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  // state variable for login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useNavigate hook for navigation
  const navigate = useNavigate();

  // useEffect hook for checking login status
  useEffect(() => {
    // if logged in, navigate to home page
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  // function for handling form submission
  const handleSubmit = (event) => {
    // prevent default behavior
    event.preventDefault();

    // mock login logic
    // you can replace this with your own logic or API call
    if (userId === "admin" && password === "admin") {
      // set login status to true
      setIsLoggedIn(true);
    } else {
      // alert the user of invalid credentials
      alert("Invalid user id or password");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User Id:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
