import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";

const LOGO_NAMES = [
  "OpenAI",
  "Ramp",
  "Vercel",
  "Retool",
  "Figma",
  "Loom",
  "Raycast",
  "Arc",
  "Notion",
  "Pitch",
  "Codeium",
  "Mercury",
];

interface CustomerStory {
  company: string;
  headline: string;
  quote: string;
  author: string;
  role: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  metaColor: string;
}

const CUSTOMER_STORIES: CustomerStory[] = [
  {
    company: "OpenAI",
    headline: "How OpenAI uses Linear to ship fast",
    quote:
      "Linear gives our teams a shared view of what matters. We can move from idea to shipped feature without the overhead that slows most engineering teams down. It's been foundational to how we operate.",
    author: "Gabriel Peal",
    role: "Staff Software Engineer",
    bgColor: "rgb(225, 220, 255)",
    textColor: "rgb(20, 10, 60)",
    accentColor: "rgb(80, 50, 180)",
    metaColor: "rgb(100, 80, 160)",
  },
  {
    company: "Ramp",
    headline: "Ramp's engineering team ships 2x faster with Linear",
    quote:
      "Before Linear, our velocity was good. After Linear, it's exceptional. The clarity it brings to our sprints and the way it integrates with our GitHub workflow cut our release cycle in half.",
    author: "Nik Koblov",
    role: "Head of Engineering",
    bgColor: "rgb(230, 255, 100)",
    textColor: "rgb(30, 50, 10)",
    accentColor: "rgb(80, 120, 20)",
    metaColor: "rgb(80, 110, 30)",
  },
  {
    company: "Vercel",
    headline: "Vercel moved from Jira to Linear and never looked back",
    quote:
      "We were drowning in process. Jira felt like project management for its own sake. Linear is the opposite — it gets out of the way and lets engineers focus on shipping. The difference in team morale alone was worth it.",
    author: "Malte Ubl",
    role: "CTO",
    bgColor: "rgb(13, 14, 15)",
    textColor: "rgb(247, 248, 248)",
    accentColor: "rgb(96, 121, 241)",
    metaColor: "rgb(138, 143, 152)",
  },
];

function CompanyLogoBar() {
  return (
    <div
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "0 32px 80px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "2px",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {LOGO_NAMES.map((name, i) => (
          <div
            key={name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px 16px",
              backgroundColor: "rgb(13, 14, 15)",
              borderRight: (i + 1) % 6 !== 0 ? "1px solid rgba(255, 255, 255, 0.06)" : "none",
              borderBottom: i < 6 ? "1px solid rgba(255, 255, 255, 0.06)" : "none",
            }}
          >
            <span
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "rgb(138, 143, 152)",
                letterSpacing: "-0.2px",
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface StoryCardProps {
  story: CustomerStory;
  index: number;
}

function StoryCard({ story, index }: StoryCardProps) {
  const isReversed = index % 2 === 1;

  const panelBg =
    story.bgColor === "rgb(13, 14, 15)"
      ? "rgb(20, 21, 22)"
      : story.bgColor.replace("rgb(", "rgba(").replace(")", ", 0.5)");

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 32px 32px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderRadius: "16px",
          overflow: "hidden",
          minHeight: "420px",
        }}
      >
        <div
          style={{
            backgroundColor: story.bgColor,
            padding: "56px 56px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            order: isReversed ? 2 : 1,
          }}
        >
          <div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 510,
                color: story.accentColor,
                marginBottom: "20px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {story.company}
            </div>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: 600,
                color: story.textColor,
                lineHeight: 1.25,
                letterSpacing: "-0.4px",
                marginBottom: "24px",
                maxWidth: "360px",
              }}
            >
              {story.headline}
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: story.metaColor,
                lineHeight: 1.65,
                maxWidth: "400px",
              }}
            >
              &ldquo;{story.quote}&rdquo;
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              marginTop: "32px",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: 510, color: story.textColor }}>
              {story.author}
            </span>
            <span style={{ fontSize: "13px", color: story.metaColor }}>{story.role}</span>
          </div>
        </div>

        <div
          style={{
            backgroundColor: panelBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            order: isReversed ? 1 : 2,
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "24px",
              backgroundColor:
                story.bgColor === "rgb(13, 14, 15)"
                  ? "rgba(255, 255, 255, 0.06)"
                  : "rgba(0, 0, 0, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color:
                  story.bgColor === "rgb(13, 14, 15)"
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(0, 0, 0, 0.2)",
                letterSpacing: "-1px",
              }}
            >
              {story.company.slice(0, 1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CustomersPage() {
  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ paddingTop: "73px" }}>
        <section
          style={{
            maxWidth: "960px",
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
            Loved by the world&apos;s best product teams
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgb(138, 143, 152)",
              maxWidth: "440px",
              margin: "0 auto 64px",
              lineHeight: 1.6,
            }}
          >
            See how teams use Linear to build better products.
          </p>
        </section>

        <CompanyLogoBar />

        <section style={{ paddingBottom: "80px" }}>
          {CUSTOMER_STORIES.map((story, i) => (
            <StoryCard key={story.company} story={story} index={i} />
          ))}
        </section>

        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}
