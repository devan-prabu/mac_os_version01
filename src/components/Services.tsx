"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    file: "web_design.mdx",
    emoji: "🌐",
    color: "var(--accent)",
    id: "01",
    title: "Premium Web Design & Development",
    statement: "Your brand's digital home — built to convert, secured to enterprise standard.",
    description:
      "We design and develop fast, beautiful, mobile-first websites that don't just look good — they perform. Every site is production-ready, SEO-structured, and equipped with enterprise technologies.",
    included: [
      "Custom design — no templates, no WordPress, no shortcuts",
      "Mobile-first, fully responsive across all screen sizes",
      "Vercel hosting — global edge network, automatic HTTPS",
      "Cloudflare CDN & DDoS protection — enterprise-grade security",
      "PostHog analytics integration — see who visits, what they click",
      "Zoho Mail setup — professional custom domain email",
      "SEO-optimized structure — meta tags, Open Graph, sitemap",
      "Google Search Console & Bing Webmaster setup",
      "Performance-optimized (Core Web Vitals ready)",
    ],
    badges: ["Next.js", "Tailwind", "Vercel", "Cloudflare", "PostHog", "Zoho Mail"],
  },
  {
    file: "dashboard.mdx",
    emoji: "📊",
    color: "#3B5BE5",
    id: "02",
    title: "Business Dashboards & Analytics",
    statement: "Real-time visibility into every corner of your business — no spreadsheets.",
    description:
      "We build custom interactive dashboards that pull live data from your existing tools — Zoho Books, sales platforms, operational systems — and present them in a clean, actionable view.",
    included: [
      "Custom-built dashboard tailored to your KPIs and business model",
      "Zoho Books integration — live revenue, invoices, expense tracking",
      "Sales vs. target visualization with progress indicators",
      "Real-time or scheduled data refresh",
      "Role-based access — owner view vs. manager view",
      "Mobile-responsive dashboard design",
      "PostHog funnel analytics — understand your customer journey",
      "Monthly review support",
    ],
    badges: ["Zoho Books", "PostHog", "Supabase", "Recharts", "Next.js"],
  },
  {
    file: "whatsapp.mdx",
    emoji: "💬",
    color: "#25D366",
    id: "03",
    title: "WhatsApp Business API",
    statement: "Turn WhatsApp into your most powerful sales channel — automated.",
    description:
      "The WhatsApp Business API transforms your client communication from a manual, reactive process into an automated, intelligent system integrated deeply with your business workflows.",
    included: [
      "Official WhatsApp Business API setup (Meta verified)",
      "Automated welcome messages, reply flows, and follow-up sequences",
      "Lead capture via WhatsApp — directly into your CRM or dashboard",
      "Broadcast messaging — promotions, updates, reminders",
      "Chat analytics dashboard — chats received, response rate, conversion",
      "Sales conversion tracking",
      "Integration with your website — WhatsApp CTA on every page",
      "Meta Business Suite configuration and optimization",
    ],
    badges: ["WhatsApp API", "Meta", "Zoho CRM", "Dashboard Integration"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "80px 0",
        background: "var(--bg-grain)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header OS-window style */}
        <div className="text-center mb-12">
          <span className="tag mb-4 inline-block">// services.mdx</span>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(24px, 4vw, 34px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "12px",
            }}
          >
            Three Services. One Ecosystem.
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 480, margin: "0 auto" }}>
            Use them together or separately — each one is a complete, working system.
          </p>
        </div>

        {/* Service Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {services.map((svc, i) => (
            <motion.div
              key={i}
              className="os-window flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              {/* Window chrome */}
              <div className="os-window-chrome">
                <div className="win-controls">
                  <div className="win-btn win-btn-close">×</div>
                  <div className="win-btn win-btn-min">—</div>
                  <div className="win-btn win-btn-max">□</div>
                </div>
                <div className="win-title">{svc.file} ▾</div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Icon + number */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 10,
                      background: svc.color + "18",
                      border: `1.5px solid ${svc.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "26px",
                    }}
                  >
                    {svc.emoji}
                  </div>
                  <span
                    style={{
                      fontSize: "42px",
                      fontWeight: 900,
                      color: svc.color + "18",
                      fontFamily: "DM Sans, sans-serif",
                      lineHeight: 1,
                    }}
                  >
                    {svc.id}
                  </span>
                </div>

                <h3
                  className="font-heading"
                  style={{ fontSize: "17px", fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: svc.color,
                    marginBottom: 10,
                    lineHeight: 1.5,
                  }}
                >
                  {svc.statement}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    marginBottom: 16,
                    flexShrink: 0,
                  }}
                >
                  {svc.description}
                </p>

                {/* Included list */}
                <div
                  style={{
                    borderTop: "1px solid var(--table-border)",
                    paddingTop: 14,
                    marginBottom: 14,
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--text-muted)",
                      marginBottom: 10,
                      fontFamily: "monospace",
                    }}
                  >
                    What's Included
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                    {svc.included.map((item, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          gap: 8,
                          alignItems: "flex-start",
                          fontSize: "12px",
                          color: "var(--text-secondary)",
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircle2
                          size={13}
                          style={{ color: svc.color, flexShrink: 0, marginTop: 2 }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                  {svc.badges.map((b, j) => (
                    <span
                      key={j}
                      className="tag"
                      style={{ fontSize: "11px", fontFamily: "monospace" }}
                    >
                      {b}
                    </span>
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
