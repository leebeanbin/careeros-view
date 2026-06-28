"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { LinearLogo } from "@/components/icons";

const PRODUCT_ITEMS = [
  { label: "Intake", desc: "Make your product\noperations self-driving", href: "/intake" },
  { label: "Build", desc: "Move work forward across\nteams and agents", href: "/build" },
  { label: "Monitor", desc: "Understand progress\nat scale", href: "/monitor" },
  { label: "Plan", desc: "Plan and navigate from\nidea to launch", href: "/plan" },
  { label: "Diffs", desc: "Make code review\neffortless", href: "/diffs" },
  { label: "Integrations", desc: "Collaborate across tools", href: "/integrations" },
];

const RESOURCES_ITEMS = [
  { label: "About", desc: "Meet the team", href: "/about" },
  { label: "Developers", desc: "Build on the Linear API", href: "/developers" },
  { label: "Switch to Linear", desc: "Migration guide", href: "/switch" },
  { label: "Careers", desc: "We're hiring", href: "/careers" },
  { label: "Security", desc: "Safe, secure, and private", href: "/security" },
  { label: "Enterprise", desc: "Build products at scale", href: "/enterprise" },
  null,
  { label: "Docs", desc: "How to use Linear", href: "/docs" },
  { label: "Mobile", desc: "Get the mobile app", href: "/mobile" },
];

const NAV_LINKS = [
  { label: "Customers", href: "/customers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Now", href: "/now" },
  { label: "Contact", href: "/contact" },
] as const;

const dropdownStyle: React.CSSProperties = {
  position: "absolute",
  top: "calc(100% + 4px)",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "rgba(8, 9, 10, 0.92)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  borderRadius: "14px",
  boxShadow: "rgb(8, 9, 10) 0px 8px 32px 0px",
  padding: "8px",
  zIndex: 200,
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "256px 256px 256px",
  columnGap: "24px",
};

interface DropdownItemProps {
  label: string;
  desc: string;
  href: string;
}

function DropdownItem({ label, desc, href }: DropdownItemProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        padding: "12px 16px",
        borderRadius: "8px",
        textDecoration: "none",
        backgroundColor: hovered ? "rgba(255, 255, 255, 0.04)" : "transparent",
        transition: "background-color 0.15s ease",
      }}
    >
      <div style={{ fontSize: "13px", fontWeight: 400, color: "rgb(138, 143, 152)", marginBottom: "4px" }}>
        {label}
      </div>
      <div style={{ fontSize: "13px", fontWeight: 510, color: "rgb(208, 214, 224)", whiteSpace: "pre-line", lineHeight: "18px" }}>
        {desc}
      </div>
    </Link>
  );
}

type DropdownName = "product" | "resources" | null;

export function Navbar() {
  const [open, setOpen] = useState<DropdownName>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = useCallback((name: DropdownName) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(name);
  }, []);

  const handleLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(null), 80);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "73px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        backgroundColor: "rgba(0, 0, 0, 0)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        zIndex: 100,
        color: "rgb(247, 248, 248)",
      }}
    >
      <Link href="/" aria-label="Linear home">
        <LinearLogo height={20} />
      </Link>

      <nav style={{ display: "flex", alignItems: "center" }} aria-label="Main navigation">
        {/* Product dropdown trigger */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => handleEnter("product")}
          onMouseLeave={handleLeave}
        >
          <button
            type="button"
            style={{
              color: "rgb(247, 248, 248)",
              fontSize: "13px",
              fontWeight: 400,
              padding: "8px 12px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              opacity: open === "product" ? 1 : undefined,
            }}
          >
            Product
          </button>

          {open === "product" && (
            <div style={dropdownStyle}>
              <div style={gridStyle}>
                {PRODUCT_ITEMS.map((item) => (
                  <DropdownItem key={item.href} {...item} />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "11px 16px 11px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  marginTop: "4px",
                }}
              >
                <span style={{ fontSize: "13px", color: "rgb(138, 143, 152)" }}>
                  New: Agent assisted project updates
                </span>
                <Link
                  href="/changelog"
                  style={{ fontSize: "13px", fontWeight: 510, color: "rgb(96, 121, 241)", textDecoration: "none" }}
                >
                  Changelog
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Resources dropdown trigger */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => handleEnter("resources")}
          onMouseLeave={handleLeave}
        >
          <button
            type="button"
            style={{
              color: "rgb(247, 248, 248)",
              fontSize: "13px",
              fontWeight: 400,
              padding: "8px 12px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            Resources
          </button>

          {open === "resources" && (
            <div style={{ ...dropdownStyle, left: "50%", transform: "translateX(-50%)" }}>
              <div style={gridStyle}>
                {RESOURCES_ITEMS.map((item, i) =>
                  item ? (
                    <DropdownItem key={item.href} {...item} />
                  ) : (
                    <div key={`empty-${i}`} />
                  )
                )}
              </div>
            </div>
          )}
        </div>

        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            style={{
              color: "rgb(247, 248, 248)",
              fontSize: "13px",
              fontWeight: 400,
              padding: "8px 12px",
              textDecoration: "none",
              opacity: 1,
              transition: "opacity 0.15s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{ width: "1px", height: "20px", backgroundColor: "rgba(255, 255, 255, 0.15)", margin: "0 4px" }}
          aria-hidden="true"
        />
        <Link
          href="/login"
          style={{ color: "rgb(138, 143, 152)", fontSize: "13px", fontWeight: 400, padding: "8px 12px", textDecoration: "none" }}
        >
          Log in
        </Link>
        <Link
          href="/signup"
          style={{
            backgroundColor: "rgb(229, 229, 230)",
            color: "rgb(8, 9, 10)",
            fontSize: "13px",
            fontWeight: 510,
            padding: "0 12px",
            height: "32px",
            borderRadius: "9999px",
            border: "1px solid rgb(229, 229, 230)",
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
