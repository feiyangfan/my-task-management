import React from "react";
import { Button, Card } from "@material-ui/core";
import "./Login.css";
const { createProxyMiddleware } = require("http-proxy-middleware");

const Login = () => {
  return (
    <div className="login-page">
      <Card variant="outlined" className="login-card">
        <div className="login-info">
          <h1>My Daily Planner</h1>
          <p>Weather, Todo Lists, Timetable, and more!</p>
        </div>
        <Button variant="outlined" color="secondary">
          <a href="http://localhost:9000/auth/google">
            Login with Google account
          </a>
        </Button>
      </Card>
    </div>
  );
};

export default Login;
