"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [sealBroken, setSealBroken] = useState(false);
  const [status, setStatus] = useState("");
  const [attending, setAttending] = useState<string>("");
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const weddingDate = new Date("2026-11-15T00:00:00").getTime();
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  async function submitRSVP(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Saving...");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const res = await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      setStatus("Thank you! Your RSVP has been recorded.");
      event.currentTarget.reset();
    } else {
      setStatus("Could not save RSVP. Please try again.");
    }
  }

  return (
    <main>
      {!sealBroken && (
        <div className="invitation-overlay">
          <div className="invitation-card">
            <div className="invitation-flowers flowers-top-left"></div>
            <div className="invitation-flowers flowers-top-right"></div>

            <div className="invitation-content">
              <h1 className="invitation-title">
                Eishan Dinuka
                <br />&<br />
                Gayani Chathurika
              </h1>
              <p className="invitation-subtitle">THE INVITATION</p>
            </div>

            <button
              className="seal-button"
              onClick={() => setSealBroken(true)}
              title="Click to open invitation"
            >
              <div className="wax-seal">
                <div className="seal-inner">✦</div>
              </div>
              <p className="seal-text">TAP TO BREAK SEAL</p>
            </button>
          </div>
        </div>
      )}

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#details">Details</a>
        <a href="#gallery">Photos</a>
        <a href="#rsvp">RSVP</a>
        <a href="/admin">Admin</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-card">
          <p className="kicker">Together with their families</p>
          <h1>
            Eishan Dinuka
            <br />&<br />
            Gayani Chathurika
          </h1>
          <p className="date">15 November 2026</p>
          <p>We warmly invite you to celebrate our wedding day with us.</p>
        </div>
      </section>

      <section className="section" id="details">
        <h2>Wedding Details</h2>
        <div className="details">
          <div className="card detail-card">
            <div className="card-icon">📅</div>
            <h3>Date</h3>
            <p>Sunday</p>
            <p className="highlight">15 November 2026</p>
          </div>
          <div className="card detail-card">
            <div className="card-icon">📍</div>
            <h3>Venue</h3>
            <p>Centauria Wild</p>
            <p className="highlight">Udawalawe</p>
          </div>
          <div className="card detail-card">
            <div className="card-icon">🕐</div>
            <h3>Ceremony</h3>
            <p>Evening</p>
            <p className="highlight">6:00 PM onwards</p>
          </div>
        </div>
      </section>

      <section className="countdown-section">
        <p className="countdown-title">Countdown to our day</p>
        <div className="countdown">
          <div className="countdown-item">
            <div className="countdown-value">
              {String(countdown.days).padStart(2, "0")}
            </div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">
              {String(countdown.hours).padStart(2, "0")}
            </div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">
              {String(countdown.minutes).padStart(2, "0")}
            </div>
            <div className="countdown-label">Mins</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">
              {String(countdown.seconds).padStart(2, "0")}
            </div>
            <div className="countdown-label">Secs</div>
          </div>
        </div>
      </section>

      <section className="timeline-section section">
        <h2>Event Timeline</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-time">6:00 PM</div>
            <div className="timeline-event">
              <h4>Poruwa Ceremony</h4>
              <p>Traditional blessing ceremony</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">7:30 PM</div>
            <div className="timeline-event">
              <h4>Reception</h4>
              <p>Join us for dinner and celebration</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">10:00 PM</div>
            <div className="timeline-event">
              <h4>Dance & Festivities</h4>
              <p>Music and dancing with loved ones</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Family Blessings</h2>
        <div className="details parents">
          <div className="card">
            <h3>Groom's Parents</h3>
            <p>
              Mr. Jayasiri
              <br />
              Mrs. Sandya
            </p>
          </div>
          <div className="card">
            <h3>Bride's Parents</h3>
            <p>
              Mr. Sample Name
              <br />
              Mrs. Sample Name
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <h2>Pre-Shoot Memories</h2>
        <div className="gallery">
          <div className="photo">
            <img src="/photos/preshoot-1.png" alt="Pre-shoot memory 1" />
          </div>
          <div className="photo">
            <img src="/photos/preshoot-2.png" alt="Pre-shoot memory 2" />
          </div>
          <div className="photo">
            <img src="/photos/preshoot-3.png" alt="Pre-shoot memory 3" />
          </div>
          <div className="photo">
            <img src="/photos/preshoot-4.png" alt="Pre-shoot memory 4" />
          </div>
        </div>
      </section>

      <section className="section rsvp" id="rsvp">
        <h2>RSVP</h2>
        <p className="rsvp-subtitle">
          Kindly let us know by <strong>04.06.2026</strong>
        </p>
        <div className="card rsvp-card">
          <form className="form" onSubmit={submitRSVP}>
            <div className="form-group">
              <label>Will you attend?</label>
              <div className="button-group">
                <input
                  type="radio"
                  id="yes"
                  name="attending"
                  value="Yes"
                  required
                  onChange={(e) => setAttending(e.target.value)}
                  checked={attending === "Yes"}
                />
                <label htmlFor="yes" className="radio-label">
                  ✓ Attending
                </label>
                <input
                  type="radio"
                  id="no"
                  name="attending"
                  value="No"
                  onChange={(e) => setAttending(e.target.value)}
                  checked={attending === "No"}
                />
                <label htmlFor="no" className="radio-label">
                  ✗ Not Attending
                </label>
              </div>
            </div>

            {attending === "Yes" && (
              <>
                <div className="form-group">
                  <label>Number of Guests</label>
                  <select name="guestCount" required>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Dietary Preference</label>
                  <select name="dietary" required>
                    <option value="">Select preference</option>
                    <option value="Veg">Vegetarian</option>
                    <option value="Non-Veg">Non-Vegetarian</option>
                  </select>
                </div>
              </>
            )}

            <input
              name="name"
              placeholder="Your full name"
              required
              className="form-input"
            />
            <input
              name="phone"
              placeholder="Contact number"
              required
              className="form-input"
            />
            <input
              name="message"
              placeholder="Special message (optional)"
              className="form-input"
            />
            <button type="submit" className="submit-btn">
              Submit RSVP
            </button>
          </form>
          {status && <p className="form-status">{status}</p>}
        </div>
      </section>

      <footer className="footer">Eishan & Gayani • 15.11.2026</footer>
    </main>
  );
}
