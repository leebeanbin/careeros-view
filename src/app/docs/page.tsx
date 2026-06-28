"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const categories = [
  {
    emoji: "🚀",
    name: "Getting started",
    description: "Set up your workspace and invite your team in minutes.",
    href: "#",
  },
  {
    emoji: "✅",
    name: "Issues",
    description: "Create, assign, and track issues with powerful filters and views.",
    href: "#",
  },
  {
    emoji: "📁",
    name: "Projects",
    description: "Group related issues into projects and track progress end-to-end.",
    href: "#",
  },
  {
    emoji: "🔄",
    name: "Cycles",
    description: "Run time-boxed sprints and keep your team focused on what matters.",
    href: "#",
  },
  {
    emoji: "🗺️",
    name: "Roadmaps",
    description: "Plan and communicate your product strategy across quarters.",
    href: "#",
  },
  {
    emoji: "🔗",
    name: "Integrations",
    description: "Connect Linear with GitHub, Slack, Figma, Jira, and 50+ more tools.",
    href: "#",
  },
  {
    emoji: "⚡",
    name: "API",
    description: "Automate workflows and build integrations with the Linear GraphQL API.",
    href: "#",
  },
  {
    emoji: "📱",
    name: "Mobile",
    description: "Stay on top of your work from anywhere with the iOS and Android apps.",
    href: "#",
  },
  {
    emoji: "⌨️",
    name: "Keyboard shortcuts",
    description: "Work at the speed of thought with Linear's extensive keyboard shortcuts.",
    href: "#",
  },
];

export default function DocsPage() {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? categories.filter(
        (cat) =>
          cat.name.toLowerCase().includes(query.toLowerCase()) ||
          cat.description.toLowerCase().includes(query.toLowerCase())
      )
    : categories;

  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ paddingTop: "73px" }}>
        <section
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            padding: "96px 32px 64px",
            textAlign: "center",
          }}
        >
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
            Documentation
          </h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "32px",
              color: "rgb(138, 143, 152)",
              marginBottom: "40px",
            }}
          >
            Everything you need to get started with Linear.
          </p>

          <div style={{ position: "relative" }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
              }}
            >
              <circle
                cx="7"
                cy="7"
                r="4.5"
                stroke="rgb(138, 143, 152)"
                strokeWidth="1.3"
              />
              <path
                d="M10.5 10.5L13 13"
                stroke="rgb(138, 143, 152)"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search docs..."
              style={{
                width: "100%",
                backgroundColor: "rgb(13, 14, 15)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                padding: "12px 16px 12px 44px",
                fontSize: "15px",
                color: "rgb(247, 248, 248)",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
        </section>

        <section style={{ maxWidth: "960px", margin: "0 auto", padding: "0 32px 96px" }}>
          {filtered.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
              }}
            >
              {filtered.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  style={{
                    backgroundColor: "rgb(13, 14, 15)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "12px",
                    padding: "24px",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  <div
                    style={{
                      fontSize: "26px",
                      lineHeight: 1,
                      marginBottom: "14px",
                    }}
                  >
                    {cat.emoji}
                  </div>
                  <h2
                    style={{
                      fontSize: "15px",
                      fontWeight: 510,
                      color: "rgb(247, 248, 248)",
                      marginBottom: "6px",
                    }}
                  >
                    {cat.name}
                  </h2>
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "rgb(138, 143, 152)",
                    }}
                  >
                    {cat.description}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "48px 0",
                color: "rgb(138, 143, 152)",
                fontSize: "15px",
              }}
            >
              No results for &quot;{query}&quot;
            </div>
          )}
        </section>
      </div>
      <Footer />
    </main>
  );
}
