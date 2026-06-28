"use client";

import { useState } from "react";
import Link from "next/link";
import { LinearLogo } from "@/components/icons";

export default function SignupPage() {
  const [showEmail, setShowEmail] = useState(false);
  const [email, setEmail] = useState("");

  const authButtonStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: "100%",
    height: "42px",
    backgroundColor: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 500,
    color: "rgb(208, 214, 224)",
    cursor: "pointer",
    transition: "background-color 0.15s ease, border-color 0.15s ease",
    textDecoration: "none",
  };

  return (
    <main
      style={{
        backgroundColor: "rgb(8, 9, 10)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "rgb(13, 14, 15)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "32px",
          }}
        >
          <Link href="/" aria-label="Linear home">
            <LinearLogo height={18} />
          </Link>
        </div>

        <h1
          style={{
            fontSize: "22px",
            fontWeight: 600,
            color: "rgb(247, 248, 248)",
            margin: "0 0 8px 0",
            textAlign: "center" as const,
            letterSpacing: "-0.02em",
          }}
        >
          Start building better
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "rgb(138, 143, 152)",
            margin: "0 0 28px 0",
            textAlign: "center" as const,
            lineHeight: 1.5,
          }}
        >
          Create your Linear account — free forever.
        </p>

        <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px", marginBottom: "20px" }}>
          <button type="button" style={authButtonStyle}>
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          <button type="button" style={authButtonStyle}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="rgb(208, 214, 224)"
              aria-hidden="true"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Continue with GitHub
          </button>

          {!showEmail ? (
            <button
              type="button"
              onClick={() => setShowEmail(true)}
              style={authButtonStyle}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(208, 214, 224)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Continue with email
            </button>
          ) : (
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}
            >
              <input
                type="email"
                required
                autoFocus
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  height: "42px",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                  padding: "0 14px",
                  fontSize: "14px",
                  color: "rgb(247, 248, 248)",
                  outline: "none",
                  boxSizing: "border-box" as const,
                }}
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  height: "42px",
                  backgroundColor: "rgb(229, 229, 230)",
                  color: "rgb(8, 9, 10)",
                  fontSize: "14px",
                  fontWeight: 510,
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Continue
              </button>
            </form>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(255, 255, 255, 0.08)" }} />
          <span style={{ fontSize: "12px", color: "rgb(138, 143, 152)" }}>or</span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(255, 255, 255, 0.08)" }} />
        </div>

        <p style={{ textAlign: "center" as const, fontSize: "13px", color: "rgb(138, 143, 152)", margin: 0 }}>
          Already have an account?{" "}
          <Link
            href="/login"
            style={{ color: "rgb(96, 121, 241)", textDecoration: "none", fontWeight: 500 }}
          >
            Sign in
          </Link>
        </p>
      </div>

      <p
        style={{
          marginTop: "24px",
          fontSize: "12px",
          color: "rgb(138, 143, 152)",
          textAlign: "center" as const,
          maxWidth: "360px",
          lineHeight: 1.6,
        }}
      >
        By signing up, you agree to our{" "}
        <Link href="/terms" style={{ color: "rgb(138, 143, 152)", textDecoration: "underline" }}>
          Terms
        </Link>{" "}
        and{" "}
        <Link href="/privacy" style={{ color: "rgb(138, 143, 152)", textDecoration: "underline" }}>
          Privacy Policy
        </Link>
        .
      </p>
    </main>
  );
}
