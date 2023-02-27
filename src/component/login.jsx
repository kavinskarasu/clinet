import React, { useState, useEffect } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const login = async () => {
      const response = await fetch("https://blog-crawler.onrender.com/admin/", {
        method: "POST",
        body: JSON.stringify({ username, password })
      });
      const result = await response.json();
      localStorage.setItem(
        "login",
        JSON.stringify({ login: true, token: result.token })
      );
    };
    login();
  }, [username, password]);

  const handleSubmit = event => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">UserNmae</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={event => setUsername(event.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={event => setPassword(event.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
