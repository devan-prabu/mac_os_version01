"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Digital Foundation",
    file: "foundation.pkg",
    badge: "Most Popular",
    badgeColor: "var(--accent)",
    accentColor: "var(--accent)",
    bestFor: "Businesses launching or relaunching their online presence",
    features: [
      "Premium Website Design & Development",
      "Vercel Hosting (free)",
      "Cloudflare CDN + Security (free)",
      "PostHog Analytics (free)",
      "Zoho Mail Custom Domain Email (free)",
      "SEO Setup & Google Search Console",
    ],
    cta: "Start with Foundation",
    featured: false,
  },
  {
    name: "Connected Growth",
    file: "growth.pkg",
    badge: "Best Value",
    badgeColor: "#3B5BE5",
    accentColor: "#3B5BE5",
    bestFor: "Businesses wanting to automate sales and support communication",
    features: [
      "Everything in Digital Foundation",
      "WhatsApp Business API Integration",
      "Automated message flows (3 flows)",
      "Lead capture automation",
      "Chat analytics dashboard",
      "Meta Business Suite setup",
    ],
    cta: "Connect Your Growth",
    featured: false,
  },
  {
    name: "Data Command",
    file: "command.pkg",
    badge: null,
    badgeColor: "#25D366",
    accentColor: "#25D366",
    bestFor: "Business owners who want real-time visibility into performance",
    features: [
      "Everything in Digital Foundation",
      "Business Dashboard (custom built)",
      "Zoho Books integration",
      "Sales vs. target visualization",
      "Operational KPI tracking",
      "Role-based access control",
    ],
    cta: "Command Your Data",
    featured: false,
  },
  {
    name: "Full System",
    file: "system.exe",
    badge: "Complete Ecosystem",
    badgeColor: "var(--accent)",
    accentColor: "var(--accent)",
    bestFor: "Ambitious Dubai businesses ready for full digital transformation",
    features: [
      "Premium Website + All Integrations",
      "WhatsApp Business API + Automation",
      "Full Analytics Flows",
      "Custom Business Dashboard",
      "Zoho Books + Operational Data",
      "Monthly Strategy Support Call",
    ],
    cta: "Build My System",
    featured: true,
  },
];

export default function Packages() {
  return (
    <section
      id="packages"
      style={{
        padding: "80px 0",
        background: "rgba(232,224,208,0.65)",
        borderTop: "1px solid var(--table-border)",
        borderBottom: "1px solid var(--table-border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="tag mb-4 inline-block">// packages.mdx</span>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(24px, 4vw, 34px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "12px",
            }}
          >
            Choose Your Stack
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 480, margin: "0 auto" }}>
            Mix and match — or go full ecosystem. Each package is a complete, working system.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              className="os-window flex flex-col"
              style={
                pkg.featured
                  ? {
                      border: `2px solid ${pkg.accentColor}`,
                      boxShadow: `0 0 0 4px ${pkg.accentColor}18, var(--card-shadow)`,
                    }
                  : {}
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {/* Window chrome */}
              <div className="os-window-chrome">
                <div className="win-controls">
                  <div className="win-btn win-btn-close">×</div>
                  <div className="win-btn win-btn-min">—</div>
                  <div className="win-btn win-btn-max">□</div>
                </div>
                <div className="win-title">{pkg.file} ▾</div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                {/* Badge */}
                {pkg.badge && (
                  <span
                    className="tag"
                    style={{
                      background: pkg.badgeColor + "18",
                      borderColor: pkg.badgeColor + "55",
                      color: pkg.badgeColor,
                      fontWeight: 700,
                      fontSize: "10px",
                      letterSpacing: "0.05em",
                      alignSelf: "flex-start",
                      marginBottom: "10px",
                    }}
                  >
                    {pkg.badge}
                  </span>
                )}

                <h3
                  className="font-heading"
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    marginBottom: 4,
                  }}
                >
                  {pkg.name}
                </h3>
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    marginBottom: 16,
                    paddingBottom: 16,
                    borderBottom: "1px solid var(--table-border)",
                    lineHeight: 1.5,
                  }}
                >
                  Best for: {pkg.bestFor}
                </p>

                {/* Features */}
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    flex: 1,
                    marginBottom: 20,
                  }}
                >
                  {pkg.features.map((feat, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "flex-start",
                        fontSize: "13px",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: 4,
                          background: pkg.accentColor,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        <Check size={11} style={{ color: "white" }} />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "11px",
                    borderRadius: 6,
                    fontWeight: 700,
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "all 0.15s ease",
                    ...(pkg.featured
                      ? {
                          background: pkg.accentColor,
                          color: "white",
                          border: `1.5px solid rgba(0,0,0,0.1)`,
                          boxShadow: "var(--btn-shadow)",
                        }
                      : {
                          background: "white",
                          color: "var(--text-primary)",
                          border: "1.5px solid var(--table-border)",
                          boxShadow: "var(--btn-shadow)",
                        }),
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = "translate(-1px, -1px)";
                    el.style.boxShadow = "3px 3px 0px rgba(0,0,0,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = "translate(0, 0)";
                    el.style.boxShadow = "var(--btn-shadow)";
                  }}
                >
                  {pkg.cta} →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategy CTA banner */}
        <div
          className="card"
          style={{
            padding: "20px 28px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: "24px" }}>💬</span>
          <p style={{ margin: 0, fontSize: "14px", color: "var(--text-secondary)" }}>
            Not sure which is right for you?{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              Book a 30-minute strategy call
            </strong>{" "}
            — no commitment, no pressure.
          </p>
          <a href="#contact" className="btn-secondary" style={{ fontSize: "13px", padding: "8px 18px" }}>
            Book Call →
          </a>
        </div>
      </div>
    </section>
  );
}
