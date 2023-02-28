import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    const login = async () => {
      const response = await axios.post("https://blog-crawler.onrender.com/admin/", {
        "username": username,
        "password":password
    })
    localStorage.setItem("token", JSON.stringify(response.data));
    window.location.reload();
  }
    


  return (
    <div>
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
        <button type="submit" className="btn btn-primary" onClick={() => login()}>
          Submit
        </button>
    </div>
  );
}
