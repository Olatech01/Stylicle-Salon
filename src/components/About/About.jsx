import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      style={{
        background: "#F5F0E8",
        padding: "72px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "420px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          alignItems: "stretch",
          position: "relative",
        }}
      >
        {/* IMAGE BLOCK */}
        <div style={{ position: "relative", zIndex: 2 }}>
          {/* Purple accent block behind image */}
          <div
            style={{
              position: "absolute",
              top: 28,
              left: -28,
              width: "88%",
              height: "calc(100% - 28px)",
              background: "#5B2D4E",
              borderRadius: 2,
              zIndex: 0,
            }}
          />
          <Image
            src="/long.svg"
            alt="Woman with beautiful hair"
            height={100}
            width={100}
            style={{
              position: "relative",
              zIndex: 1,
              width: "90%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
              minHeight: 340,
            }}
          />
        </div>

        {/* TEXT BLOCK */}
        <div
          style={{
            background: "#5B2D4E",
            padding: "52px 52px 52px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "'Arial', sans-serif",
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.6)",
              textTransform: "uppercase",
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            About Us
          </p>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(24px, 3vw, 38px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: 24,
              letterSpacing: "-0.01em",
            }}
          >
            Where beauty meets artistry — every visit, every time.
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: "'Arial', sans-serif",
              fontSize: 13.5,
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.8,
              maxWidth: 400,
            }}
          >
            Stylicle & Co. is a premium hair salon dedicated exclusively to
            women. Our stylists combine technical expertise with a genuine
            passion for hair, creating looks that are tailored to your
            personality and lifestyle. From blowouts to balayage, we&apos;ve built a
            warm, welcoming space where you always leave feeling your best.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;