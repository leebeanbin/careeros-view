import Link from "next/link";
import { LinearIcon } from "@/components/icons";

interface Service {
  name: string;
  uptime: string;
}

const SERVICES: Service[] = [
  { name: "API", uptime: "99.98%" },
  { name: "Web App", uptime: "99.99%" },
  { name: "iOS App", uptime: "100.00%" },
  { name: "Android App", uptime: "100.00%" },
  { name: "Webhooks", uptime: "99.97%" },
  { name: "GitHub Integration", uptime: "99.96%" },
  { name: "Slack Integration", uptime: "99.98%" },
  { name: "Email Notifications", uptime: "99.99%" },
];

export default function StatusPage() {
  return (
    <main
      style={{
        backgroundColor: "rgb(8, 9, 10)",
        minHeight: "100vh",
        color: "rgb(247, 248, 248)",
      }}
    >
      <header
        style={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "0 32px",
          height: "60px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link href="/" aria-label="Linear home" style={{ display: "flex", alignItems: "center" }}>
          <LinearIcon width={22} height={22} />
        </Link>
        <span
          style={{
            marginLeft: "12px",
            fontSize: "13px",
            color: "rgb(138, 143, 152)",
            paddingLeft: "12px",
            borderLeft: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          Status
        </span>
      </header>

      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "64px 32px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "rgb(74, 222, 128)",
              flexShrink: 0,
              boxShadow: "0 0 0 4px rgba(74, 222, 128, 0.18)",
            }}
          />
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "rgb(247, 248, 248)",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            All systems operational
          </h1>
        </div>

        <div
          style={{
            backgroundColor: "rgb(13, 14, 15)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              padding: "14px 20px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              display: "grid",
              gridTemplateColumns: "1fr 100px 110px",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: "rgb(138, 143, 152)",
              }}
            >
              Service
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: "rgb(138, 143, 152)",
                textAlign: "right" as const,
              }}
            >
              Status
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: "rgb(138, 143, 152)",
                textAlign: "right" as const,
              }}
            >
              30d Uptime
            </span>
          </div>

          {SERVICES.map((service, index) => (
            <div
              key={service.name}
              style={{
                padding: "15px 20px",
                borderBottom:
                  index < SERVICES.length - 1
                    ? "1px solid rgba(255, 255, 255, 0.05)"
                    : "none",
                display: "grid",
                gridTemplateColumns: "1fr 100px 110px",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "rgb(74, 222, 128)",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: "14px", color: "rgb(208, 214, 224)" }}>
                  {service.name}
                </span>
              </div>
              <span
                style={{
                  fontSize: "13px",
                  color: "rgb(74, 222, 128)",
                  textAlign: "right" as const,
                }}
              >
                Operational
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "rgb(138, 143, 152)",
                  textAlign: "right" as const,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {service.uptime}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            backgroundColor: "rgb(13, 14, 15)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "12px",
            padding: "24px",
          }}
        >
          <h2
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "rgb(247, 248, 248)",
              margin: "0 0 12px 0",
            }}
          >
            Incident history
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "rgb(138, 143, 152)",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            No incidents in the past 90 days.
          </p>
        </div>

        <p
          style={{
            fontSize: "12px",
            color: "rgb(138, 143, 152)",
            marginTop: "32px",
            textAlign: "center" as const,
          }}
        >
          This page updates automatically. All times shown in UTC.
        </p>
      </div>
    </main>
  );
}
