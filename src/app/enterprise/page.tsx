"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const featureSections = [
  {
    label: "Security & compliance",
    heading: "Enterprise-grade security built in.",
    description:
      "Linear meets the strictest security and compliance requirements so your IT and legal teams can rest easy.",
    features: [
      "SAML SSO with any identity provider",
      "SCIM automated user provisioning",
      "SOC 2 Type II certified",
      "GDPR and CCPA compliant",
      "Detailed audit logs for every action",
      "IP allowlisting and network restrictions",
    ],
  },
  {
    label: "Admin controls",
    heading: "Complete control over your organization.",
    description:
      "Manage teams, roles, and policies from a central admin dashboard with granular permissions for every member.",
    features: [
      "Custom roles and permission sets",
      "Organization-wide policies",
      "Centralized member management",
      "Usage analytics and reporting",
    ],
  },
  {
    label: "Priority support",
    heading: "A dedicated partner for your success.",
    description:
      "Every enterprise customer gets a dedicated Customer Success Manager and guaranteed response times.",
    features: [
      "Dedicated Customer Success Manager",
      "SLA guarantees with defined response windows",
      "Guided onboarding and migration assistance",
      "Live training sessions for your entire team",
    ],
  },
  {
    label: "Custom contracts",
    heading: "Procurement made simple.",
    description:
      "We work with your procurement and legal teams to meet your contracting requirements, including regulated industries.",
    features: [
      "Custom Master Service Agreements (MSA)",
      "Business Associate Agreements (BAA) for healthcare",
      "Data Processing Agreements (DPA)",
      "Support for enterprise procurement processes",
    ],
  },
];

const teamSizeOptions = [
  "1–10",
  "11–50",
  "51–200",
  "201–500",
  "501–1000",
  "1000+",
];

export default function EnterprisePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgb(13, 14, 15)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "14px",
    color: "rgb(247, 248, 248)",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 400,
    color: "rgb(138, 143, 152)",
    marginBottom: "6px",
  };

  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ paddingTop: "73px" }}>
        <section
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "96px 32px 80px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "rgba(96, 121, 241, 0.12)",
              border: "1px solid rgba(96, 121, 241, 0.3)",
              borderRadius: "9999px",
              padding: "4px 14px",
              fontSize: "12px",
              fontWeight: 510,
              color: "rgb(96, 121, 241)",
              marginBottom: "24px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Enterprise
          </div>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 510,
              lineHeight: "68px",
              letterSpacing: "-1.28px",
              color: "rgb(247, 248, 248)",
              marginBottom: "24px",
            }}
          >
            Enterprise-grade product management.
          </h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "32px",
              color: "rgb(138, 143, 152)",
            }}
          >
            Security, compliance, and control for large organizations.
          </p>
        </section>

        <section style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 32px 96px" }}>
          {featureSections.map((section, i) => (
            <div
              key={section.label}
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                gap: "80px",
                alignItems: "center",
                marginBottom: "96px",
                direction: i % 2 === 0 ? "ltr" : "rtl",
              }}
            >
              <div style={{ direction: "ltr" }}>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 510,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgb(96, 121, 241)",
                    marginBottom: "16px",
                  }}
                >
                  {section.label}
                </p>
                <h2
                  style={{
                    fontSize: "32px",
                    fontWeight: 510,
                    lineHeight: "40px",
                    letterSpacing: "-0.64px",
                    color: "rgb(247, 248, 248)",
                    marginBottom: "16px",
                  }}
                >
                  {section.heading}
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "rgb(138, 143, 152)",
                    marginBottom: "28px",
                  }}
                >
                  {section.description}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {section.features.map((feat) => (
                    <li
                      key={feat}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "12px",
                        fontSize: "14px",
                        color: "rgb(208, 214, 224)",
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3 8l3.5 3.5L13 4.5"
                          stroke="rgb(96, 121, 241)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  direction: "ltr",
                  backgroundColor: "rgb(13, 14, 15)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  height: "280px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.2)" }}>
                  {section.label}
                </span>
              </div>
            </div>
          ))}
        </section>

        <section
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "0 32px 120px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: 510,
                lineHeight: "48px",
                letterSpacing: "-0.8px",
                color: "rgb(247, 248, 248)",
                marginBottom: "12px",
              }}
            >
              Talk to sales
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "26px", color: "rgb(138, 143, 152)" }}>
              Tell us about your team and we&apos;ll get back to you within one business day.
            </p>
          </div>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label htmlFor="name" style={labelStyle}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ada Lovelace"
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ada@company.com"
                  style={inputStyle}
                />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label htmlFor="company" style={labelStyle}>
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Inc."
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="teamSize" style={labelStyle}>
                  Team size
                </label>
                <select
                  id="teamSize"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  {teamSizeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" style={labelStyle}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your team, your current tools, and what you're looking for."
                rows={5}
                style={{ ...inputStyle, resize: "vertical", lineHeight: "22px" }}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "rgb(229, 229, 230)",
                color: "rgb(8, 9, 10)",
                fontSize: "15px",
                fontWeight: 510,
                padding: "0 24px",
                height: "44px",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
            >
              Send message
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </main>
  );
}
