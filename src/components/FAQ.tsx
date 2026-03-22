"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need to pay anything upfront?",
    a: "No. We don't require any upfront payment. We discuss scope, agree on the deliverables, and you pay upon completion — or on a milestone basis for larger projects. We believe in earning your trust first.",
  },
  {
    q: "What does 'custom-built' actually mean?",
    a: "It means we write the code from scratch for your brand. No WordPress, no Wix, no templates. Every design decision is made with your business in mind. The result loads faster, is more secure, and is infinitely more flexible than any template.",
  },
  {
    q: "How long does it typically take?",
    a: "A standard website project takes 10–15 business days. Adding the WhatsApp API adds about 5 days. A full dashboard integration depends on complexity but typically 3–4 weeks total. We always give you a clear timeline before we start.",
  },
  {
    q: "Will I be able to update the website myself?",
    a: "Yes. We build a simple CMS layer (or provide a structured content system) so you can update text, images, and pages without needing a developer. We also provide a handover session to walk you through everything.",
  },
  {
    q: "Are the tools you use actually free?",
    a: "Vercel, Cloudflare, PostHog, and Zoho Mail all have solid free tiers that cover most businesses entirely. WhatsApp API has a usage-based cost through Meta. Supabase has a generous free tier. We'll be transparent about any costs before we start.",
  },
  {
    q: "Do you work with businesses outside Dubai?",
    a: "Yes — we're Dubai-based but work remotely with clients across the UAE and globally. Our tools work everywhere and our process is fully remote-friendly.",
  },
  {
    q: "What happens after the website is launched?",
    a: "We offer a 30-day post-launch support window included in every project. For ongoing support, monthly retainer packages are available. We also provide documentation so your team can manage day-to-day independently.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        padding: "80px 0",
        background: "rgba(232,224,208,0.5)",
        borderTop: "1px solid var(--table-border)",
        borderBottom: "1px solid var(--table-border)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="tag mb-4 inline-block">// faq.mdx</span>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(24px, 4vw, 34px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: 12,
            }}
          >
            Frequently Asked Questions
          </h2>
          <p style={{ color: "var(--text-secondary)" }}>
            The stuff everyone wonders but doesn&apos;t always ask.
          </p>
        </div>

        {/* OS Window FAQ */}
        <div className="os-window">
          <div className="os-window-chrome">
            <div className="win-controls">
              <div className="win-btn win-btn-close">×</div>
              <div className="win-btn win-btn-min">—</div>
              <div className="win-btn win-btn-max">□</div>
            </div>
            <div className="win-title">faq.mdx ▾</div>
          </div>

          <div style={{ background: "var(--window-bg)" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderBottom:
                    i < faqs.length - 1
                      ? "1px solid var(--table-border)"
                      : "none",
                }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 20px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: 12,
                    transition: "background 0.12s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "var(--hover-tint)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      openIndex === i ? "var(--hover-tint)" : "transparent";
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "var(--text-primary)",
                      lineHeight: 1.45,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "monospace",
                        color: "var(--accent)",
                        marginRight: 8,
                        fontSize: "12px",
                      }}
                    >
                      Q:
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    style={{
                      color: "var(--text-muted)",
                      flexShrink: 0,
                      transform:
                        openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </button>

                {openIndex === i && (
                  <div
                    style={{
                      padding: "0 20px 18px 20px",
                      background: "var(--hover-tint)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "monospace",
                          color: "#3B5BE5",
                          marginRight: 8,
                          fontSize: "12px",
                          fontWeight: 700,
                        }}
                      >
                        A:
                      </span>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
