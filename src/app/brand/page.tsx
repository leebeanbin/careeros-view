import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";

interface ColorSwatch {
  name: string;
  hex: string;
  bg: string;
  textColor: string;
}

interface UsageRule {
  type: "do" | "dont";
  text: string;
}

const COLOR_SWATCHES: ColorSwatch[] = [
  { name: "Primary Black", hex: "#08090A", bg: "rgb(8, 9, 10)", textColor: "rgb(138, 143, 152)" },
  { name: "White", hex: "#F7F8F8", bg: "rgb(247, 248, 248)", textColor: "rgb(8, 9, 10)" },
  { name: "Blue", hex: "#6079F1", bg: "rgb(96, 121, 241)", textColor: "rgb(247, 248, 248)" },
  { name: "Muted", hex: "#8A8F98", bg: "rgb(138, 143, 152)", textColor: "rgb(247, 248, 248)" },
];

const USAGE_RULES: UsageRule[] = [
  { type: "do", text: "Use the logo on dark or light backgrounds with sufficient contrast." },
  { type: "do", text: "Maintain clear space around the logo equal to at least the height of the 'L' in Linear." },
  { type: "do", text: "Use the official color values provided in these guidelines." },
  { type: "dont", text: "Do not modify, distort, rotate, or add effects to the logo." },
  { type: "dont", text: "Do not use the logo on backgrounds that reduce legibility." },
  { type: "dont", text: "Do not recreate the logo using different fonts or letterforms." },
];

const FONT_WEIGHTS: { weight: number; label: string; sample: string }[] = [
  { weight: 400, label: "Regular", sample: "The quick brown fox jumps over the lazy dog" },
  { weight: 500, label: "Medium", sample: "The quick brown fox jumps over the lazy dog" },
  { weight: 600, label: "Semibold", sample: "The quick brown fox jumps over the lazy dog" },
];

export default function BrandPage() {
  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ paddingTop: "73px" }}>
        <section
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            padding: "96px 32px 80px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 510,
              lineHeight: "76px",
              letterSpacing: "-1.44px",
              color: "rgb(247, 248, 248)",
              marginBottom: "24px",
              marginTop: 0,
            }}
          >
            Brand assets
          </h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "32px",
              color: "rgb(138, 143, 152)",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            Official Linear logos, colors, and usage guidelines.
          </p>
        </section>

        <section
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 32px 80px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: 510,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "rgb(96, 121, 241)",
              marginBottom: "32px",
              marginTop: 0,
            }}
          >
            Logo
          </p>
          <div
            style={{
              backgroundColor: "rgb(13, 14, 15)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "64px 48px",
              display: "flex",
              flexDirection: "column" as const,
              alignItems: "center",
              gap: "48px",
            }}
          >
            <div
              style={{
                fontSize: "52px",
                fontWeight: 600,
                letterSpacing: "-1.5px",
                color: "rgb(247, 248, 248)",
                lineHeight: 1,
              }}
            >
              Linear
            </div>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "rgb(138, 143, 152)",
                  marginBottom: "24px",
                  marginTop: 0,
                }}
              >
                Use our logo on light or dark backgrounds.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                <button
                  type="button"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    padding: "10px 20px",
                    fontSize: "13px",
                    fontWeight: 510,
                    color: "rgb(208, 214, 224)",
                    cursor: "pointer",
                  }}
                >
                  Download PNG
                </button>
                <button
                  type="button"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    padding: "10px 20px",
                    fontSize: "13px",
                    fontWeight: 510,
                    color: "rgb(208, 214, 224)",
                    cursor: "pointer",
                  }}
                >
                  Download SVG
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 32px 80px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: 510,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "rgb(96, 121, 241)",
              marginBottom: "32px",
              marginTop: 0,
            }}
          >
            Colors
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}
          >
            {COLOR_SWATCHES.map((swatch) => (
              <div key={swatch.hex}>
                <div
                  style={{
                    backgroundColor: swatch.bg,
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    height: "100px",
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "10px 12px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 510,
                      color: swatch.textColor,
                      opacity: 0.6,
                    }}
                  >
                    {swatch.hex}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 510,
                    color: "rgb(208, 214, 224)",
                    marginBottom: "2px",
                  }}
                >
                  {swatch.name}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "rgb(138, 143, 152)",
                    fontFamily: "monospace",
                  }}
                >
                  {swatch.hex}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 32px 80px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: 510,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "rgb(96, 121, 241)",
              marginBottom: "16px",
              marginTop: 0,
            }}
          >
            Typography
          </p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "24px",
              color: "rgb(138, 143, 152)",
              marginBottom: "36px",
              marginTop: 0,
            }}
          >
            We use Inter for all text. Available on{" "}
            <a
              href="https://fonts.google.com/specimen/Inter"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(96, 121, 241)", textDecoration: "none" }}
            >
              Google Fonts
            </a>
            .
          </p>
          <div
            style={{
              backgroundColor: "rgb(13, 14, 15)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {FONT_WEIGHTS.map((fw, index) => (
              <div
                key={fw.weight}
                style={{
                  padding: "28px 32px",
                  borderBottom: index < FONT_WEIGHTS.length - 1 ? "1px solid rgba(255, 255, 255, 0.06)" : "none",
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: "24px",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: fw.weight,
                    color: "rgb(247, 248, 248)",
                    flex: 1,
                  }}
                >
                  {fw.sample}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "rgb(138, 143, 152)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {fw.label} / {fw.weight}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 32px 96px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: 510,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "rgb(96, 121, 241)",
              marginBottom: "32px",
              marginTop: 0,
            }}
          >
            Usage guidelines
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "12px",
            }}
          >
            {USAGE_RULES.map((rule, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "20px 24px",
                  backgroundColor: "rgb(13, 14, 15)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: rule.type === "do" ? "rgb(91, 178, 142)" : "rgb(220, 80, 80)",
                    flexShrink: 0,
                    lineHeight: "24px",
                  }}
                >
                  {rule.type === "do" ? "✓" : "✗"}
                </span>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "rgb(208, 214, 224)",
                    margin: 0,
                  }}
                >
                  {rule.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <CtaSection />
      <Footer />
    </main>
  );
}
