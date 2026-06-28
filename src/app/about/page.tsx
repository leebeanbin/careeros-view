import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";

const TEAM_MEMBERS: { name: string; role: string; initials: string; color: string }[] = [
  { name: "Karri Saarinen", role: "CEO & Co-founder", initials: "KS", color: "rgb(96, 121, 241)" },
  { name: "Tuomas Artman", role: "CTO & Co-founder", initials: "TA", color: "rgb(91, 178, 142)" },
  { name: "Jori Lallo", role: "Co-founder & Design", initials: "JL", color: "rgb(220, 120, 80)" },
  { name: "Tom Blomfield", role: "Board Member", initials: "TB", color: "rgb(180, 100, 220)" },
  { name: "Alex Chen", role: "Engineering Lead", initials: "AC", color: "rgb(96, 160, 241)" },
  { name: "Sarah Kim", role: "Engineering Lead", initials: "SK", color: "rgb(241, 180, 96)" },
  { name: "Marcus Johnson", role: "Engineering Lead", initials: "MJ", color: "rgb(96, 220, 180)" },
  { name: "Emma Wilson", role: "Engineering Lead", initials: "EW", color: "rgb(241, 96, 140)" },
];

const STATS: { value: string; label: string }[] = [
  { value: "50,000+", label: "teams" },
  { value: "150+", label: "countries" },
  { value: "2019", label: "founded" },
  { value: "Remote", label: "first" },
];

const INVESTORS: string[] = [
  "Sequoia Capital",
  "Accel",
  "Tiger Global",
  "Patrick Collison (Stripe)",
  "Nat Friedman (GitHub)",
  "Dylan Field (Figma)",
];

export default function AboutPage() {
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
            Building the future of product development.
          </h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "32px",
              color: "rgb(138, 143, 152)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Linear is a purpose-built tool for planning and building products. We believe that great products are made by great teams with the right tools.
          </p>
        </section>

        <section
          style={{
            maxWidth: "720px",
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
              marginBottom: "24px",
              marginTop: 0,
            }}
          >
            Mission
          </p>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 510,
              lineHeight: "44px",
              letterSpacing: "-0.5px",
              color: "rgb(247, 248, 248)",
              marginBottom: "32px",
              marginTop: 0,
            }}
          >
            We're building the operating system for product teams.
          </h2>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "28px",
              color: "rgb(138, 143, 152)",
              marginBottom: "20px",
              marginTop: 0,
            }}
          >
            The best software products are built by teams that have clarity on what matters, momentum to ship consistently, and the discipline to maintain quality over time. Linear was created to give every product team those capabilities — not through more process, but through better tools.
          </p>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "28px",
              color: "rgb(138, 143, 152)",
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            With AI becoming a first-class collaborator in software development, we're evolving Linear into a platform where humans and AI agents work side by side — planning, building, and shipping products faster than was ever possible before. We're just getting started.
          </p>
        </section>

        <section
          style={{
            maxWidth: "1120px",
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
              marginBottom: "40px",
              marginTop: 0,
            }}
          >
            Team
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
            }}
          >
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                style={{
                  backgroundColor: "rgb(13, 14, 15)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "12px",
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column" as const,
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: member.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "rgb(247, 248, 248)",
                    flexShrink: 0,
                  }}
                >
                  {member.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 510,
                      color: "rgb(247, 248, 248)",
                      marginBottom: "4px",
                    }}
                  >
                    {member.name}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "rgb(138, 143, 152)",
                    }}
                  >
                    {member.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "64px 32px",
          }}
        >
          <div
            style={{
              maxWidth: "1120px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "32px",
              textAlign: "center",
            }}
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: 510,
                    letterSpacing: "-1px",
                    color: "rgb(247, 248, 248)",
                    lineHeight: "56px",
                    marginBottom: "8px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "rgb(138, 143, 152)",
                    textTransform: "capitalize" as const,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "80px 32px 96px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: 510,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "rgb(96, 121, 241)",
              marginBottom: "24px",
              marginTop: 0,
            }}
          >
            Investors
          </p>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 510,
              lineHeight: "44px",
              letterSpacing: "-0.5px",
              color: "rgb(247, 248, 248)",
              marginBottom: "40px",
              marginTop: 0,
            }}
          >
            Backed by the best.
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "12px",
            }}
          >
            {INVESTORS.map((investor) => (
              <div
                key={investor}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "20px 24px",
                  backgroundColor: "rgb(13, 14, 15)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "rgb(208, 214, 224)",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "rgb(96, 121, 241)",
                    flexShrink: 0,
                  }}
                />
                {investor}
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
