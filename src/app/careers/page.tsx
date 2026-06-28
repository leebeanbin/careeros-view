import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";

interface Principle {
  title: string;
  description: string;
}

interface JobRole {
  title: string;
  department: string;
  location: string;
}

interface Department {
  name: string;
  roles: JobRole[];
}

const PRINCIPLES: Principle[] = [
  {
    title: "High standards",
    description: "We hold ourselves to a high bar. Every pixel, every interaction, every line of code should be the best it can be. Mediocrity is not an option.",
  },
  {
    title: "Move fast",
    description: "Speed is a competitive advantage. We ship early, gather feedback, and iterate quickly. Done is better than perfect, but done well is best.",
  },
  {
    title: "Remote-first",
    description: "We've built a culture where remote works by default. Great people exist everywhere. We hire based on talent, not geography.",
  },
];

const DEPARTMENTS: Department[] = [
  {
    name: "Engineering",
    roles: [
      { title: "Staff Engineer, Infrastructure", department: "Engineering", location: "Remote" },
      { title: "Senior Engineer, Mobile (iOS)", department: "Engineering", location: "Remote" },
      { title: "Senior Engineer, AI/ML", department: "Engineering", location: "Remote" },
      { title: "Engineer, Frontend", department: "Engineering", location: "Remote" },
      { title: "Engineer, Backend (Rust)", department: "Engineering", location: "Remote" },
      { title: "Senior Engineer, Developer Platform", department: "Engineering", location: "Remote" },
    ],
  },
  {
    name: "Design",
    roles: [
      { title: "Product Designer", department: "Design", location: "Remote" },
      { title: "Motion Designer", department: "Design", location: "Remote" },
    ],
  },
  {
    name: "Product",
    roles: [
      { title: "Product Manager, Enterprise", department: "Product", location: "Remote" },
    ],
  },
];

const DEPT_COLORS: Record<string, string> = {
  Engineering: "rgba(96, 121, 241, 0.15)",
  Design: "rgba(91, 178, 142, 0.15)",
  Product: "rgba(241, 180, 96, 0.15)",
};

const DEPT_TEXT_COLORS: Record<string, string> = {
  Engineering: "rgb(96, 121, 241)",
  Design: "rgb(91, 178, 142)",
  Product: "rgb(241, 180, 96)",
};

export default function CareersPage() {
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
            Join the team building the future of work.
          </h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "32px",
              color: "rgb(138, 143, 152)",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            We're a small, focused team working on hard problems. We hire people who care deeply about the craft.
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
            Culture
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.title}
                style={{
                  backgroundColor: "rgb(13, 14, 15)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "12px",
                  padding: "32px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 510,
                    color: "rgb(247, 248, 248)",
                    marginBottom: "12px",
                    marginTop: 0,
                  }}
                >
                  {principle.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "rgb(138, 143, 152)",
                    margin: 0,
                  }}
                >
                  {principle.description}
                </p>
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
              marginBottom: "40px",
              marginTop: 0,
            }}
          >
            Open positions
          </p>

          {DEPARTMENTS.map((dept, deptIndex) => (
            <div
              key={dept.name}
              style={{ marginBottom: deptIndex < DEPARTMENTS.length - 1 ? "48px" : 0 }}
            >
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 510,
                  color: "rgb(138, 143, 152)",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.06em",
                  marginBottom: "16px",
                  marginTop: 0,
                  paddingBottom: "12px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                {dept.name}
              </h3>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "2px" }}>
                {dept.roles.map((role) => (
                  <div
                    key={role.title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 20px",
                      borderRadius: "10px",
                      backgroundColor: "rgb(13, 14, 15)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: 400,
                          color: "rgb(247, 248, 248)",
                        }}
                      >
                        {role.title}
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 510,
                          color: DEPT_TEXT_COLORS[role.department] ?? "rgb(138, 143, 152)",
                          backgroundColor: DEPT_COLORS[role.department] ?? "rgba(138, 143, 152, 0.15)",
                          padding: "3px 8px",
                          borderRadius: "9999px",
                        }}
                      >
                        {role.department}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: 400,
                          color: "rgb(138, 143, 152)",
                        }}
                      >
                        {role.location}
                      </span>
                      <a
                        href="#"
                        style={{
                          fontSize: "13px",
                          fontWeight: 510,
                          color: "rgb(96, 121, 241)",
                          textDecoration: "none",
                        }}
                      >
                        Apply →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
      <CtaSection />
      <Footer />
    </main>
  );
}
