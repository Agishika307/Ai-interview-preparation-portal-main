import { useState } from "react";

function Register({ setIsRegister, setIsLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    if (e) e.preventDefault();

    if (!username.trim() || !email.trim() || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (username.trim().length < 3) {
      setError("Username must be at least 3 characters.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          email: email.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed.");
        setLoading(false);
        return;
      }

      setSuccess("Registration successful! Redirecting to login...");

      // Optionally auto login or switch back to login screen
      setTimeout(() => {
        setIsRegister(false);
      }, 1500);
    } catch (err) {
      console.error("Registration Error:", err);
      setError("Unable to connect to the backend server. Please verify the server is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleRegister(e);
    }
  };

  return (
    <div className="auth">
      <div className="login-box">
        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Username (min 3 characters)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />

        <button onClick={handleRegister} disabled={loading}>
          {loading ? "Registering..." : "Register"}
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

        {success && (
          <p
            style={{
              color: "#16a34a",
              marginTop: "15px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            {success}
          </p>
        )}

        <p>
          Already have an account?{" "}
          <span
            onClick={() => setIsRegister(false)}
            style={{ cursor: "pointer", color: "#4f46e5", fontWeight: "600" }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;