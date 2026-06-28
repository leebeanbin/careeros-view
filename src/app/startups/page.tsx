"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface BenefitCard {
  title: string;
  description: string;
  icon: string;
}

const BENEFITS: BenefitCard[] = [
  {
    title: "Full Plus plan",
    description:
      "Get unlimited members, projects, and integrations — everything in the Plus plan at no cost for 12 months.",
    icon: "✦",
  },
  {
    title: "Priority support",
    description:
      "Direct access to our team when you need it. Fast, human responses from people who know the product inside out.",
    icon: "◈",
  },
  {
    title: "Startup community",
    description:
      "Connect with other early-stage founders using Linear. Share workflows, templates, and lessons learned.",
    icon: "⬡",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Linear changed how we ship. Before, our engineering and design cycles were out of sync — now everything moves together. The startup program made it easy to get started when budget was tight.",
    author: "Maya Chen",
    role: "Co-founder & CTO, Parcel",
  },
  {
    quote:
      "We evaluated every project tool out there. Linear is the only one that actually makes us faster rather than slowing us down with process overhead. It's a genuine competitive advantage.",
    author: "James Okafor",
    role: "CEO, Driftmark",
  },
];

type FundingStage = "Pre-seed" | "Seed" | "Series A";

interface FormState {
  companyName: string;
  website: string;
  email: string;
  fundingStage: FundingStage | "";
  description: string;
}

export default function StartupsPage() {
  const [form, setForm] = useState<FormState>({
    companyName: "",
    website: "",
    email: "",
    fundingStage: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgb(13, 14, 15)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "14px",
    color: "rgb(247, 248, 248)",
    outline: "none",
    boxSizing: "border-box" as const,
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 500,
    color: "rgb(208, 214, 224)",
    marginBottom: "6px",
  };

  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh", color: "rgb(247, 248, 248)" }}>
      <Navbar />
      <div style={{ paddingTop: "73px" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "80px 64px",
          }}
        >
          <div
            style={{
              textAlign: "center" as const,
              marginBottom: "72px",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                color: "rgb(96, 121, 241)",
                marginBottom: "20px",
                padding: "4px 12px",
                border: "1px solid rgba(96, 121, 241, 0.3)",
                borderRadius: "9999px",
                backgroundColor: "rgba(96, 121, 241, 0.08)",
              }}
            >
              Linear for Startups
            </div>
            <h1
              style={{
                fontSize: "52px",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: "rgb(247, 248, 248)",
                margin: "0 0 20px 0",
                lineHeight: 1.1,
              }}
            >
              Build fast from day one.
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "rgb(138, 143, 152)",
                margin: "0 auto",
                lineHeight: 1.6,
                maxWidth: "520px",
              }}
            >
              Free for early-stage startups. 12 months on the Plus plan — no strings attached.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "rgb(13, 14, 15)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "32px",
              marginBottom: "48px",
            }}
          >
            <h2
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "rgb(247, 248, 248)",
                margin: "0 0 20px 0",
              }}
            >
              Eligibility requirements
            </h2>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
              {[
                "Less than $5M raised",
                "Founded less than 3 years ago",
                "First time applying to the program",
              ].map((req) => (
                <div
                  key={req}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "14px",
                    color: "rgb(208, 214, 224)",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "rgb(96, 121, 241)",
                      flexShrink: 0,
                    }}
                  />
                  {req}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "16px",
              marginBottom: "72px",
            }}
          >
            {BENEFITS.map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: "rgb(13, 14, 15)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "12px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                    marginBottom: "12px",
                    color: "rgb(96, 121, 241)",
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "rgb(247, 248, 248)",
                    margin: "0 0 8px 0",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgb(138, 143, 152)",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "start",
              marginBottom: "72px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "rgb(247, 248, 248)",
                  margin: "0 0 8px 0",
                }}
              >
                Apply now
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgb(138, 143, 152)",
                  margin: "0 0 32px 0",
                  lineHeight: 1.6,
                }}
              >
                We review applications weekly and typically respond within 5 business days.
              </p>

              {submitted ? (
                <div
                  style={{
                    padding: "24px",
                    backgroundColor: "rgba(74, 222, 128, 0.08)",
                    border: "1px solid rgba(74, 222, 128, 0.2)",
                    borderRadius: "12px",
                    textAlign: "center" as const,
                  }}
                >
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "rgb(74, 222, 128)",
                      marginBottom: "8px",
                    }}
                  >
                    Application received
                  </div>
                  <p style={{ fontSize: "14px", color: "rgb(138, 143, 152)", margin: 0 }}>
                    We&apos;ll be in touch within 5 business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column" as const, gap: "20px" }}
                >
                  <div>
                    <label htmlFor="companyName" style={labelStyle}>
                      Company name
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      required
                      placeholder="Acme Inc."
                      value={form.companyName}
                      onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label htmlFor="website" style={labelStyle}>
                      Website
                    </label>
                    <input
                      id="website"
                      type="url"
                      required
                      placeholder="https://acme.com"
                      value={form.website}
                      onChange={(e) => setForm({ ...form, website: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" style={labelStyle}>
                      Founder email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@acme.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label htmlFor="fundingStage" style={labelStyle}>
                      Funding stage
                    </label>
                    <select
                      id="fundingStage"
                      required
                      value={form.fundingStage}
                      onChange={(e) =>
                        setForm({ ...form, fundingStage: e.target.value as FundingStage })
                      }
                      style={{
                        ...inputStyle,
                        appearance: "none" as const,
                        cursor: "pointer",
                      }}
                    >
                      <option value="" disabled>
                        Select a stage
                      </option>
                      <option value="Pre-seed">Pre-seed</option>
                      <option value="Seed">Seed</option>
                      <option value="Series A">Series A</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" style={labelStyle}>
                      Brief description
                    </label>
                    <textarea
                      id="description"
                      required
                      rows={4}
                      placeholder="Tell us about your company and what you're building…"
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      style={{
                        ...inputStyle,
                        resize: "vertical" as const,
                        lineHeight: 1.6,
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      height: "40px",
                      backgroundColor: "rgb(229, 229, 230)",
                      color: "rgb(8, 9, 10)",
                      fontSize: "14px",
                      fontWeight: 510,
                      border: "none",
                      borderRadius: "9999px",
                      cursor: "pointer",
                      transition: "opacity 0.15s ease",
                    }}
                  >
                    Apply
                  </button>
                </form>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: "24px", paddingTop: "44px" }}>
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.author}
                  style={{
                    backgroundColor: "rgb(13, 14, 15)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "12px",
                    padding: "24px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgb(208, 214, 224)",
                      margin: "0 0 16px 0",
                      lineHeight: 1.7,
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "rgb(247, 248, 248)",
                        marginBottom: "2px",
                      }}
                    >
                      {t.author}
                    </div>
                    <div style={{ fontSize: "12px", color: "rgb(138, 143, 152)" }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              textAlign: "center" as const,
              padding: "32px",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <p style={{ fontSize: "13px", color: "rgb(138, 143, 152)", margin: 0 }}>
              Not a startup?{" "}
              <Link
                href="/pricing"
                style={{ color: "rgb(96, 121, 241)", textDecoration: "none" }}
              >
                View all plans
              </Link>
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
