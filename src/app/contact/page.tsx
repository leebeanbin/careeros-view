"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type CompanySize = "" | "1-10" | "11-50" | "51-200" | "200+";

interface SalesFormState {
  name: string;
  email: string;
  companySize: CompanySize;
  message: string;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "rgb(13, 14, 15)",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: "8px",
  padding: "12px 16px",
  fontSize: "14px",
  color: "rgb(247, 248, 248)",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: 510,
  color: "rgb(208, 214, 224)",
  marginBottom: "6px",
};

function SalesForm() {
  const [form, setForm] = useState<SalesFormState>({
    name: "",
    email: "",
    companySize: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        style={{
          padding: "32px",
          backgroundColor: "rgb(13, 14, 15)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            backgroundColor: "rgba(96, 121, 241, 0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10L8 14L16 6"
              stroke="rgb(96, 121, 241)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div style={{ fontSize: "16px", fontWeight: 510, color: "rgb(247, 248, 248)", marginBottom: "8px" }}>
          Message sent
        </div>
        <div style={{ fontSize: "14px", color: "rgb(138, 143, 152)" }}>
          Our team will get back to you within one business day.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <label htmlFor="name" style={labelStyle}>
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="Jane Smith"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>
          Work email
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="jane@company.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="company-size" style={labelStyle}>
          Company size
        </label>
        <select
          id="company-size"
          required
          value={form.companySize}
          onChange={(e) => setForm({ ...form, companySize: e.target.value as CompanySize })}
          style={{
            ...inputStyle,
            appearance: "none",
            WebkitAppearance: "none",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4L6 8L10 4' stroke='%238A8F98' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 16px center",
            cursor: "pointer",
          }}
        >
          <option value="" disabled>
            Select a range
          </option>
          <option value="1-10">1–10 employees</option>
          <option value="11-50">11–50 employees</option>
          <option value="51-200">51–200 employees</option>
          <option value="200+">200+ employees</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          placeholder="Tell us about your team and what you're looking for…"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{
            ...inputStyle,
            resize: "vertical",
            lineHeight: "1.5",
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          height: "44px",
          borderRadius: "9999px",
          backgroundColor: "rgb(229, 229, 230)",
          color: "rgb(8, 9, 10)",
          fontSize: "14px",
          fontWeight: 510,
          border: "none",
          cursor: "pointer",
          transition: "opacity 0.15s ease",
        }}
      >
        Send message
      </button>
    </form>
  );
}

function SalesSection() {
  return (
    <div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          backgroundColor: "rgba(96, 121, 241, 0.1)",
          border: "1px solid rgba(96, 121, 241, 0.2)",
          borderRadius: "9999px",
          padding: "4px 12px",
          marginBottom: "20px",
        }}
      >
        <span style={{ fontSize: "12px", fontWeight: 510, color: "rgb(96, 121, 241)" }}>Sales</span>
      </div>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: 600,
          color: "rgb(247, 248, 248)",
          marginBottom: "12px",
          letterSpacing: "-0.3px",
        }}
      >
        Talk to our sales team
      </h2>
      <p
        style={{
          fontSize: "15px",
          color: "rgb(138, 143, 152)",
          lineHeight: 1.6,
          marginBottom: "8px",
        }}
      >
        Looking for a custom plan or need help with onboarding?
      </p>
      <a
        href="mailto:sales@linear.app"
        style={{
          fontSize: "14px",
          color: "rgb(96, 121, 241)",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "32px",
        }}
      >
        sales@linear.app
      </a>

      <SalesForm />
    </div>
  );
}

function SupportSection() {
  return (
    <div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          backgroundColor: "rgba(50, 200, 120, 0.1)",
          border: "1px solid rgba(50, 200, 120, 0.2)",
          borderRadius: "9999px",
          padding: "4px 12px",
          marginBottom: "20px",
        }}
      >
        <span style={{ fontSize: "12px", fontWeight: 510, color: "rgb(50, 200, 120)" }}>Support</span>
      </div>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: 600,
          color: "rgb(247, 248, 248)",
          marginBottom: "12px",
          letterSpacing: "-0.3px",
        }}
      >
        Already a customer?
      </h2>
      <p
        style={{
          fontSize: "15px",
          color: "rgb(138, 143, 152)",
          lineHeight: 1.6,
          marginBottom: "8px",
        }}
      >
        We&apos;re here to help. Reach out to our support team or browse the documentation.
      </p>
      <a
        href="mailto:support@linear.app"
        style={{
          fontSize: "14px",
          color: "rgb(96, 121, 241)",
          textDecoration: "none",
          display: "block",
          marginBottom: "32px",
        }}
      >
        support@linear.app
      </a>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <a
          href="/docs"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "18px 20px",
            backgroundColor: "rgb(13, 14, 15)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "10px",
            textDecoration: "none",
            transition: "border-color 0.15s ease",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 2.5H10.5L13 5V13.5H3V2.5Z"
                stroke="rgb(138, 143, 152)"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path
                d="M10 2.5V5.5H13"
                stroke="rgb(138, 143, 152)"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path d="M5.5 8H10.5" stroke="rgb(138, 143, 152)" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M5.5 10.5H10.5" stroke="rgb(138, 143, 152)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 510, color: "rgb(247, 248, 248)", marginBottom: "2px" }}>
              Documentation
            </div>
            <div style={{ fontSize: "13px", color: "rgb(138, 143, 152)" }}>
              Guides, tutorials, and API reference
            </div>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ marginLeft: "auto", flexShrink: 0 }}
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="rgb(138, 143, 152)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <a
          href="/community"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "18px 20px",
            backgroundColor: "rgb(13, 14, 15)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "10px",
            textDecoration: "none",
            transition: "border-color 0.15s ease",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="6" cy="5.5" r="2.5" stroke="rgb(138, 143, 152)" strokeWidth="1.2" />
              <circle cx="11" cy="5.5" r="2" stroke="rgb(138, 143, 152)" strokeWidth="1.2" />
              <path
                d="M1.5 13C1.5 10.5 3.5 9 6 9C8.5 9 10.5 10.5 10.5 13"
                stroke="rgb(138, 143, 152)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M11 9C12.9 9 14.5 10.2 14.5 12.5"
                stroke="rgb(138, 143, 152)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 510, color: "rgb(247, 248, 248)", marginBottom: "2px" }}>
              Community
            </div>
            <div style={{ fontSize: "13px", color: "rgb(138, 143, 152)" }}>
              Connect with other Linear users
            </div>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ marginLeft: "auto", flexShrink: 0 }}
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="rgb(138, 143, 152)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <a
          href="/status"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "18px 20px",
            backgroundColor: "rgb(13, 14, 15)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "10px",
            textDecoration: "none",
            transition: "border-color 0.15s ease",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "rgb(50, 200, 120)",
                boxShadow: "0 0 6px rgb(50, 200, 120)",
              }}
            />
          </div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 510, color: "rgb(247, 248, 248)", marginBottom: "2px" }}>
              System Status
            </div>
            <div style={{ fontSize: "13px", color: "rgb(50, 200, 120)" }}>All systems operational</div>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ marginLeft: "auto", flexShrink: 0 }}
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="rgb(138, 143, 152)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ paddingTop: "73px" }}>
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "80px 32px 120px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <h1
              style={{
                fontSize: "56px",
                fontWeight: 600,
                letterSpacing: "-1px",
                color: "rgb(247, 248, 248)",
                marginBottom: "16px",
                lineHeight: 1.1,
              }}
            >
              Get in touch
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "rgb(138, 143, 152)",
                maxWidth: "380px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Talk to our team about your needs.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "start",
            }}
          >
            <SalesSection />
            <SupportSection />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
