import React, { useState } from "react";
import { auth, googleProvider, db } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import '../assets/css/register.css';

const Register = () => {
  const [role, setRole] = useState("student");
  const [uniqueId, setUniqueId] = useState("");

  const handleRegister = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const signedUser = result.user;

      await setDoc(
        doc(db, "users", signedUser.uid),
        {
          email: signedUser.email,
          role,
          uniqueId,
        },
        { merge: true }
      );

      alert("Registration successful!");
    } catch (err) {
      console.error(err.message);
    }
  };

  const getLabel = () => {
    if (role === "student") return "Aadhaar ID";
    if (role === "ngo") return "NGO ID";
    if (role === "government") return "Government ID";
    return "Unique ID";
  };

  return (
    <div className="auth-container" id="register">
      <div className="auth-card">
        <h2 className="auth-title">Register</h2>

        <div className="auth-field">
          <label className="auth-label">Select Role</label>
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
          <label className="auth-label">{getLabel()}</label>
          <input
            type="text"
            className="auth-input"
            value={uniqueId}
            onChange={(e) => setUniqueId(e.target.value)}
            placeholder={`Enter your ${getLabel()}`}
          />
        </div>

        <button className="btn btn-primary auth-btn" onClick={handleRegister}>
          Register with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
