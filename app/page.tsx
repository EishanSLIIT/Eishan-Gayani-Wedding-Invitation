"use client";
import { useState, useEffect, useRef } from "react";

// Lavender Twig SVG Decoration Component
function LavenderTwig({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 220 C50 160, 55 100, 65 30" stroke="#7d8c6b" strokeWidth="2.5" strokeLinecap="round" />
      {/* Top Buds */}
      <path d="M65 30 Q60 25 65 20 Q70 25 65 30 Z" fill="#9073b3" />
      <path d="M65 20 Q60 15 65 10 Q70 15 65 20 Z" fill="#a38fc2" />
      {/* Cluster 1 */}
      <path d="M63 50 Q50 45 55 38 Q63 42 63 50 Z" fill="#7b5b9e" />
      <path d="M66 52 Q79 47 74 40 Q66 44 66 52 Z" fill="#9a83c2" />
      <path d="M64 45 Q58 40 64 35 Q70 40 64 45 Z" fill="#a895cf" />
      {/* Cluster 2 */}
      <path d="M61 80 Q45 75 51 66 Q61 70 61 80 Z" fill="#7b5b9e" />
      <path d="M67 82 Q83 77 77 68 Q67 72 67 82 Z" fill="#9073b3" />
      <path d="M64 72 Q56 65 64 58 Q72 65 64 72 Z" fill="#b19cd9" />
      {/* Cluster 3 */}
      <path d="M59 110 Q42 105 48 96 Q59 100 59 110 Z" fill="#6a4d8c" />
      <path d="M69 112 Q86 107 80 98 Q69 102 69 112 Z" fill="#886fa8" />
      <path d="M64 102 Q55 95 64 88 Q73 95 64 102 Z" fill="#a895cf" />
      {/* Cluster 4 */}
      <path d="M57 140 Q40 135 46 126 Q57 130 57 140 Z" fill="#7b5b9e" />
      <path d="M71 142 Q88 137 82 128 Q71 132 71 142 Z" fill="#9073b3" />
      <path d="M64 132 Q54 125 64 118 Q74 125 64 132 Z" fill="#b19cd9" />
      {/* Leaves */}
      <path d="M56 160 Q35 155 45 145 Q53 150 56 160 Z" fill="#7d8c6b" />
      <path d="M72 175 Q93 170 83 160 Q75 165 72 175 Z" fill="#7d8c6b" />
      <path d="M54 190 Q30 185 42 175 Q50 180 54 190 Z" fill="#7d8c6b" />
    </svg>
  );
}

// Wax Seal Stamp SVG Component
function SealStampSvg() {
  return (
    <svg viewBox="0 0 100 100" className="seal-svg-stamp" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 82 C45 60, 48 40, 52 18" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="52" cy="18" r="3.5" fill="rgba(255, 255, 255, 0.7)" />
      <circle cx="47" cy="28" r="4.5" fill="rgba(255, 255, 255, 0.7)" />
      <circle cx="56" cy="30" r="4.5" fill="rgba(255, 255, 255, 0.7)" />
      <circle cx="46" cy="42" r="5" fill="rgba(255, 255, 255, 0.7)" />
      <circle cx="57" cy="44" r="5" fill="rgba(255, 255, 255, 0.7)" />
      <circle cx="45" cy="56" r="5" fill="rgba(255, 255, 255, 0.7)" />
      <circle cx="59" cy="58" r="5" fill="rgba(255, 255, 255, 0.7)" />
      <path d="M47 67 Q36 62 46 54" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M57 74 Q68 69 57 61" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function Home() {
  const [sealBroken, setSealBroken] = useState(false);
  const [envelopeState, setEnvelopeState] = useState<'closed' | 'opening' | 'revealed'>('closed');
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
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
    const formElement = event.currentTarget;
    setStatus("Saving...");
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());
    const res = await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      setStatus("Thank you! Your RSVP has been recorded.");
      formElement.reset();
      // Reset attending state to close conditional UI fields
      setAttending("");
    } else {
      setStatus("Could not save RSVP. Please try again.");
    }
  }

  const handleOpenEnvelope = () => {
    if (audioRef.current && !audioPlaying) {
      audioRef.current.play().then(() => {
        setAudioPlaying(true);
      }).catch(err => console.log("Audio play blocked:", err));
    }
    setEnvelopeState('opening');
    setTimeout(() => {
      setEnvelopeState('revealed');
    }, 1200);
  };

  const handleRevealInvitation = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setSealBroken(true);
    }, 1000);
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setAudioPlaying(true);
      }).catch(err => console.log("Audio play blocked:", err));
    }
  };

  return (
    <main>
      {/* Background Audio */}
      <audio ref={audioRef} src="/music/wedding.mp3" loop />

      {!sealBroken && (
        <div className={`invitation-overlay ${isFadingOut ? 'fade-out' : ''}`}>
          {/* Floating decorative lavenders in corners */}
          <LavenderTwig className="envelope-bg-decoration top-left" />
          <LavenderTwig className="envelope-bg-decoration top-right" />
          <LavenderTwig className="envelope-bg-decoration bottom-left" />
          <LavenderTwig className="envelope-bg-decoration bottom-right" />

          <div className="envelope-wrapper">
            <div className={`envelope ${envelopeState === 'opening' || envelopeState === 'revealed' ? 'open' : ''} ${envelopeState === 'revealed' ? 'reveal-letter' : ''}`}>
              
              {/* Back background of the envelope */}
              <div className="envelope-back-bg" />

              {/* Tucked Letter Card */}
              <div className="envelope-letter">
                <svg className="letter-floral-top" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 45 C45 35, 48 25, 52 5" stroke="#7d8c6b" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="52" cy="5" r="2" fill="#9073b3" />
                  <circle cx="48" cy="12" r="3" fill="#7b5b9e" />
                  <circle cx="56" cy="14" r="3" fill="#a38fc2" />
                  <circle cx="47" cy="22" r="3" fill="#9073b3" />
                  <circle cx="57" cy="24" r="3" fill="#b19cd9" />
                </svg>
                <h2 className="letter-title">Eishan & Gayani</h2>
                <p className="letter-subtitle">Save the Date</p>
                <p className="letter-date">15 November 2026</p>
                <button className="letter-enter-btn" onClick={handleRevealInvitation}>
                  Open Invitation
                </button>
              </div>

              {/* Envelope side & bottom flaps */}
              <div className="envelope-flap left">
                <LavenderTwig className="flap-decor left-flap-decor" />
              </div>
              <div className="envelope-flap right">
                <LavenderTwig className="flap-decor right-flap-decor" />
              </div>
              <div className="envelope-flap bottom" />

              {/* Title displayed on the closed envelope front */}
              <h1 className="envelope-closed-title">The Invitation</h1>

              {/* Top flap that opens upwards */}
              <div className="envelope-flap top" />

              {/* Wax Seal click button centered */}
              <div className="envelope-seal-container">
                <button className="envelope-seal-btn" onClick={handleOpenEnvelope} title="Tap to open invitation">
                  <div className="envelope-wax-seal">
                    <SealStampSvg />
                  </div>
                </button>
                <p className="seal-prompt-text">Tap to Break Seal</p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Global music control button */}
      <button className="audio-control-btn" onClick={toggleAudio} title={audioPlaying ? "Mute Music" : "Play Music"}>
        {audioPlaying ? (
          <svg viewBox="0 0 24 24">
            <path d="M12 4L9.91 6.09L12 8.18V4M20 12C20 14.53 18.82 16.79 17 18.27L18.43 19.7C20.62 17.78 22 15.05 22 12C22 7.33 18.78 3.4 14.5 2.37V4.44C17.65 5.43 20 8.44 20 12M4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.76C15.38 20.44 16.63 19.79 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3M12 5.86V10.73L9.14 7.86L12 5.86Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24">
            <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
          </svg>
        )}
      </button>

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
            Eishan & Gayani
          </h1>
          <p className="date">15 November 2026</p>
          <p>We warmly invite you to celebrate our wedding day with us.</p>
        </div>
      </section>

      <section className="section" id="details">
        <h2>Wedding Details</h2>
        <div className="details">
          <a 
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Eishan+%26+Gayani%27s+Wedding&dates=20261115T033000Z/20261115T103000Z&details=We+warmly+invite+you+to+celebrate+our+special+wedding+day+with+us+at+Centauria+Wild%2C+Udawalawe.&location=Centauria+Wild%2C+Udawalawe&sf=true&output=xml"
            target="_blank"
            rel="noopener noreferrer"
            className="card detail-card date-card-interactive"
            title="Tap to add to Google Calendar"
          >
            <div className="card-icon">📅</div>
            <h3>Date</h3>
            <p>Sunday</p>
            <p className="highlight">15 November 2026</p>
            <span className="card-tap-hint">Tap to Add Event</span>
          </a>

          <a 
            href="https://www.google.com/maps/search/?api=1&query=Centauria+Wild+Udawalawe"
            target="_blank"
            rel="noopener noreferrer"
            className="card detail-card venue-card-interactive"
            title="Tap to open in Google Maps"
          >
            <div className="card-icon">📍</div>
            <h3>Venue</h3>
            <p>Centauria Wild</p>
            <p className="highlight">Udawalawe</p>
            <span className="card-tap-hint">Tap to Open Maps</span>
          </a>

          <a 
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Eishan+%26+Gayani%27s+Wedding&dates=20261115T033000Z/20261115T103000Z&details=We+warmly+invite+you+to+celebrate+our+special+wedding+day+with+us+at+Centauria+Wild%2C+Udawalawe.&location=Centauria+Wild%2C+Udawalawe&sf=true&output=xml"
            target="_blank"
            rel="noopener noreferrer"
            className="card detail-card ceremony-card-interactive"
            title="Tap to add to Google Calendar"
          >
            <div className="card-icon">🕐</div>
            <h3>Ceremony</h3>
            <p>Morning</p>
            <p className="highlight">9:00 AM onwards</p>
            <span className="card-tap-hint">Tap to Add Event</span>
          </a>
        </div>

        <div className="venue-showcase card">
          <div className="venue-header">
            <h3>The Venue - Centauria Wild Udawalawe</h3>
            <p className="venue-description">
              Nestled adjacent to the famous Udawalawe National Park, Centauria Wild is a tropical paradise where luxury meets the raw beauty of nature. We can't wait to share the magic of this wilderness sanctuary with you.
            </p>
          </div>
          
          <div className="venue-gallery">
            <div className="venue-photo-card">
              <div className="venue-photo-wrapper">
                <img src="/photos/venue-lawn.png" alt="Centauria Wild Lawn" />
              </div>
              <span className="photo-caption">Resort poolside garden & lawns</span>
            </div>
            <div className="venue-photo-card">
              <div className="venue-photo-wrapper">
                <img src="/photos/venue-hall.png" alt="Centauria Wild Reception Hall" />
              </div>
              <span className="photo-caption">Elegant reception ballroom</span>
            </div>
          </div>

          <div className="venue-actions">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Centauria+Wild+Udawalawe" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="action-btn map-btn"
            >
              📍 Open in Google Maps
            </a>
            
            <a 
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Eishan+%26+Gayani%27s+Wedding&dates=20261115T033000Z/20261115T103000Z&details=We+warmly+invite+you+to+celebrate+our+special+wedding+day+with+us+at+Centauria+Wild%2C+Udawalawe.&location=Centauria+Wild%2C+Udawalawe&sf=true&output=xml" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="action-btn calendar-btn-google"
            >
              📅 Add to Google Calendar
            </a>
            
            <button 
              onClick={() => {
                const icsContent = [
                  "BEGIN:VCALENDAR",
                  "VERSION:2.0",
                  "BEGIN:VEVENT",
                  "DTSTART:20261115T033000Z",
                  "DTEND:20261115T103000Z",
                  "SUMMARY:Eishan & Gayani's Wedding",
                  "DESCRIPTION:Celebrate our wedding day with us at Centauria Wild, Udawalawe.",
                  "LOCATION:Centauria Wild, Udawalawe",
                  "END:VEVENT",
                  "END:VCALENDAR"
                ].join("\r\n");
                const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "wedding-eishan-gayani.ics";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="action-btn calendar-btn-ical"
            >
              🔔 Add to Apple / Outlook
            </button>
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
            <div className="timeline-time">9:00 AM</div>
            <div className="timeline-event">
              <h4>Welcome Ceremony</h4>
              <p>Traditional greetings & morning tea</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">10:00 AM</div>
            <div className="timeline-event">
              <h4>Poruwa Ceremony</h4>
              <p>Traditional blessing rituals</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">12:30 PM</div>
            <div className="timeline-event">
              <h4>Grand Reception & Lunch</h4>
              <p>Join us for celebration feast & toast</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">2:30 PM</div>
            <div className="timeline-event">
              <h4>Cake Cutting & Music</h4>
              <p>Dancing and fun memories</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">4:00 PM</div>
            <div className="timeline-event">
              <h4>Farewell</h4>
              <p>Departure with blessings and love</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Family Blessings</h2>
        <div className="details parents">
          <div className="card">
            <h3>Groom's Parents</h3>
            <p className="parent-names">
              Mr. Weerasinghe Hakmana Arachchige Jayasiri
              <br />
              Mrs. Malagoda Pathirange Sandya
            </p>
          </div>
          <div className="card">
            <h3>Bride's Parents</h3>
            <p className="parent-names">
              Mr. [Bride's Father Name]
              <br />
              Mrs. [Bride's Mother Name]
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
