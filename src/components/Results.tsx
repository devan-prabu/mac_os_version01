"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "15", unit: "days", label: "Average delivery time", emoji: "⚡" },
  { value: "100", unit: "%", label: "Custom — zero templates", emoji: "🎨" },
  { value: "24/7", unit: "", label: "Automation always running", emoji: "🤖" },
  { value: "AED 0", unit: "", label: "Upfront payment required", emoji: "💎" },
];

const testimonials = [
  {
    text: "Most agencies show you a cookie-cutter template and call it custom. JustAutomate actually built something from scratch. The dashboard alone has saved me 5 hours a week.",
    name: "Khalid A.",
    role: "CEO, Dubai Trading Co.",
    avatar: "👨‍💼",
  },
  {
    text: "The WhatsApp automation captured 3 leads overnight that I would have missed. That's paid for the entire project twice over in two weeks.",
    name: "Sara M.",
    role: "Founder, Wellness Studio",
    avatar: "👩‍💼",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      style={{
        padding: "80px 0",
        background: "rgba(232,224,208,0.55)",
        borderTop: "1px solid var(--table-border)",
        borderBottom: "1px solid var(--table-border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="tag mb-4 inline-block">// results.mdx</span>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(24px, 4vw, 34px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: 12,
            }}
          >
            What Clients Actually Get
          </h2>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16,
            marginBottom: 40,
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="card"
              style={{ padding: "24px", textAlign: "center" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div style={{ fontSize: "28px", marginBottom: 8 }}>{stat.emoji}</div>
              <div
                style={{
                  fontSize: "clamp(28px, 4vw, 38px)",
                  fontWeight: 900,
                  color: "var(--accent)",
                  fontFamily: "DM Sans, sans-serif",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {stat.value}
                <span style={{ fontSize: "0.5em", color: "var(--text-muted)" }}>{stat.unit}</span>
              </div>
              <div style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 500 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials as OS windows */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="os-window"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="os-window-chrome">
                <div className="win-controls">
                  <div className="win-btn win-btn-close">×</div>
                  <div className="win-btn win-btn-min">—</div>
                  <div className="win-btn win-btn-max">□</div>
                </div>
                <div className="win-title">review_{i + 1}.mdx ▾</div>
              </div>

              <div style={{ padding: "20px 22px" }}>
                {/* Stars */}
                <div style={{ fontSize: "13px", marginBottom: 10 }}>⭐⭐⭐⭐⭐</div>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.7,
                    color: "var(--text-secondary)",
                    marginBottom: 14,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "var(--tag-bg)",
                      border: "1.5px solid var(--table-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
