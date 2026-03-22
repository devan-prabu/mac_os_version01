"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Packages", href: "#packages" },
  { name: "Process", href: "#process" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "var(--nav-bg)", zIndex: 200 }}
      className="fixed top-0 left-0 right-0 h-12 flex items-center"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 group shrink-0">
          {/* Retro floppy-disk icon */}
          <span className="text-lg select-none">💾</span>
          <span
            className="font-heading font-extrabold text-base tracking-tight"
            style={{ color: "#ffffff" }}
          >
            Just
            <span style={{ color: "var(--accent)" }}>Automate</span>
            <span
              style={{
                display: "inline-block",
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                marginLeft: 3,
                verticalAlign: "middle",
                transition: "transform 0.15s",
              }}
              className="group-hover:scale-150"
            />
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 rounded text-sm font-medium transition-all duration-150"
              style={{
                color: "var(--nav-text)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--nav-text)";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "transparent";
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary hidden md:inline-flex" style={{ padding: "7px 16px", fontSize: "13px" }}>
            Get started — free
          </a>
          <button
            className="md:hidden p-1.5 rounded"
            style={{ color: "var(--nav-text)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div
          className="absolute top-12 left-0 right-0 p-4 flex flex-col gap-2 md:hidden"
          style={{
            backgroundColor: "#242424",
            borderTop: "1px solid #333",
            zIndex: 201,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded text-sm font-medium"
              style={{ color: "var(--nav-text)", textDecoration: "none" }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-2"
          >
            Get started — free
          </a>
        </div>
      )}
    </nav>
  );
}
