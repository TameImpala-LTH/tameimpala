import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db, googleProvider } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [role, setRole] = useState("student");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    uniqueId: "",
  });

  // Input handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Register user
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = res.user;

      await setDoc(doc(db, "users", user.uid), {
        name: formData.name,
        email: formData.email,
        role,
        uniqueId: formData.uniqueId,
        createdAt: new Date(),
      });

      alert("User registered successfully!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  // Login user
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Logged in successfully!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  // Google Auth
  const handleGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;

      await setDoc(
        doc(db, "users", user.uid),
        {
          name: user.displayName,
          email: user.email,
          role: "student", // default role, can be changed later
          uniqueId: null,
          createdAt: new Date(),
        },
        { merge: true }
      );

      alert("Google sign-in successful!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="auth-container" id="register">
      <div className="auth-card">
        <h1 className="auth-title">{isRegister ? "Register" : "Login"}</h1>
        <p className="auth-subtitle">
          {isRegister
            ? "Create an account to get started"
            : "Login to continue"}
        </p>

        <form onSubmit={isRegister ? handleRegister : handleLogin}>
          {isRegister && (
            <>
              <div className="auth-field">
                <label className="auth-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="auth-input"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="auth-field">
                <label className="auth-label">Role</label>
                <select
                  className="auth-input"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="student">Student</option>
                  <option value="ngo">NGO</option>
                  <option value="government">Government</option>
                </select>
              </div>

              <div className="auth-field">
                <label className="auth-label">
                  {role === "student"
                    ? "Aadhar ID"
                    : role === "ngo"
                    ? "NGO ID"
                    : "Government ID"}
                </label>
                <input
                  type="text"
                  name="uniqueId"
                  className="auth-input"
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          <div className="auth-field">
            <label className="auth-label">Email</label>
            <input
              type="email"
              name="email"
              className="auth-input"
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-field">
            <label className="auth-label">Password</label>
            <input
              type="password"
              name="password"
              className="auth-input"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-btn auth-input">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <button
          className="auth-btn auth-input"
          style={{ marginTop: "10px", background: "#db4437" }}
          onClick={handleGoogle}
        >
          Sign in with Google
        </button>

        <p
          style={{ marginTop: "20px", color: "#fff", cursor: "pointer" }}
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? "Already have an account? Login"
            : "Don’t have an account? Register"}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
