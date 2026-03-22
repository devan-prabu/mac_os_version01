"use client";
import { motion } from "framer-motion";

const problems = [
  {
    icon: "😤",
    title: "Generic Templates",
    desc: "Your website looks like every other Dubai business. Zero differentiation from competitors.",
  },
  {
    icon: "📉",
    title: "No Data Visibility",
    desc: "You're guessing about what's working. Spreadsheets updated manually, once a week.",
  },
  {
    icon: "📱",
    title: "Missed WhatsApp Leads",
    desc: "Leads message you at 2am. By morning they've already hired someone else.",
  },
];

const solutions = [
  {
    icon: "🎨",
    color: "var(--accent)",
    title: "Custom-Built Websites",
    desc: "No templates. Designed from scratch for your brand, built on Next.js for enterprise performance.",
  },
  {
    icon: "📊",
    color: "#3B5BE5",
    title: "Live Business Dashboards",
    desc: "Real-time KPIs from all your tools in one beautifully designed control panel.",
  },
  {
    icon: "🤖",
    color: "#28CA41",
    title: "WhatsApp Automation",
    desc: "Capture, qualify, and follow up with every lead — automatically, 24/7.",
  },
];

export default function ProblemSolution() {
  return (
    <section
      id="services-intro"
      style={{
        padding: "80px 0",
        background: "rgba(232,224,208,0.55)",
        borderTop: "1px solid var(--table-border)",
        borderBottom: "1px solid var(--table-border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="tag mb-4 inline-block">// problem_statement.mdx</span>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "12px",
            }}
          >
            The Problems Every Dubai Business <br className="hidden md:block" /> Owner Recognises
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 500, margin: "0 auto" }}>
            And the systems we build to fix them — permanently.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "32px",
            alignItems: "start",
          }}
        >
          {/* PROBLEMS */}
          <div className="flex flex-col gap-4">
            <div
              style={{
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginBottom: 4,
                fontFamily: "monospace",
              }}
            >
              ❌ Without JustAutomate
            </div>
            {problems.map((p, i) => (
              <motion.div
                key={i}
                className="card"
                style={{ padding: "18px 20px" }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ fontSize: "22px", marginBottom: 8 }}>{p.icon}</div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "var(--text-primary)",
                    marginBottom: 4,
                  }}
                >
                  {p.title}
                </div>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Arrow divider */}
          <div
            className="hidden md:flex flex-col items-center justify-center"
            style={{ paddingTop: 60, gap: 8 }}
          >
            <div
              style={{
                width: 1,
                height: 40,
                background: "var(--table-border)",
              }}
            />
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 900,
                fontSize: "16px",
                boxShadow: "var(--btn-shadow)",
                flexShrink: 0,
              }}
            >
              →
            </div>
            <div
              style={{
                width: 1,
                height: 40,
                background: "var(--table-border)",
              }}
            />
          </div>

          {/* SOLUTIONS */}
          <div className="flex flex-col gap-4">
            <div
              style={{
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginBottom: 4,
                fontFamily: "monospace",
              }}
            >
              ✅ With JustAutomate
            </div>
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                className="card"
                style={{
                  padding: "18px 20px",
                  borderColor: s.color + "44",
                  borderLeftWidth: "3px",
                  borderLeftColor: s.color,
                }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ fontSize: "22px", marginBottom: 8 }}>{s.icon}</div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "var(--text-primary)",
                    marginBottom: 4,
                  }}
                >
                  {s.title}
                </div>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
