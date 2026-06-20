"use client"
import React, { useState } from "react";

const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" stroke="#C9A98A" strokeWidth="1.5" />
    <path
      d="M8.5 14.5L12 18L19.5 10"
      stroke="#C9A98A"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlayIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <polygon points="7,4 19,11 7,18" fill="#2c2c2c" />
  </svg>
);

const stages = [
  {
    title: "The Consultation Stage",
    desc: "We start with a one-on-one consultation to understand your hair type, lifestyle, and the look you're going for.",
  },
  {
    title: "The Preparation Stage",
    desc: "Your hair is gently cleansed, conditioned, and assessed by our stylists before any colour or styling begins.",
  },
  {
    title: "The Styling Stage",
    desc: "Our expert stylists bring your vision to life using premium products crafted exclusively for women's hair.",
  },
];

const Journey = ({ videoSrc = "/your-video.mp4" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "64px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "72px",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* LEFT COLUMN */}
        <div>
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "'Arial', sans-serif",
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "#C9A98A",
              textTransform: "uppercase",
              marginBottom: 14,
              fontWeight: 600,
            }}
          >
            Our Experience
          </p>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.15,
              marginBottom: 22,
              letterSpacing: "-0.01em",
            }}
          >
            Where every woman&apos;s hair story begins
          </h2>

          {/* Body copy */}
          <p
            style={{
              fontFamily: "'Arial', sans-serif",
              fontSize: 14,
              color: "#555",
              lineHeight: 1.75,
              marginBottom: 36,
              maxWidth: 460,
            }}
          >
            Stylicle & Co. was founded with one belief: every woman deserves a
            salon experience that&apos;s as unique as she is. From precision cuts to
            transformative colour treatments, our team of expert stylists brings
            artistry and care to every appointment. We&apos;ve created a space where
            you feel heard, pampered, and leave looking exactly the way you
            envisioned — or better.
          </p>

          {/* Methodology heading */}
          <h3
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: 18,
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: 24,
            }}
          >
            Our Process :
          </h3>

          {/* Stages */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {stages.map((stage, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: 14 }}
              >
                <div style={{ flexShrink: 0, marginTop: 1 }}>
                  <CheckIcon />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#1a1a1a",
                      marginBottom: 4,
                    }}
                  >
                    {stage.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: 13,
                      color: "#777",
                      lineHeight: 1.65,
                    }}
                  >
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN – video player */}
        <div
          style={{
            position: "relative",
            borderRadius: 4,
            overflow: "hidden",
            aspectRatio: "4/3",
            background: "#111",
          }}
        >
          {/* Video always present */}
          <video
            src={videoSrc}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            controls={isPlaying}
            autoPlay={isPlaying}
            onEnded={() => setIsPlaying(false)}
          />

          {/* Play overlay — shown until user hits play */}
          {!isPlaying && (
            <>
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.25)" }} />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={() => setIsPlaying(true)}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.92)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <PlayIcon />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Journey;