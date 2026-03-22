"use client";
import { motion } from "framer-motion";

const logos = [
  { emoji: "▲", name: "Vercel" },
  { emoji: "☁️", name: "Cloudflare" },
  { emoji: "🦔", name: "PostHog" },
  { emoji: "✉️", name: "Zoho Mail" },
  { emoji: "💬", name: "WhatsApp API" },
  { emoji: "📊", name: "Supabase" },
  { emoji: "⚡", name: "Next.js" },
  { emoji: "🛡️", name: "DDoS Protect" },
];

export default function TrustBar() {
  return (
    <section
      style={{
        background: "var(--nav-bg)",
        borderTop: "1px solid #333",
        borderBottom: "1px solid #333",
        overflow: "hidden",
        padding: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 0",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Gradient fade edges */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 80,
            background: "linear-gradient(to right, var(--nav-bg), transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 80,
            background: "linear-gradient(to left, var(--nav-bg), transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        {/* Marquee */}
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          style={{ width: "max-content", willChange: "transform" }}
        >
          {[...logos, ...logos].map((l, i) => (
            <div
              key={i}
              className="flex items-center gap-2"
              style={{ flexShrink: 0 }}
            >
              <span style={{ fontSize: "16px" }}>{l.emoji}</span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "0.02em",
                  fontFamily: "monospace",
                  whiteSpace: "nowrap",
                }}
              >
                {l.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
