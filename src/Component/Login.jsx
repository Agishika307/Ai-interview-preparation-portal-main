import { useState } from "react";
import logo from "../assets/image.png";

function Login({ setIsRegister, setIsLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    if (e) e.preventDefault();

    if (!username.trim() || !password) {
      setError("Please enter username and password");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid credentials.");
        setLoading(false);
        return;
      }

      // Store JWT token & user info in localStorage
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (data.user) {
        localStorage.setItem("loggedInUser", JSON.stringify(data.user));
      }

      setError("");
      setIsLogin(true);
    } catch (err) {
      console.error("Login Error:", err);
      setError("Unable to connect to the backend server. Please verify the server is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };

  return (
    <div className="auth">
      <div className="login-box">
        <img
          src={logo}
          alt="Company Logo"
          className="company-logo"
        />

        <h1>AI Interview Portal</h1>

        <input
          type="text"
          placeholder="Enter Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />

        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && (
          <p
            style={{
              color: "red",
              marginTop: "15px",
              fontSize: "14px",
              lineHeight: "1.4",
            }}
          >
            {error}
          </p>
        )}

        <p>
          Don't have an account?{" "}
          <span
            onClick={() => setIsRegister(true)}
            style={{ cursor: "pointer", color: "#4f46e5", fontWeight: "600" }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;