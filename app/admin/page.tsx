"use client";
import { useEffect, useState } from "react";

type RSVP = {
  name: string;
  phone: string;
  attending: string;
  dietary?: string;
  message?: string;
  createdAt?: string;
};

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [status, setStatus] = useState("");
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [totalParticipants, setTotalParticipants] = useState(0);
  const [totalResponses, setTotalResponses] = useState(0);
  const [attendingCount, setAttendingCount] = useState(0);
  const [notAttendingCount, setNotAttendingCount] = useState(0);
  const [vegCount, setVegCount] = useState(0);
  const [nonVegCount, setNonVegCount] = useState(0);

  async function loadData() {
    try {
      const res = await fetch("/api/rsvp");
      if (res.ok) {
        const data = await res.json();
        setRsvps(data.rsvps);
        setTotalParticipants(data.totalParticipants);
        setTotalResponses(data.totalResponses);

        // Calculate statistics
        const attending = data.rsvps.filter(
          (r: RSVP) => r.attending === "Yes",
        ).length;
        const notAttending = data.rsvps.filter(
          (r: RSVP) => r.attending === "No",
        ).length;
        const veg = data.rsvps.filter((r: RSVP) => r.dietary === "Veg").length;
        const nonVeg = data.rsvps.filter(
          (r: RSVP) => r.dietary === "Non-Veg",
        ).length;

        setAttendingCount(attending);
        setNotAttendingCount(notAttending);
        setVegCount(veg);
        setNonVegCount(nonVeg);
      }
    } catch (error) {
      console.error("Failed to load data:", error);
    }
  }

  useEffect(() => {
    // Session check on load removed to force login every time.
  }, []);

  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      if (res.ok) {
        setStatus("✓ Login successful - Loading dashboard...");
        await loadData();
        setLoggedIn(true);
        setStatus(""); // Clear status after successful login
      } else {
        setStatus("✕ Invalid username or password");
      }
    } catch (error) {
      setStatus("✕ Login failed. Please try again.");
      console.error("Login error:", error);
    }
  }

  async function logout() {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } catch (error) {
      console.error("Logout request failed:", error);
    }
    setLoggedIn(false);
    setRsvps([]);
    setStatus("");
    setTotalParticipants(0);
    setTotalResponses(0);
    setAttendingCount(0);
    setNotAttendingCount(0);
    setVegCount(0);
    setNonVegCount(0);
  }

  if (!loggedIn) {
    return (
      <main className="admin-login-page">
        <div className="login-background">
          <div className="bg-gradient"></div>
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
        </div>

        <div className="login-container">
          <div className="login-card">
            <div className="card-glow"></div>

            <div className="login-header">
              <div className="header-icon">👑</div>
              <h1>Admin Portal</h1>
              <p className="login-subtitle">Eishan & Gayani Wedding</p>
              <div className="divider"></div>
              <p className="header-description">Manage your wedding RSVPs</p>
            </div>

            <form className="login-form" onSubmit={login}>
              <div className="form-group">
                <label htmlFor="username">
                  <span className="label-icon">👤</span>
                  Username
                </label>
                <div className="input-wrapper">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    required
                    className="premium-input"
                  />
                  <div className="input-border"></div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <span className="label-icon">🔐</span>
                  Password
                </label>
                <div className="input-wrapper">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="premium-input"
                  />
                  <div className="input-border"></div>
                </div>
              </div>

              <button type="submit" className="premium-login-btn">
                <span className="btn-content">Sign In</span>
                <span className="btn-shine"></span>
              </button>
            </form>

            {status && (
              <div
                className={`login-status ${status.includes("successful") ? "success" : "error"}`}
              >
                <span className="status-icon">
                  {status.includes("successful") ? "✓" : "✕"}
                </span>
                {status}
              </div>
            )}

            <div className="login-footer">
              <p>
                <span className="lock-icon">🔒</span>
                Secure Admin Dashboard
              </p>
            </div>

            <div className="decoration-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

          <div className="login-decoration">
            <div className="decoration-circle circle-1"></div>
            <div className="decoration-circle circle-2"></div>
            <div className="decoration-circle circle-3"></div>
          </div>
        </div>
      </main>
    );
  }

  const attendancePercentage =
    totalResponses > 0
      ? Math.round((attendingCount / totalResponses) * 100)
      : 0;

  return (
    <main className="admin">
      <div className="admin-header">
        <div className="header-left">
          <h1>RSVP Dashboard</h1>
          <p className="admin-subtitle">Wedding Response Management</p>
        </div>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card primary">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <div className="stat-label">Total Responses</div>
            <div className="stat-value">{totalResponses}</div>
          </div>
        </div>

        <div className="stat-card success">
          <div className="stat-icon">✓</div>
          <div className="stat-content">
            <div className="stat-label">Attending</div>
            <div className="stat-value">{attendingCount}</div>
            <div className="stat-percentage">{attendancePercentage}%</div>
          </div>
        </div>

        <div className="stat-card danger">
          <div className="stat-icon">✗</div>
          <div className="stat-content">
            <div className="stat-label">Not Attending</div>
            <div className="stat-value">{notAttendingCount}</div>
          </div>
        </div>

        <div className="stat-card info">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <div className="stat-label">Total Participants</div>
            <div className="stat-value">{totalParticipants}</div>
          </div>
        </div>
      </div>

      <div className="dietary-section">
        <h2>Dietary Preferences</h2>
        <div className="dietary-grid">
          <div className="dietary-card">
            <div className="dietary-icon">🥗</div>
            <div className="dietary-label">Vegetarian</div>
            <div className="dietary-count">{vegCount}</div>
          </div>
          <div className="dietary-card">
            <div className="dietary-icon">🍖</div>
            <div className="dietary-label">Non-Vegetarian</div>
            <div className="dietary-count">{nonVegCount}</div>
          </div>
        </div>
      </div>

      <h2>Guest Details</h2>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Dietary</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {rsvps.map((rsvp, index) => (
              <tr
                key={index}
                className={
                  rsvp.attending === "Yes"
                    ? "row-attending"
                    : "row-not-attending"
                }
              >
                <td>{rsvp.name}</td>
                <td>{rsvp.phone || "-"}</td>
                <td>
                  <span
                    className={`status-badge ${rsvp.attending === "Yes" ? "status-yes" : "status-no"}`}
                  >
                    {rsvp.attending === "Yes" ? "✓ Yes" : "✗ No"}
                  </span>
                </td>
                <td>{rsvp.dietary || "-"}</td>
                <td>{rsvp.message || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
