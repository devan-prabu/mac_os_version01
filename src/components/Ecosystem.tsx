"use client";

const ecosystemTools = [
  {
    emoji: "▲",
    name: "Vercel",
    category: "Hosting",
    desc: "Edge-network hosting. Your site loads fast globally — automatically.",
    color: "#000000",
  },
  {
    emoji: "☁️",
    name: "Cloudflare",
    category: "Security",
    desc: "CDN, DDoS protection, and caching. Enterprise-grade, free tier.",
    color: "#F48120",
  },
  {
    emoji: "🦔",
    name: "PostHog",
    category: "Analytics",
    desc: "Open-source product analytics. You own your data, forever.",
    color: "#F54E00",
  },
  {
    emoji: "✉️",
    name: "Zoho Mail",
    category: "Email",
    desc: "Professional custom-domain email at your company name.",
    color: "#E42527",
  },
  {
    emoji: "💬",
    name: "WhatsApp API",
    category: "Automation",
    desc: "Official Meta-verified API. Not a grey-zone workaround.",
    color: "#25D366",
  },
  {
    emoji: "📊",
    name: "Supabase",
    category: "Database",
    desc: "Open-source Postgres with real-time subscriptions for dashboards.",
    color: "#3ECF8E",
  },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      style={{
        padding: "80px 0",
        background: "var(--bg-grain)",
        borderTop: "1px solid var(--table-border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="tag mb-4 inline-block">// ecosystem.mdx</span>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(24px, 4vw, 34px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: 12,
            }}
          >
            The Technology Stack
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 460, margin: "0 auto" }}>
            Every tool we use is best-in-class and — where possible — free for you to run forever. No vendor lock-in, no surprise bills.
          </p>
        </div>

        {/* Tech grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
          }}
        >
          {ecosystemTools.map((tool, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: "20px",
                transition: "transform 0.15s, box-shadow 0.15s",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: tool.color + "18",
                  border: `1.5px solid ${tool.color}35`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  marginBottom: 12,
                }}
              >
                {tool.emoji}
              </div>
              <div
                style={{
                  fontSize: "8px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: tool.color,
                  fontFamily: "monospace",
                  marginBottom: 4,
                }}
              >
                {tool.category}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 6,
                }}
              >
                {tool.name}
              </div>
              <p style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                {tool.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          style={{
            marginTop: 32,
            background: "#3B5BE5",
            borderRadius: 10,
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
            boxShadow: "4px 4px 0px rgba(0,0,0,0.15)",
            border: "1.5px solid #2848C8",
          }}
        >
          <div style={{ flex: 1, minWidth: 200 }}>
            <div
              style={{
                fontSize: "8px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.6)",
                fontFamily: "monospace",
                marginBottom: 6,
              }}
            >
              // insight
            </div>
            <div
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.35,
              }}
            >
              All core tools have generous free tiers. <br />
              Your monthly hosting cost? Often&nbsp;
              <span style={{ color: "#FFBD2E" }}>$0.</span>
            </div>
          </div>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "white",
              fontWeight: 700,
              fontSize: "13px",
              padding: "10px 20px",
              borderRadius: 6,
              border: "1.5px solid rgba(0,0,0,0.15)",
              boxShadow: "2px 2px 0 rgba(0,0,0,0.2)",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "all 0.15s",
            }}
          >
            Let&apos;s talk stack →
          </a>
        </div>
      </div>
    </section>
  );
}
