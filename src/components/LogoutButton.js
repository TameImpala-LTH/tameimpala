// LogoutButton.js
import React from "react";
import { logout } from "../firebase";

function LogoutButton() {
  const handleLogout = async () => {
    try {
      await logout();
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <p onClick={handleLogout}>
      Logout
    </p>
  );
}

export default LogoutButton;
