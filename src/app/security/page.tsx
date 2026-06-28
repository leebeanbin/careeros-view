import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";

const certifications = [
  {
    badge: "SOC 2",
    name: "SOC 2 Type II",
    description:
      "Independently audited and certified under the AICPA SOC 2 Type II framework, covering security, availability, and confidentiality.",
  },
  {
    badge: "GDPR",
    name: "GDPR Compliant",
    description:
      "Fully compliant with the General Data Protection Regulation. We provide Data Processing Agreements and support data subject rights.",
  },
  {
    badge: "CCPA",
    name: "CCPA Compliant",
    description:
      "We honor all California Consumer Privacy Act requirements, including the right to know, delete, and opt out of data sale.",
  },
];

const dataProtectionItems = [
  "Data encrypted at rest (AES-256)",
  "Data encrypted in transit (TLS 1.3)",
  "Regular penetration testing",
  "99.9% uptime SLA",
];

const accessControlItems = [
  "SAML SSO",
  "SCIM provisioning",
  "Role-based access control",
  "Audit logs",
  "IP allowlisting",
];

export default function SecurityPage() {
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
            Security you can trust.
          </h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "32px",
              color: "rgb(138, 143, 152)",
            }}
          >
            We take the security of your data seriously.
          </p>
        </section>

        <section style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 32px 80px" }}>
          <h2
            style={{
              fontSize: "13px",
              fontWeight: 510,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgb(96, 121, 241)",
              marginBottom: "32px",
            }}
          >
            Certifications
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            {certifications.map((cert) => (
              <div
                key={cert.name}
                style={{
                  backgroundColor: "rgb(13, 14, 15)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "12px",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(96, 121, 241, 0.12)",
                    border: "1px solid rgba(96, 121, 241, 0.3)",
                    borderRadius: "8px",
                    padding: "6px 12px",
                    fontSize: "13px",
                    fontWeight: 510,
                    color: "rgb(96, 121, 241)",
                    marginBottom: "16px",
                  }}
                >
                  {cert.badge}
                </div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 510,
                    color: "rgb(247, 248, 248)",
                    marginBottom: "8px",
                  }}
                >
                  {cert.name}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "rgb(138, 143, 152)",
                  }}
                >
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            maxWidth: "1024px",
            margin: "0 auto",
            padding: "0 32px 80px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 510,
                color: "rgb(247, 248, 248)",
                marginBottom: "24px",
              }}
            >
              Data protection
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {dataProtectionItems.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "16px",
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: "rgb(208, 214, 224)",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "rgb(96, 121, 241)",
                      marginTop: "9px",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 510,
                color: "rgb(247, 248, 248)",
                marginBottom: "24px",
              }}
            >
              Access control
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {accessControlItems.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: "rgb(208, 214, 224)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ flexShrink: 0 }}
                  >
                    <path
                      d="M3 8l3.5 3.5L13 4.5"
                      stroke="rgb(96, 121, 241)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 32px 80px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 510,
              color: "rgb(247, 248, 248)",
              marginBottom: "20px",
            }}
          >
            Infrastructure
          </h2>
          <div
            style={{
              backgroundColor: "rgb(13, 14, 15)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "12px",
              padding: "32px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 510,
                  color: "rgb(247, 248, 248)",
                  marginBottom: "8px",
                }}
              >
                Cloud provider
              </h3>
              <p style={{ fontSize: "14px", lineHeight: "22px", color: "rgb(138, 143, 152)" }}>
                Hosted on AWS with infrastructure managed via Terraform. All services run in
                private VPCs with strict network segmentation.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 510,
                  color: "rgb(247, 248, 248)",
                  marginBottom: "8px",
                }}
              >
                Multi-region
              </h3>
              <p style={{ fontSize: "14px", lineHeight: "22px", color: "rgb(138, 143, 152)" }}>
                Deployed in multiple AWS regions for high availability and disaster recovery.
                Automatic failover ensures minimal downtime.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 510,
                  color: "rgb(247, 248, 248)",
                  marginBottom: "8px",
                }}
              >
                Backups
              </h3>
              <p style={{ fontSize: "14px", lineHeight: "22px", color: "rgb(138, 143, 152)" }}>
                Daily automated backups with point-in-time recovery. Backups are encrypted and
                stored in geographically separate regions.
              </p>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 32px 96px" }}>
          <div
            style={{
              backgroundColor: "rgb(13, 14, 15)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "12px",
              padding: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "32px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: 510,
                  color: "rgb(247, 248, 248)",
                  marginBottom: "8px",
                }}
              >
                Responsible disclosure
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "24px", color: "rgb(138, 143, 152)" }}>
                Found a vulnerability? We appreciate responsible disclosure from the security
                community. Please reach out before publishing.
              </p>
            </div>
            <a
              href="mailto:security@linear.app"
              style={{
                flexShrink: 0,
                backgroundColor: "rgba(96, 121, 241, 0.12)",
                border: "1px solid rgba(96, 121, 241, 0.3)",
                borderRadius: "9999px",
                padding: "0 20px",
                height: "40px",
                display: "inline-flex",
                alignItems: "center",
                fontSize: "14px",
                fontWeight: 510,
                color: "rgb(96, 121, 241)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              security@linear.app
            </a>
          </div>
        </section>
      </div>
      <CtaSection />
      <Footer />
    </main>
  );
}
