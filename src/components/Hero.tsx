"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Bold, Italic, Underline, Link2, Search, Settings } from "lucide-react";

/* ─── Sidebar icon entries ─── */
const leftIcons = [
  { emoji: "📄", label: "home.mdx" },
  { emoji: "💰", label: "Pricing" },
  { emoji: "📚", label: "Docs" },
  { emoji: "🎬", label: "demo.mov" },
  { emoji: "📁", label: "Services" },
  { emoji: "⚙️", label: "Settings" },
];

const rightIcons = [
  { emoji: "🦔", label: "Why Us?" },
  { emoji: "🔔", label: "Changelog" },
  { emoji: "📖", label: "Handbook" },
  { emoji: "🛍️", label: "Store" },
  { emoji: "💼", label: "Work here" },
  { emoji: "🗑️", label: "Trash" },
];

/* ─── OS Toolbar ─── */
function OsToolbar() {
  return (
    <div className="os-toolbar">
      {/* Nav arrows */}
      <button className="toolbar-btn" title="Back">
        <ArrowLeft size={13} />
      </button>
      <button className="toolbar-btn" title="Forward">
        <ArrowRight size={13} />
      </button>
      <div className="toolbar-divider" />
      {/* Zoom */}
      <select className="toolbar-dropdown" defaultValue="100">
        <option value="75">75%</option>
        <option value="100">100%</option>
        <option value="125">125%</option>
      </select>
      <div className="toolbar-divider" />
      {/* Text format  */}
      <button className="toolbar-btn" title="Bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <Bold size={13} />
      </button>
      <button className="toolbar-btn" title="Italic">
        <Italic size={13} />
      </button>
      <button className="toolbar-btn" title="Underline">
        <Underline size={13} />
      </button>
      <div className="toolbar-divider" />
      {/* Font */}
      <select className="toolbar-dropdown" defaultValue="inter">
        <option value="inter">Inter</option>
        <option value="dm">DM Sans</option>
        <option value="mono">JetBrains Mono</option>
      </select>
      <div className="toolbar-divider" />
      <button className="toolbar-btn" title="Link">
        <Link2 size={13} />
      </button>
      <button className="toolbar-btn" title="Search">
        <Search size={13} />
      </button>
      <button className="toolbar-btn" title="Settings">
        <Settings size={13} />
      </button>
      {/* Spacer */}
      <div style={{ flex: 1 }} />
      {/* CTA in toolbar */}
      <a href="#contact" className="btn-primary" style={{ padding: "5px 14px", fontSize: "12px" }}>
        Get started — free
      </a>
    </div>
  );
}

/* ─── Desktop Sidebar Icon ─── */
function DesktopIcon({ emoji, label }: { emoji: string; label: string }) {
  return (
    <div className="desktop-icon">
      <div className="icon-img" style={{ fontSize: "30px" }}>
        {emoji}
      </div>
      <span className="icon-label">{label}</span>
    </div>
  );
}

/* ─── Main Hero ─── */
export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col"
      style={{ paddingTop: "48px", background: "transparent" }}
    >
      {/* === Desktop Workspace Row === */}
      <div
        className="flex flex-1 gap-0"
        style={{ minHeight: "calc(100vh - 48px)" }}
      >
        {/* Left Sidebar */}
        <aside
          className="sidebar-left hidden lg:flex"
          style={{
            borderRight: "1px solid var(--table-border)",
            background: "rgba(232,224,208,0.4)",
          }}
        >
          <div
            style={{
              fontSize: "9px",
              color: "var(--text-muted)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: 8,
            }}
          >
            Files
          </div>
          {leftIcons.map((ic) => (
            <DesktopIcon key={ic.label} emoji={ic.emoji} label={ic.label} />
          ))}
        </aside>

        {/* Center — OS Window */}
        <main className="flex-1 flex flex-col items-center justify-start px-4 py-8 md:py-12 overflow-y-auto">
          <motion.div
            className="os-window w-full"
            style={{ maxWidth: "860px" }}
            initial={{ opacity: 0, scale: 0.88, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.38, ease: [0.34, 1.15, 0.64, 1] }}
          >
            {/* Window Chrome */}
            <div className="os-window-chrome">
              <div className="win-controls">
                <div className="win-btn win-btn-close" title="Close">×</div>
                <div className="win-btn win-btn-min" title="Minimize">—</div>
                <div className="win-btn win-btn-max" title="Maximize">□</div>
              </div>
              <div className="win-title">home.mdx ▾</div>
            </div>

            {/* Toolbar */}
            <OsToolbar />

            {/* Content Area */}
            <div
              className="p-10 md:p-14"
              style={{ background: "var(--window-bg)" }}
            >
              {/* Breadcrumb / file badge */}
              <div className="flex items-center gap-2 mb-8">
                <span className="tag">
                  <span>🇦🇪</span> Dubai's Digital Partner
                </span>
                <span className="tag">
                  <span style={{ color: "var(--win-ctrl-green, #28CA41)" }}>●</span> Online
                </span>
              </div>

              {/* H1 */}
              <h1
                className="font-heading mb-5"
                style={{
                  fontSize: "clamp(30px, 5vw, 44px)",
                  fontWeight: 800,
                  lineHeight: 1.12,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.025em",
                }}
              >
                We Build Digital Systems <br className="hidden md:block" />
                <span style={{ color: "var(--accent)" }}>That Run</span> Your Business.
              </h1>

              {/* Sub-headline */}
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.75",
                  color: "var(--text-secondary)",
                  maxWidth: 560,
                  marginBottom: "2rem",
                }}
              >
                Premium websites, real-time business dashboards, and WhatsApp automation — all
                enterprise-grade. Delivered for Dubai businesses that are serious about growth.
              </p>

              {/* Feature chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["✅ No Upfront Payment", "⚡ Fast Delivery", "🔒 Enterprise Security", "📊 Live Analytics"].map((chip) => (
                  <span key={chip} className="tag">{chip}</span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#contact" className="btn-primary" style={{ fontSize: "16px", padding: "12px 28px" }}>
                  Start Your Project →
                </a>
                <a href="#packages" className="btn-secondary" style={{ fontSize: "16px", padding: "12px 28px" }}>
                  See Packages
                </a>
              </div>

              {/* Floating dashboard mockup */}
              <div
                style={{
                  background: "var(--toolbar-bg)",
                  border: "1.5px solid var(--table-border)",
                  borderRadius: "10px",
                  padding: "16px",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                {/* Mini window chrome */}
                <div className="flex items-center gap-2 mb-4">
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--win-ctrl-red, #FF5F57)", border: "1px solid rgba(0,0,0,0.12)" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--win-ctrl-yellow, #FFBD2E)", border: "1px solid rgba(0,0,0,0.12)" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--win-ctrl-green, #28CA41)", border: "1px solid rgba(0,0,0,0.12)" }} />
                  <span style={{ fontSize: "11px", color: "var(--text-muted)", marginLeft: 8, fontFamily: "monospace" }}>
                    analytics.dashboard — Live
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: "10px",
                      background: "#28CA4120",
                      color: "#28CA41",
                      border: "1px solid #28CA41",
                      borderRadius: 4,
                      padding: "1px 7px",
                      fontWeight: 700,
                    }}
                  >
                    ● LIVE
                  </span>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Revenue", val: "AED 48.2k", up: "+12%" },
                    { label: "Leads", val: "1,284", up: "+28%" },
                    { label: "Automation Rate", val: "94%", up: "+5%" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      style={{
                        background: "var(--window-bg)",
                        border: "1px solid var(--table-border)",
                        borderRadius: 8,
                        padding: "10px 12px",
                      }}
                    >
                      <div style={{ fontSize: "10px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>
                        {stat.label}
                      </div>
                      <div style={{ fontSize: "18px", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1 }}>
                        {stat.val}
                      </div>
                      <div style={{ fontSize: "11px", color: "#28CA41", fontWeight: 700, marginTop: 3 }}>
                        {stat.up} this month
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bar chart */}
                <div
                  style={{
                    background: "var(--window-bg)",
                    border: "1px solid var(--table-border)",
                    borderRadius: 8,
                    padding: "12px",
                  }}
                >
                  <div style={{ fontSize: "10px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", marginBottom: 8 }}>
                    Lead pipeline — last 7 days
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      gap: 5,
                      height: 48,
                    }}
                  >
                    {[55, 78, 43, 90, 67, 100, 82].map((h, i) => (
                      <motion.div
                        key={i}
                        style={{
                          flex: 1,
                          borderRadius: "3px 3px 0 0",
                          background:
                            i === 5
                              ? "var(--accent)"
                              : "var(--table-border)",
                          minWidth: 6,
                        }}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + i * 0.06, duration: 0.5, ease: "easeOut" }}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 4,
                    }}
                  >
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                      <span key={d} style={{ fontSize: "8px", color: "var(--text-muted)", flex: 1, textAlign: "center" }}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer micro-copy */}
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  marginTop: "1.5rem",
                  fontFamily: "monospace",
                }}
              >
                // hydrating the business systems... 🦔&nbsp;&nbsp;
                <span style={{ color: "var(--accent)" }}>admin@justautomate.work</span>
              </p>
            </div>
          </motion.div>
        </main>

        {/* Right Sidebar */}
        <aside
          className="sidebar-right hidden lg:flex"
          style={{
            borderLeft: "1px solid var(--table-border)",
            background: "rgba(232,224,208,0.4)",
          }}
        >
          <div
            style={{
              fontSize: "9px",
              color: "var(--text-muted)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: 8,
            }}
          >
            Dock
          </div>
          {rightIcons.map((ic) => (
            <DesktopIcon key={ic.label} emoji={ic.emoji} label={ic.label} />
          ))}
        </aside>
      </div>
    </section>
  );
}
