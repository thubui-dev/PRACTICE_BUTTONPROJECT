import React, { useState, useEffect } from "react";
import "./login.css";
import Input from "../Input/Input";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState();

  const onUsernameChange = (e) => {
    const name = e.target.value;
    setUsername(name);
  };

  const onPasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const onCheckedChange = () => {
    setChecked(!checked);
  };

  const onClick = () => {
    if (checked === true) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("checked", checked);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.removeItem("checked");
    }
  };

  useEffect(() => {
    const itemUsername = localStorage.getItem("username");
    if (itemUsername) {
      setUsername(itemUsername);
    }
    const itemPassword = localStorage.getItem("password");
    if (itemPassword) {
      setPassword(itemPassword);
    }
    const itemChecked = localStorage.getItem("checked");
    if (itemChecked) {
      setChecked(itemChecked === "true");
    }
  }, []);

  return (
    <div>
      <Input
        label="Username"
        onChange={onUsernameChange}
        value={username}
        type="text"
      />
      <Input
        label="Password"
        onChange={onPasswordChange}
        value={password}
        type="password"
      />
      <input
        type="checkbox"
        className="rememberMe"
        onChange={onCheckedChange}
        defaultChecked={checked}
      />
      <label>Remember me</label>
      <button
        className="login-item"
        onClick={onClick}
        disabled={username.length * password.length === 0}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
