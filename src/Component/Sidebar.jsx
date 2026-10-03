import { useEffect, useState } from "react";
function Sidebar({ setLogin, setPage }) {
    const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("loggedInUser");
      if (raw && raw !== "undefined") {
        setUser(JSON.parse(raw));
      }
    } catch (err) {
      console.error("Failed to parse user in Sidebar:", err);
    }
  }, []);

   const logout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("token");
    setLogin(false);
  };

    return (

        <div className="sidebar">

<div className="profile-img">
    {user?.username?.charAt(0).toUpperCase() || "U"}
</div>

            <h3>
    {user?.username || "User Name"}
</h3>

            <p>
    {user?.email || "No Email"}
</p>

            <hr style={{ margin: "25px 0" }} />

            <p
                style={{ cursor: "pointer", marginBottom: "18px" }}
                onClick={() => setPage("dashboard")}
            >
                🏠 Dashboard
            </p>

            <p
                style={{ cursor: "pointer", marginBottom: "18px" }}
                onClick={() => setPage("dashboard")}
            >
                📄 Upload Resume
            </p>

            <p
                style={{ cursor: "pointer", marginBottom: "18px" }}
                onClick={() => setPage("jobrole")}
            >
                💼 Job Role
            </p>

            <p
                style={{ cursor: "pointer", marginBottom: "18px" }}
                onClick={() => setPage("interview")}
            >
                🤖 Mock Interview
            </p>

            <p
                style={{ cursor: "pointer", marginBottom: "18px" }}
                onClick={() => setPage("result")}
            >
                📊 Results
            </p>

            <p
                style={{ cursor: "pointer", marginBottom: "18px" }}
            >
                📜 Interview History
            </p>

            <p
                style={{ cursor: "pointer", marginBottom: "18px" }}
            >
                ⚙ Settings
            </p>

            <button
                className="logout-btn"
                onClick={logout}
            >
                Logout
            </button>

        </div>

    );

}

export default Sidebar;