"use client";
import { Linkedin, Instagram, Phone } from "lucide-react";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Premium Web Design", href: "#services" },
      { name: "Business Dashboards", href: "#services" },
      { name: "WhatsApp Automation", href: "#services" },
      { name: "Full System Package", href: "#packages" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "How It Works", href: "#process" },
      { name: "FAQ", href: "#faq" },
      { name: "Strategy Call", href: "#contact" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Tech Stack",
    links: [
      { name: "▲ Vercel", href: "https://vercel.com" },
      { name: "☁️ Cloudflare", href: "https://cloudflare.com" },
      { name: "🦔 PostHog", href: "https://posthog.com" },
      { name: "✉️ Zoho Mail", href: "https://zoho.com/mail" },
      { name: "💬 WhatsApp API", href: "https://business.whatsapp.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--nav-bg)",
        borderTop: "2px solid #333",
        padding: "56px 0 24px",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr repeat(3, auto)",
            gap: "40px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
          className="flex-col md:grid"
        >
          {/* Brand col */}
          <div>
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                textDecoration: "none",
                marginBottom: 16,
              }}
            >
              <span style={{ fontSize: "20px" }}>💾</span>
              <span
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 800,
                  fontSize: "18px",
                  color: "#ffffff",
                }}
              >
                Just
                <span style={{ color: "var(--accent)" }}>Automate</span>
                <span
                  style={{
                    display: "inline-block",
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    marginLeft: 2,
                    verticalAlign: "middle",
                  }}
                />
              </span>
            </a>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.65,
                maxWidth: 240,
                marginBottom: 20,
              }}
            >
              Helping Dubai businesses grow through premium web design, automation, and data systems.
            </p>
            {/* Socials */}
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { Icon: Linkedin, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Phone, href: "tel:+" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.6)",
                    transition: "all 0.15s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: "9px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "monospace",
                  marginBottom: 14,
                }}
              >
                {col.title}
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.55)",
                        textDecoration: "none",
                        transition: "color 0.12s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)";
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.08)",
            marginBottom: 20,
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <p
            style={{
              fontSize: "11px",
              color: "rgba(255,255,255,0.3)",
              fontFamily: "monospace",
            }}
          >
            © 2025 JustAutomate · Built in Dubai 🇦🇪 ·{" "}
            <a
              href="https://justautomate.work"
              style={{ color: "var(--accent)", textDecoration: "none" }}
            >
              justautomate.work
            </a>
          </p>
          <p
            style={{
              fontSize: "11px",
              color: "rgba(255,255,255,0.25)",
              fontFamily: "monospace",
            }}
          >
            // all systems operational ●
          </p>
        </div>
      </div>
    </footer>
  );
}
