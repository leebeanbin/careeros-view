"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";

interface PlanFeature {
  text: string;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  highlighted: boolean;
  ctaLabel: string;
  ctaHref: string;
  ctaVariant: "solid" | "outline";
}

const PLANS: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For individuals and small teams",
    features: [
      { text: "Up to 250 issues" },
      { text: "10MB file upload" },
      { text: "Unlimited members" },
      { text: "Basic analytics" },
      { text: "7-day history" },
    ],
    highlighted: false,
    ctaLabel: "Get started free",
    ctaHref: "/signup",
    ctaVariant: "outline",
  },
  {
    name: "Plus",
    price: "$8",
    period: "per user / month",
    description: "For growing teams",
    features: [
      { text: "Everything in Free" },
      { text: "Unlimited issues" },
      { text: "250MB file upload" },
      { text: "Unlimited history" },
      { text: "Priority support" },
      { text: "GitHub sync" },
      { text: "Cycles" },
    ],
    highlighted: true,
    ctaLabel: "Start free trial",
    ctaHref: "/signup?plan=plus",
    ctaVariant: "solid",
  },
  {
    name: "Business",
    price: "$16",
    period: "per user / month",
    description: "For scaling companies",
    features: [
      { text: "Everything in Plus" },
      { text: "Admin roles" },
      { text: "SAML SSO" },
      { text: "Audit log" },
      { text: "Advanced analytics" },
      { text: "SLAs" },
      { text: "Dedicated support" },
    ],
    highlighted: false,
    ctaLabel: "Start free trial",
    ctaHref: "/signup?plan=business",
    ctaVariant: "solid",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations",
    features: [
      { text: "Everything in Business" },
      { text: "Custom contracts" },
      { text: "Procurement support" },
      { text: "Custom security review" },
      { text: "Priority onboarding" },
    ],
    highlighted: false,
    ctaLabel: "Contact sales",
    ctaHref: "/contact",
    ctaVariant: "solid",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Can I try Linear for free?",
    answer:
      "Yes. The Free plan is free forever and includes up to 250 issues and unlimited team members. No credit card required to get started.",
  },
  {
    question: "How does billing work for the Plus and Business plans?",
    answer:
      "Plans are billed annually per seat. You can add or remove seats at any time — we'll prorate the difference. Monthly billing is also available at a slightly higher rate.",
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer:
      "We'll notify you when you're approaching your plan limits. You can upgrade at any time to increase your limits without losing any data.",
  },
  {
    question: "Do you offer discounts for startups or non-profits?",
    answer:
      "Yes. We have a startup program that offers Linear at a significantly reduced price for eligible early-stage companies. Reach out to sales@linear.app to learn more.",
  },
];

interface PlanCardProps {
  plan: Plan;
}

function PlanCard({ plan }: PlanCardProps) {
  return (
    <div
      style={{
        backgroundColor: "rgb(13, 14, 15)",
        border: plan.highlighted
          ? "1px solid rgba(96, 121, 241, 0.4)"
          : "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "12px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {plan.highlighted && (
        <div
          style={{
            position: "absolute",
            top: "-1px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgb(96, 121, 241)",
            color: "rgb(247, 248, 248)",
            fontSize: "11px",
            fontWeight: 510,
            padding: "4px 12px",
            borderRadius: "0 0 8px 8px",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          Most popular
        </div>
      )}

      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            fontSize: "14px",
            fontWeight: 510,
            color: "rgb(208, 214, 224)",
            marginBottom: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          {plan.name}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "8px" }}>
          <span
            style={{
              fontSize: "40px",
              fontWeight: 600,
              color: "rgb(247, 248, 248)",
              lineHeight: 1,
              letterSpacing: "-0.5px",
            }}
          >
            {plan.price}
          </span>
          <span style={{ fontSize: "14px", color: "rgb(138, 143, 152)" }}>{plan.period}</span>
        </div>
        <div style={{ fontSize: "14px", color: "rgb(138, 143, 152)" }}>{plan.description}</div>
      </div>

      <a
        href={plan.ctaHref}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40px",
          borderRadius: "9999px",
          fontSize: "14px",
          fontWeight: 510,
          textDecoration: "none",
          marginBottom: "28px",
          transition: "opacity 0.15s ease",
          ...(plan.ctaVariant === "solid"
            ? {
                backgroundColor: "rgb(229, 229, 230)",
                color: "rgb(8, 9, 10)",
                border: "1px solid rgb(229, 229, 230)",
              }
            : {
                backgroundColor: "transparent",
                color: "rgb(247, 248, 248)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }),
        }}
      >
        {plan.ctaLabel}
      </a>

      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          paddingTop: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {plan.features.map((feature) => (
          <div
            key={feature.text}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              style={{ flexShrink: 0 }}
            >
              <path
                d="M2 7L5.5 10.5L12 4"
                stroke="rgb(96, 121, 241)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span style={{ fontSize: "14px", color: "rgb(208, 214, 224)" }}>{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface FaqRowProps {
  item: FaqItem;
}

function FaqRow({ item }: FaqRowProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 0",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "16px",
        }}
      >
        <span style={{ fontSize: "16px", fontWeight: 400, color: "rgb(247, 248, 248)" }}>
          {item.question}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <path
            d="M3 6L8 11L13 6"
            stroke="rgb(138, 143, 152)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div
          style={{
            paddingBottom: "20px",
            fontSize: "15px",
            color: "rgb(138, 143, 152)",
            lineHeight: "1.6",
            maxWidth: "640px",
          }}
        >
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function PricingPage() {
  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ paddingTop: "73px" }}>
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "80px 32px 64px",
            textAlign: "center",
          }}
        >
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
            Simple, transparent pricing.
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgb(138, 143, 152)",
              maxWidth: "460px",
              margin: "0 auto 64px",
              lineHeight: 1.6,
            }}
          >
            Start for free, scale when you&apos;re ready.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
              alignItems: "start",
            }}
          >
            {PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </section>

        <section
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "64px 32px 80px",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "rgb(247, 248, 248)",
              marginBottom: "8px",
              letterSpacing: "-0.3px",
            }}
          >
            Frequently asked questions
          </h2>
          <p style={{ fontSize: "15px", color: "rgb(138, 143, 152)", marginBottom: "40px" }}>
            Can&apos;t find the answer you&apos;re looking for? Reach out to our{" "}
            <a
              href="/contact"
              style={{ color: "rgb(96, 121, 241)", textDecoration: "none" }}
            >
              support team
            </a>
            .
          </p>
          <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
            {FAQ_ITEMS.map((item) => (
              <FaqRow key={item.question} item={item} />
            ))}
          </div>
        </section>

        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}
