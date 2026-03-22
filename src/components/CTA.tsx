"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "80px 0",
        background: "var(--bg-grain)",
        borderTop: "1px solid var(--table-border)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="tag mb-4 inline-block">// contact.mdx</span>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: 12,
            }}
          >
            Ready to Build Your System?
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 420, margin: "0 auto" }}>
            Drop us a message and we&apos;ll set up a no-pressure 30-minute discovery call.
          </p>
        </div>

        {/* Contact Form in OS Window */}
        <motion.div
          className="os-window"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Chrome */}
          <div className="os-window-chrome">
            <div className="win-controls">
              <div className="win-btn win-btn-close">×</div>
              <div className="win-btn win-btn-min">—</div>
              <div className="win-btn win-btn-max">□</div>
            </div>
            <div className="win-title">contact.mdx ▾</div>
          </div>

          {/* Toolbar */}
          <div className="os-toolbar">
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "monospace" }}>
              new_inquiry.init —&nbsp;
            </span>
            <span
              style={{
                fontSize: "10px",
                background: "#28CA4118",
                color: "#28CA41",
                border: "1px solid #28CA41",
                borderRadius: 4,
                padding: "1px 7px",
                fontWeight: 700,
                fontFamily: "monospace",
              }}
            >
              ● READY
            </span>
          </div>

          {/* Form */}
          <div style={{ padding: "28px 28px", background: "var(--window-bg)" }}>
            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 20px",
                }}
              >
                <div style={{ fontSize: "48px", marginBottom: 16 }}>🎉</div>
                <h3
                  className="font-heading"
                  style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}
                >
                  Message received!
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                  Hydrating the inbox now... We&apos;ll get back to you within 24 hours.{" "}
                  <span style={{ color: "var(--accent)" }}>🦔</span>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Row 1 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: "block",
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                        color: "var(--text-muted)",
                        fontFamily: "monospace",
                        marginBottom: 5,
                      }}
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      style={labelStyle}
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@company.ae"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label htmlFor="business" style={labelStyle}>Business Name</label>
                    <input
                      id="business"
                      type="text"
                      placeholder="Your Company LLC"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" style={labelStyle}>I&apos;m interested in</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="">Select a service...</option>
                      <option value="web">Premium Website</option>
                      <option value="dashboard">Business Dashboard</option>
                      <option value="whatsapp">WhatsApp Automation</option>
                      <option value="full">Full System Package</option>
                      <option value="other">Not sure yet</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" style={labelStyle}>Your Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your business and what you're trying to achieve..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary"
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "center",
                    padding: "13px",
                    fontSize: "15px",
                    opacity: sending ? 0.7 : 1,
                  }}
                >
                  {sending ? (
                    <>Sending... <span style={{ animation: "spin 1s linear infinite", display: "inline-block" }}>⏳</span></>
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </button>

                <p style={{ fontSize: "11px", color: "var(--text-muted)", textAlign: "center", fontFamily: "monospace" }}>
                  // No spam, no pressure. Just a real conversation.
                </p>
              </form>
            )}
          </div>
        </motion.div>

        {/* Direct contact */}
        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:admin@justautomate.work"
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              textDecoration: "none",
              fontFamily: "monospace",
            }}
          >
            ✉️ admin@justautomate.work
          </a>
          <a
            href="https://wa.me/971000000000"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              textDecoration: "none",
              fontFamily: "monospace",
            }}
          >
            💬 WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "9px 12px",
  borderRadius: 6,
  border: "1.5px solid var(--table-border)",
  background: "var(--window-bg)",
  fontSize: "13px",
  color: "var(--text-primary)",
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.15s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "10px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  color: "var(--text-muted)",
  fontFamily: "monospace",
  marginBottom: 5,
};
