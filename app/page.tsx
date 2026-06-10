"use client";
import { useState, useEffect, useRef } from "react";

// ─── SVG Decorations ──────────────────────────────────────────────
function LavenderTwig({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 220 C50 160, 55 100, 65 30" stroke="#7d8c6b" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M65 30 Q60 25 65 20 Q70 25 65 30 Z" fill="#9073b3" />
      <path d="M65 20 Q60 15 65 10 Q70 15 65 20 Z" fill="#a38fc2" />
      <path d="M63 50 Q50 45 55 38 Q63 42 63 50 Z" fill="#7b5b9e" />
      <path d="M66 52 Q79 47 74 40 Q66 44 66 52 Z" fill="#9a83c2" />
      <path d="M64 45 Q58 40 64 35 Q70 40 64 45 Z" fill="#a895cf" />
      <path d="M61 80 Q45 75 51 66 Q61 70 61 80 Z" fill="#7b5b9e" />
      <path d="M67 82 Q83 77 77 68 Q67 72 67 82 Z" fill="#9073b3" />
      <path d="M64 72 Q56 65 64 58 Q72 65 64 72 Z" fill="#b19cd9" />
      <path d="M59 110 Q42 105 48 96 Q59 100 59 110 Z" fill="#6a4d8c" />
      <path d="M69 112 Q86 107 80 98 Q69 102 69 112 Z" fill="#886fa8" />
      <path d="M64 102 Q55 95 64 88 Q73 95 64 102 Z" fill="#a895cf" />
      <path d="M57 140 Q40 135 46 126 Q57 130 57 140 Z" fill="#7b5b9e" />
      <path d="M71 142 Q88 137 82 128 Q71 132 71 142 Z" fill="#9073b3" />
      <path d="M64 132 Q54 125 64 118 Q74 125 64 132 Z" fill="#b19cd9" />
      <path d="M56 160 Q35 155 45 145 Q53 150 56 160 Z" fill="#7d8c6b" />
      <path d="M72 175 Q93 170 83 160 Q75 165 72 175 Z" fill="#7d8c6b" />
      <path d="M54 190 Q30 185 42 175 Q50 180 54 190 Z" fill="#7d8c6b" />
    </svg>
  );
}

function SealStampSvg() {
  return (
    <svg viewBox="0 0 100 100" className="seal-svg-stamp" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 82 C45 60, 48 40, 52 18" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="52" cy="18" r="3.5" fill="rgba(255,255,255,0.7)" />
      <circle cx="47" cy="28" r="4.5" fill="rgba(255,255,255,0.7)" />
      <circle cx="56" cy="30" r="4.5" fill="rgba(255,255,255,0.7)" />
      <circle cx="46" cy="42" r="5" fill="rgba(255,255,255,0.7)" />
      <circle cx="57" cy="44" r="5" fill="rgba(255,255,255,0.7)" />
      <circle cx="45" cy="56" r="5" fill="rgba(255,255,255,0.7)" />
      <circle cx="59" cy="58" r="5" fill="rgba(255,255,255,0.7)" />
      <path d="M47 67 Q36 62 46 54" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M57 74 Q68 69 57 61" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function CalendarIconSvg() {
  return (
    <svg viewBox="0 0 100 100" className="card-icon-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="26" width="56" height="52" rx="8" stroke="url(#goldGradientIcon)" strokeWidth="3" fill="none" />
      <line x1="22" y1="42" x2="78" y2="42" stroke="url(#goldGradientIcon)" strokeWidth="3" />
      <circle cx="36" cy="34" r="3" fill="url(#goldGradientIcon)" />
      <circle cx="50" cy="34" r="3" fill="url(#goldGradientIcon)" />
      <circle cx="64" cy="34" r="3" fill="url(#goldGradientIcon)" />
      <path d="M35 18 C35 26, 37 28, 37 26" stroke="url(#goldGradientIcon)" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M65 18 C65 26, 67 28, 67 26" stroke="url(#goldGradientIcon)" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M50 69 C48 66, 41 62, 41 56 C41 52, 44 49, 48 49 C50 49, 51 50, 52 51 C53 50, 54 49, 56 49 C60 49, 63 52, 63 56 C63 62, 56 66, 54 69 L50 69 Z" fill="url(#goldGradientIcon)" />
      <defs>
        <linearGradient id="goldGradientIcon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b88954" />
          <stop offset="50%" stopColor="#dfba73" />
          <stop offset="100%" stopColor="#b88954" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function LocationIconSvg() {
  return (
    <svg viewBox="0 0 100 100" className="card-icon-svg" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 82 C45 74, 30 56, 30 42 C30 29, 39 20, 50 20 C61 20, 70 29, 70 42 C70 56, 55 74, 50 82 Z" stroke="url(#goldGradientPin)" strokeWidth="3" fill="none" strokeLinejoin="round" />
      <circle cx="50" cy="42" r="7" stroke="url(#goldGradientPin)" strokeWidth="2.5" fill="none" />
      <ellipse cx="50" cy="85" rx="14" ry="4" stroke="url(#goldGradientPin)" strokeWidth="1.5" fill="none" opacity="0.6" />
      <defs>
        <linearGradient id="goldGradientPin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b88954" />
          <stop offset="50%" stopColor="#dfba73" />
          <stop offset="100%" stopColor="#b88954" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ClockIconSvg() {
  return (
    <svg viewBox="0 0 100 100" className="card-icon-svg" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="30" stroke="url(#goldGradientClock)" strokeWidth="3" fill="none" />
      <line x1="50" y1="23" x2="50" y2="28" stroke="url(#goldGradientClock)" strokeWidth="2" />
      <line x1="50" y1="77" x2="50" y2="72" stroke="url(#goldGradientClock)" strokeWidth="2" />
      <line x1="23" y1="50" x2="28" y2="50" stroke="url(#goldGradientClock)" strokeWidth="2" />
      <line x1="77" y1="50" x2="72" y2="50" stroke="url(#goldGradientClock)" strokeWidth="2" />
      <line x1="50" y1="50" x2="50" y2="34" stroke="url(#goldGradientClock)" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="50" x2="36" y2="50" stroke="url(#goldGradientClock)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="50" r="4" fill="url(#goldGradientClock)" />
      <defs>
        <linearGradient id="goldGradientClock" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b88954" />
          <stop offset="50%" stopColor="#dfba73" />
          <stop offset="100%" stopColor="#b88954" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── Timeline Events Data ─────────────────────────────────────────
const timelineEvents = [
  { time: "8:30 AM", icon: "🌿", title: "Welcome Ceremony", desc: "Greeting our guests with traditional betel leaves and warm hospitality." },
  { time: "9:00 AM", icon: "🍽️", title: "Wedding Breakfast", desc: "Serving traditional Sri Lankan breakfast and delicious wedding sweetmeats." },
  { time: "9:45 AM", icon: "💍", title: "Poruwa Ceremony", desc: "Sacred marriage rituals on the Poruwa, exchange of rings, and traditional blessings." },
  { time: "11:00 AM", icon: "📸", title: "Photo Session", desc: "Capturing beautiful portraits and memories with family and friends." },
  { time: "11:45 AM", icon: "🥂", title: "Reception", desc: "Welcoming the newlyweds into the grand reception hall." },
  { time: "12:30 PM", icon: "🍱", title: "Lunch", desc: "A festive wedding lunch buffet and toasts to celebrate the union." },
  { time: "2:30 PM", icon: "👗", title: "Going Away Photo Session", desc: "Capturing the couple's second attire and portrait sessions." },
  { time: "3:30 PM", icon: "🕊️", title: "Going Away", desc: "The newlyweds depart with blessings and love." },
];

// ─── Gallery Photos Data ──────────────────────────────────────────
const galleryPhotos = [
  { src: "/photos/preshoot-1.png", alt: "Pre-shoot memory 1" },
  { src: "/photos/preshoot-2.png", alt: "Pre-shoot memory 2" },
  { src: "/photos/preshoot-3.png", alt: "Pre-shoot memory 3" },
  { src: "/photos/preshoot-4.png", alt: "Pre-shoot memory 4" },
  { src: "/photos/preshoot-5.png", alt: "Pre-shoot memory 5" },
  { src: "/photos/preshoot-6.png", alt: "Pre-shoot memory 6" },
];

// ─── Default Wishes ───────────────────────────────────────────────
const defaultWishes = [
  { name: "Aunt Kamala", message: "Wishing you both a lifetime of love, laughter and happiness! 💐", time: "A few days ago" },
  { name: "Uncle Sunil", message: "May your journey together be filled with joy and blessings. Congratulations!", time: "A few days ago" },
  { name: "Priya & Tharanga", message: "So happy for you both! You make a beautiful couple. Lots of love! 🌸", time: "A few days ago" },
];

// ─── Nav Links ────────────────────────────────────────────────────
const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#details", label: "Details", id: "details" },
  { href: "#timeline", label: "Timeline", id: "timeline" },
  { href: "#gallery", label: "Photos", id: "gallery" },
  { href: "#rsvp", label: "RSVP", id: "rsvp" },
];

// ─── Main Component ───────────────────────────────────────────────
export default function Home() {
  // Existing states
  const [sealBroken, setSealBroken] = useState(false);
  const [envelopeState, setEnvelopeState] = useState<"closed" | "opening" | "revealed">("closed");
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [status, setStatus] = useState("");
  const [attending, setAttending] = useState<string>("");
  const [dateFlipped, setDateFlipped] = useState(false);
  const [venueFlipped, setVenueFlipped] = useState(false);
  const [ceremonyFlipped, setCeremonyFlipped] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // New states
  const [pageLoaded, setPageLoaded] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [lightboxAlt, setLightboxAlt] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);
  const [autoFlipIndex, setAutoFlipIndex] = useState(0);
  const [wishes, setWishes] = useState<Array<{ name: string; message: string; time: string }>>(defaultWishes);

  // ── Page load delay (loading screen) ──
  useEffect(() => {
    const t = setTimeout(() => setPageLoaded(true), 1800);
    return () => clearTimeout(t);
  }, []);

  // ── Audio volume cap ──
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.12;
    const cap = () => { if (audio.volume > 0.15) audio.volume = 0.12; };
    audio.addEventListener("volumechange", cap);
    return () => audio.removeEventListener("volumechange", cap);
  }, []);

  // ── Countdown timer ──
  useEffect(() => {
    const tick = setInterval(() => {
      const dist = new Date("2026-11-15T00:00:00").getTime() - Date.now();
      if (dist > 0) {
        setCountdown({
          days: Math.floor(dist / 86400000),
          hours: Math.floor((dist / 3600000) % 24),
          minutes: Math.floor((dist / 60000) % 60),
          seconds: Math.floor((dist / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  // ── Scroll → glass nav ──
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close mobile menu on scroll ──
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const close = () => setMobileMenuOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [mobileMenuOpen]);

  // ── Active section via IntersectionObserver ──
  useEffect(() => {
    if (!sealBroken) return;
    const observers = navLinks.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, [sealBroken]);

  // ── Timeline fade-in on scroll ──
  useEffect(() => {
    if (!sealBroken) return;
    const items = document.querySelectorAll(".timeline-item");
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    items.forEach(i => obs.observe(i));
    return () => obs.disconnect();
  }, [sealBroken]);

  // ── Auto-rotate detail cards ──
  useEffect(() => {
    if (!sealBroken || hasInteracted) return;
    const iv = setInterval(() => setAutoFlipIndex(p => (p + 1) % 3), 3000);
    return () => clearInterval(iv);
  }, [sealBroken, hasInteracted]);

  // ── ESC closes lightbox ──
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ── Handlers ──
  const handleOpenEnvelope = () => {
    if (audioRef.current && !audioPlaying) {
      audioRef.current.play()
        .then(() => setAudioPlaying(true))
        .catch(err => console.log("Audio blocked:", err));
    }
    setEnvelopeState("opening");
    setTimeout(() => setEnvelopeState("revealed"), 1200);
  };

  const handleRevealInvitation = () => {
    setIsFadingOut(true);
    setTimeout(() => setSealBroken(true), 1000);
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setAudioPlaying(true))
        .catch(err => console.log("Audio blocked:", err));
    }
  };

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage(src);
    setLightboxAlt(alt);
    setLightboxOpen(true);
  };

  async function submitRSVP(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    setStatus("Saving…");
    const form = new FormData(formEl);
    const payload = Object.fromEntries(form.entries());
    const res = await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      setStatus("Thank you! We have received your RSVP. We look forward to celebrating with you.");
      const name = String(payload.name || "").trim();
      const message = String(payload.message || "").trim();
      if (name && message) {
        setWishes(prev => [{ name, message, time: "Just now" }, ...prev]);
      }
      formEl.reset();
      setAttending("");
    } else {
      setStatus("Could not save RSVP. Please try again.");
    }
  }

  // ── Compute flip states (auto + manual) ──
  const isDateFlipped = dateFlipped || (!hasInteracted && autoFlipIndex === 0);
  const isVenueFlipped = venueFlipped || (!hasInteracted && autoFlipIndex === 1);
  const isCeremonyFlipped = ceremonyFlipped || (!hasInteracted && autoFlipIndex === 2);

  const handleCardClick = (setter: React.Dispatch<React.SetStateAction<boolean>>, current: boolean) => {
    setHasInteracted(true);
    setter(!current);
  };

  // ─── JSX ──────────────────────────────────────────────────────
  return (
    <main>
      {/* ── Loading Screen ── */}
      {!pageLoaded && (
        <div className="loading-screen">
          <div className="loading-content">
            <div className="loading-rings" />
            <p className="loading-names">Eishan &amp; Gayani</p>
            <p className="loading-date">15 · 11 · 2026</p>
            <div className="loading-bar-wrapper">
              <div className="loading-bar-fill" />
            </div>
          </div>
        </div>
      )}

      {/* ── Background Audio ── */}
      <audio ref={audioRef} src="/music/wedding.mp3" loop />

      {/* ── Envelope Intro ── */}
      {!sealBroken && (
        <div className={`invitation-overlay ${isFadingOut ? "fade-out" : ""}`}>
          <LavenderTwig className="envelope-bg-decoration top-left" />
          <LavenderTwig className="envelope-bg-decoration top-right" />
          <LavenderTwig className="envelope-bg-decoration bottom-left" />
          <LavenderTwig className="envelope-bg-decoration bottom-right" />

          <div className="envelope-wrapper">
            <div className={`envelope ${envelopeState !== "closed" ? "open" : ""} ${envelopeState === "revealed" ? "reveal-letter" : ""}`}>
              <div className="envelope-back-bg" />

              <div className="envelope-letter">
                <svg className="letter-floral-top" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 45 C45 35, 48 25, 52 5" stroke="#7d8c6b" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="52" cy="5" r="2" fill="#9073b3" />
                  <circle cx="48" cy="12" r="3" fill="#7b5b9e" />
                  <circle cx="56" cy="14" r="3" fill="#a38fc2" />
                  <circle cx="47" cy="22" r="3" fill="#9073b3" />
                  <circle cx="57" cy="24" r="3" fill="#b19cd9" />
                </svg>
                <h2 className="letter-title">Eishan &amp; Gayani</h2>
                <p className="letter-subtitle">Save the Date</p>
                <p className="letter-date">15th November 2026</p>
                <button className="letter-enter-btn" onClick={handleRevealInvitation}>
                  Open Invitation
                </button>
              </div>

              <div className="envelope-flap left"><LavenderTwig className="flap-decor left-flap-decor" /></div>
              <div className="envelope-flap right"><LavenderTwig className="flap-decor right-flap-decor" /></div>
              <div className="envelope-flap bottom" />
              <h1 className="envelope-closed-title">The INVITATION</h1>
              <div className="envelope-flap top" />

              <div className="envelope-seal-container">
                <button className="envelope-seal-btn" onClick={handleOpenEnvelope} title="Tap to open">
                  <div className="envelope-wax-seal"><SealStampSvg /></div>
                </button>
                <p className="seal-prompt-text">Tap to Break Seal</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Music Button ── */}
      <button className="audio-control-btn" onClick={toggleAudio} title={audioPlaying ? "Mute Music" : "Play Music"}>
        {audioPlaying ? (
          <svg viewBox="0 0 24 24"><path d="M12 4L9.91 6.09L12 8.18V4M20 12C20 14.53 18.82 16.79 17 18.27L18.43 19.7C20.62 17.78 22 15.05 22 12C22 7.33 18.78 3.4 14.5 2.37V4.44C17.65 5.43 20 8.44 20 12M4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.76C15.38 20.44 16.63 19.79 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3M12 5.86V10.73L9.14 7.86L12 5.86Z" /></svg>
        ) : (
          <svg viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>
        )}
      </button>

      {/* ── WhatsApp Floating Button ── */}
      <a
        href="https://wa.me/94702281572"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        title="Contact us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* ── Navigation ── */}
      <nav className={`nav ${navScrolled ? "scrolled" : ""}`} id="main-nav">
        <div className="nav-inner">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              className={activeSection === link.id ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="/admin" onClick={() => setMobileMenuOpen(false)}>Admin</a>
        </div>

        <button
          className={`nav-hamburger ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        {mobileMenuOpen && (
          <div className="nav-mobile-menu">
            {navLinks.map(link => (
              <a key={link.id} href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.label}</a>
            ))}
            <a href="/admin" onClick={() => setMobileMenuOpen(false)}>Admin</a>
          </div>
        )}
      </nav>

      {/* ── Hero Section ── */}
      <section className="hero" id="home">
        <div className="hero-card">
          <p className="kicker">Together with their families</p>
          <h1>Eishan <span className="hero-ampersand">&amp;</span> Gayani</h1>
          <p className="date">15th November 2026</p>
          <p className="hero-quote">&ldquo;Two souls, one heart &mdash; forever begins today&rdquo;</p>
          <p className="hero-invite">We warmly invite you to celebrate our wedding day with us.</p>
          <a href="#details" className="hero-scroll-btn">
            <span>Discover More</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="scroll-chevron">
              <path d="M7 10l5 5 5-5" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── Wedding Details ── */}
      <section className="section" id="details">
        <h2>Wedding Details</h2>
        <p className="section-subtitle">Everything you need to know for our special day</p>
        <div className="details">

          {/* Date Card */}
          <div
            className={`flip-card detail-card date-card-interactive ${isDateFlipped ? "flipped" : ""}`}
            onClick={() => handleCardClick(setDateFlipped, dateFlipped)}
            title="Tap for Details"
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-icon"><CalendarIconSvg /></div>
                <h3>Date</h3>
                <p>Sunday</p>
                <p className="highlight">15th November 2026</p>
                <span className="card-tap-hint">Tap for Details</span>
              </div>
              <div className="flip-card-back">
                <div className="location-details-overlay">
                  <span className="location-kicker">— The Date —</span>
                  <h4 className="location-title">15th Nov 2026</h4>
                  <p className="location-address">Sunday • 9:00 AM onwards</p>
                  <a
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Eishan+%26+Gayani%27s+Wedding&dates=20261115T033000Z/20261115T103000Z&details=We+warmly+invite+you+to+celebrate+our+special+wedding+day+with+us+at+Centauria+Wild%2C+Udawalawe.&location=Centauria+Wild%2C+Udawalawe&sf=true&output=xml"
                    target="_blank" rel="noopener noreferrer"
                    className="location-view-map-btn"
                    onClick={e => e.stopPropagation()}
                  >Add to Calendar</a>
                </div>
                <div className="location-badge">
                  <svg viewBox="0 0 100 100" style={{ width: 12, height: 12, marginRight: 6, verticalAlign: "middle", display: "inline-block" }} xmlns="http://www.w3.org/2000/svg">
                    <rect x="22" y="26" width="56" height="52" rx="8" stroke="currentColor" strokeWidth="6" fill="none" />
                    <line x1="22" y1="42" x2="78" y2="42" stroke="currentColor" strokeWidth="6" />
                  </svg>
                  15th Nov 2026
                </div>
              </div>
            </div>
          </div>

          {/* Venue Card */}
          <div
            className={`flip-card detail-card venue-card-interactive ${isVenueFlipped ? "flipped" : ""}`}
            onClick={() => handleCardClick(setVenueFlipped, venueFlipped)}
            title="Tap for Details"
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-icon"><LocationIconSvg /></div>
                <h3>Venue</h3>
                <p>Centauria Wild</p>
                <p className="highlight">Udawalawe</p>
                <span className="card-tap-hint">Tap for Details</span>
              </div>
              <div className="flip-card-back">
                <div className="location-details-overlay">
                  <span className="location-kicker">— The Location —</span>
                  <h4 className="location-title">Centauria Wild</h4>
                  <p className="location-address">Udawalawe, Sri Lanka</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Centauria+Wild+Udawalawe"
                    target="_blank" rel="noopener noreferrer"
                    className="location-view-map-btn"
                    onClick={e => e.stopPropagation()}
                  >Get Directions</a>
                </div>
                <div className="location-badge">
                  <svg viewBox="0 0 100 100" style={{ width: 12, height: 12, marginRight: 6, verticalAlign: "middle", display: "inline-block" }} xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 82 C45 74, 30 56, 30 42 C30 29, 39 20, 50 20 C61 20, 70 29, 70 42 C70 56, 55 74, 50 82 Z" stroke="currentColor" strokeWidth="6" fill="none" />
                    <circle cx="50" cy="42" r="6" fill="currentColor" />
                  </svg>
                  Centauria Wild
                </div>
              </div>
            </div>
          </div>

          {/* Ceremony Card */}
          <div
            className={`flip-card detail-card ceremony-card-interactive ${isCeremonyFlipped ? "flipped" : ""}`}
            onClick={() => handleCardClick(setCeremonyFlipped, ceremonyFlipped)}
            title="Tap for Details"
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-icon"><ClockIconSvg /></div>
                <h3>Ceremony</h3>
                <p>Morning</p>
                <p className="highlight">9:00 AM onwards</p>
                <span className="card-tap-hint">Tap for Details</span>
              </div>
              <div className="flip-card-back">
                <div className="location-details-overlay">
                  <span className="location-kicker">— Ceremony —</span>
                  <h4 className="location-title">Poruwa Ceremony</h4>
                  <p className="location-address">Traditional Rituals &amp; Blessings</p>
                  <a
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Eishan+%26+Gayani%27s+Wedding&dates=20261115T033000Z/20261115T103000Z&details=We+warmly+invite+you+to+celebrate+our+special+wedding+day+with+us+at+Centauria+Wild%2C+Udawalawe.&location=Centauria+Wild%2C+Udawalawe&sf=true&output=xml"
                    target="_blank" rel="noopener noreferrer"
                    className="location-view-map-btn"
                    onClick={e => e.stopPropagation()}
                  >Add to Calendar</a>
                </div>
                <div className="location-badge">
                  <svg viewBox="0 0 100 100" style={{ width: 12, height: 12, marginRight: 6, verticalAlign: "middle", display: "inline-block" }} xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="6" fill="none" />
                    <line x1="50" y1="50" x2="50" y2="34" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                    <line x1="50" y1="50" x2="38" y2="50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                  9:00 AM onwards
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* ── Countdown ── */}
      <section className="countdown-section">
        <p className="countdown-title">Countdown to our day</p>
        <div className="countdown">
          {[
            { value: countdown.days, label: "Days" },
            { value: countdown.hours, label: "Hours" },
            { value: countdown.minutes, label: "Mins" },
            { value: countdown.seconds, label: "Secs" },
          ].map(({ value, label }) => (
            <div key={label} className="countdown-item">
              <div className="countdown-value">{String(value).padStart(2, "0")}</div>
              <div className="countdown-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="timeline-section section" id="timeline">
        <h2>Event Timeline</h2>
        <p className="section-subtitle">A day to remember, beautifully planned</p>
        <div className="timeline">
          {timelineEvents.map((event, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-marker">
                <span className="timeline-icon" role="img" aria-label={event.title}>{event.icon}</span>
              </div>
              <div className="timeline-card">
                <span className="timeline-time">{event.time}</span>
                <h4 className="timeline-title">{event.title}</h4>
                <p className="timeline-desc">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Family Section ── */}
      <section className="section family-section">
        <h2>Our Families</h2>
        <p className="section-subtitle">With the blessings of our beloved parents</p>
        <div className="details parents">
          <div className="card family-card">
            <div className="family-card-badge">Groom&apos;s Family</div>
            <h3>Groom&apos;s Parents</h3>
            <div className="card-divider-gold" />
            <p className="parent-names">
              Mr. Weerasinghe Hakmana Arachchige Jayasiri
              <br />
              Mrs. Malagoda Pathirange Sandya
            </p>
          </div>
          <div className="card family-card">
            <div className="family-card-badge">Bride&apos;s Family</div>
            <h3>Bride&apos;s Parents</h3>
            <div className="card-divider-gold" />
            <p className="parent-names">
              Mr. [Bride&apos;s Father Name]
              <br />
              Mrs. [Bride&apos;s Mother Name]
            </p>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <div className="gallery-section-wrapper">
        <LavenderTwig className="gallery-bg-decor left-branch" />
        <LavenderTwig className="gallery-bg-decor right-branch" />
        <section className="section" id="gallery">
          <div className="gallery-header">
            <span className="gallery-kicker">M O M E N T S</span>
            <div className="gallery-divider" />
            <p className="gallery-subtitle">Pre-shoot memories from our special journey</p>
          </div>
          <div className="gallery">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className="photo"
                onClick={() => openLightbox(photo.src, photo.alt)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === "Enter" && openLightbox(photo.src, photo.alt)}
                aria-label={`View ${photo.alt}`}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <div className="photo-overlay">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="photo-zoom-icon">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setLightboxOpen(false)} role="dialog" aria-modal="true">
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close lightbox">
              &times;
            </button>
            <img src={lightboxImage} alt={lightboxAlt} className="lightbox-img" />
          </div>
        </div>
      )}

      {/* ── RSVP ── */}
      <section className="section rsvp" id="rsvp">
        <h2>RSVP</h2>
        <p className="rsvp-subtitle">
          Kindly let us know by <strong>15.10.2026</strong>
        </p>
        <div className="card rsvp-card">
          <form className="form" onSubmit={submitRSVP}>
            <div className="form-group">
              <label>Will you attend?</label>
              <div className="button-group">
                <input type="radio" id="yes" name="attending" value="Yes" required onChange={e => setAttending(e.target.value)} checked={attending === "Yes"} />
                <label htmlFor="yes" className="radio-label">🎉 Happily Attending</label>
                <input type="radio" id="no" name="attending" value="No" onChange={e => setAttending(e.target.value)} checked={attending === "No"} />
                <label htmlFor="no" className="radio-label">🥺 Regretfully Declining</label>
              </div>
            </div>

            <input name="name" type="text" placeholder="Full Name *" required className="form-input" />

            {attending === "Yes" && (
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
            )}

            <textarea
              name="message"
              placeholder="Message or Blessing (optional) 💌"
              className="form-input form-textarea"
              rows={3}
            />

            <button type="submit" className="submit-btn">Send RSVP</button>
          </form>
          {status && (
            <p className={`form-status ${status.includes("Thank you") ? "success" : status.includes("Could not") ? "error" : ""}`}>
              {status}
            </p>
          )}
        </div>
      </section>

      {/* ── Guest Wishes ── */}
      {wishes.length > 0 && (
        <section className="section wishes-section">
          <h2>Guest Blessings</h2>
          <p className="section-subtitle">Heartfelt wishes from our loved ones</p>
          <div className="wishes-grid">
            {wishes.map((wish, i) => (
              <div key={i} className="wish-card">
                <div className="wish-quote-mark">&ldquo;</div>
                <p className="wish-message">{wish.message}</p>
                <div className="wish-footer">
                  <div className="wish-avatar">{wish.name.charAt(0).toUpperCase()}</div>
                  <div>
                    <p className="wish-author">{wish.name}</p>
                    <p className="wish-time">{wish.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-names">Eishan &amp; Gayani</p>
          <div className="footer-heart">♥</div>
          <p className="footer-date">15 · 11 · 2026</p>
          <p className="footer-venue">Centauria Wild, Udawalawe, Sri Lanka</p>
          <p className="footer-quote">&ldquo;And they lived happily ever after&rdquo;</p>
          <div className="footer-divider" />
          <nav className="footer-links" aria-label="Footer navigation">
            {navLinks.map(link => (
              <a key={link.id} href={link.href}>{link.label}</a>
            ))}
          </nav>
          <p className="footer-copy">Made with ♥ for our special day</p>
        </div>
      </footer>
    </main>
  );
}
