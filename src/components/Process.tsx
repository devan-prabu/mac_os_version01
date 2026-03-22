"use client";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    emoji: "📞",
    title: "Discovery Call",
    file: "01_discovery.mdx",
    desc: "30-minute strategy call. We learn about your business, goals, and what existing tools you use. Zero pitch, pure diagnosis.",
    time: "Day 1",
  },
  {
    num: "02",
    emoji: "🎨",
    title: "Design & Architecture",
    file: "02_design.mdx",
    desc: "We create your website design and system architecture. You review and approve before any code is written.",
    time: "Days 2–5",
  },
  {
    num: "03",
    emoji: "⚙️",
    title: "Build & Integrate",
    file: "03_build.mdx",
    desc: "Development, API integrations, dashboard builds. Everything connected, tested, and production-ready.",
    time: "Days 6–14",
  },
  {
    num: "04",
    emoji: "🚀",
    title: "Launch & Handover",
    file: "04_launch.mdx",
    desc: "We deploy to Vercel, configure Cloudflare, connect all tools, and walk you through everything live.",
    time: "Day 15",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      style={{
        padding: "80px 0",
        background: "var(--bg-grain)",
        borderTop: "1px solid var(--table-border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="tag mb-4 inline-block">// process.mdx</span>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(24px, 4vw, 34px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "12px",
            }}
          >
            How It Works
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 440, margin: "0 auto" }}>
            From first call to live system — typically 15 business days.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="os-window"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Chrome */}
              <div className="os-window-chrome">
                <div className="win-controls">
                  <div className="win-btn win-btn-close">×</div>
                  <div className="win-btn win-btn-min">—</div>
                  <div className="win-btn win-btn-max">□</div>
                </div>
                <div className="win-title">{step.file} ▾</div>
              </div>

              {/* Content */}
              <div style={{ padding: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 12,
                  }}
                >
                  <span style={{ fontSize: "28px" }}>{step.emoji}</span>
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "monospace",
                      color: "white",
                      background: "var(--accent)",
                      padding: "2px 8px",
                      borderRadius: 4,
                      fontWeight: 700,
                    }}
                  >
                    {step.time}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-muted)",
                    fontFamily: "monospace",
                    marginBottom: 4,
                  }}
                >
                  Step {step.num}
                </div>
                <h3
                  className="font-heading"
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 8,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>

                {/* Progress dots */}
                <div
                  style={{
                    display: "flex",
                    gap: 4,
                    marginTop: 14,
                  }}
                >
                  {steps.map((_, j) => (
                    <div
                      key={j}
                      style={{
                        width: j <= i ? 20 : 8,
                        height: 4,
                        borderRadius: 2,
                        background: j <= i ? "var(--accent)" : "var(--table-border)",
                        transition: "width 0.3s",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
