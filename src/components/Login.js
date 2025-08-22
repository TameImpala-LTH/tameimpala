import React from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import "../assets/css/register.css";

const Login = () => {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Login successful!");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>
        <p className="auth-subtitle">Welcome back! Sign in to continue.</p>

        <button className="btn btn-secondary auth-btn" onClick={handleLogin}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
