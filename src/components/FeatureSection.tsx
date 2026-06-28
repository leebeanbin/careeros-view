import React from "react";

interface FeatureSectionProps {
  heading: string;
  description: string;
  actionNumber: string;
  actionLabel: string;
  actionHref: string;
  children: React.ReactNode;
}

export function FeatureSection({
  heading,
  description,
  actionNumber,
  actionLabel,
  actionHref,
  children,
}: FeatureSectionProps) {
  return (
    <section
      style={{
        backgroundColor: "rgb(8, 9, 10)",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        padding: "80px 64px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Header grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0 80px",
            alignItems: "end",
            paddingBottom: 48,
          }}
        >
          {/* Heading (left) */}
          <h2
            style={{
              fontSize: 48,
              fontWeight: 510,
              lineHeight: "52px",
              letterSpacing: "-0.96px",
              color: "rgb(247, 248, 248)",
              whiteSpace: "pre-line",
              maxWidth: 520,
              margin: 0,
            }}
          >
            {heading}
          </h2>

          {/* Description + action (right) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                lineHeight: "26px",
                color: "rgb(138, 143, 152)",
                margin: "0 0 20px 0",
              }}
            >
              {description}
            </p>

            <a
              href={actionHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  color: "rgb(138, 143, 152)",
                  fontSize: 14,
                  fontFamily: "monospace",
                  marginRight: 4,
                }}
              >
                {actionNumber}
              </span>
              <span
                style={{
                  color: "rgb(247, 248, 248)",
                  fontSize: 14,
                  fontWeight: 510,
                }}
              >
                {actionLabel}
              </span>
              <span
                style={{
                  color: "rgb(247, 248, 248)",
                  marginLeft: 4,
                }}
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* Illustration wrapper */}
        <div
          style={{
            backgroundColor: "rgb(13, 14, 15)",
            borderRadius: 12,
            border: "1px solid rgba(255, 255, 255, 0.06)",
            overflow: "hidden",
            position: "relative",
            minHeight: 560,
            display: "flex",
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
