import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";

interface QualityPrinciple {
  number: string;
  title: string;
  paragraphs: string[];
}

interface StackItem {
  name: string;
  description: string;
}

const QUALITY_PRINCIPLES: QualityPrinciple[] = [
  {
    number: "1",
    title: "Performance first",
    paragraphs: [
      "Linear targets 100ms response times for all interactions. This isn't a stretch goal — it's a hard constraint that shapes every architectural decision we make. Perceived performance is one of the largest drivers of user satisfaction in productivity software.",
      "We profile regularly, set performance budgets, and treat regressions with the same urgency as bugs. When a feature can't be made fast enough, we reconsider whether to build it at all.",
    ],
  },
  {
    number: "2",
    title: "Pixel-perfect design",
    paragraphs: [
      "Every pixel is intentional. We review designs at multiple zoom levels, across different display densities, and in both light and dark modes. Inconsistencies that seem minor at a glance — a misaligned icon, an off-by-one spacing value — erode the impression of quality.",
      "Design and engineering work closely together throughout implementation, not just at handoff. The designer's job isn't finished when the spec is written; it's finished when the product matches the vision.",
    ],
  },
  {
    number: "3",
    title: "Accessibility",
    paragraphs: [
      "We build for everyone. WCAG 2.1 AA compliance is a baseline, not a checkbox. Accessibility is a first-class concern that shows up in our design system, our component library, and our QA process.",
      "This means proper ARIA labels, keyboard navigation that actually works, sufficient color contrast, and focus management in modals and overlays. We test with screen readers and keyboard-only navigation before shipping.",
    ],
  },
  {
    number: "4",
    title: "Reliability",
    paragraphs: [
      "99.9% uptime SLA. We take reliability seriously because downtime doesn't just cost users productivity — it breaks their trust. Every outage is a post-mortem and a commitment to do better.",
      "Our reliability investments go beyond uptime: graceful degradation when services are slow, optimistic updates with proper rollback, and clear error states that help users understand what happened and what to do next.",
    ],
  },
];

const STACK_ITEMS: StackItem[] = [
  {
    name: "React",
    description: "Component model that maps cleanly to our design system. The ecosystem and tooling are unmatched.",
  },
  {
    name: "TypeScript",
    description: "Type safety catches entire classes of bugs at compile time. We use strict mode throughout.",
  },
  {
    name: "Rust",
    description: "Performance-critical backend services. Memory safety without a garbage collector.",
  },
  {
    name: "PostgreSQL",
    description: "Battle-tested relational database with excellent support for complex queries and ACID guarantees.",
  },
  {
    name: "Redis",
    description: "In-memory data store for caching, real-time pub/sub, and ephemeral state.",
  },
  {
    name: "AWS",
    description: "Reliable infrastructure with global presence. We run on EC2, RDS, ElastiCache, and S3.",
  },
];

export default function QualityPage() {
  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ paddingTop: "73px" }}>
        <section
          style={{
            maxWidth: "720px",
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
            Quality is not a feature, it's a standard.
          </h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "32px",
              color: "rgb(138, 143, 152)",
            }}
          >
            We hold every part of the product to a high bar. These are the principles that guide how we think about quality.
          </p>
        </section>

        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "0 32px 96px",
          }}
        >
          {QUALITY_PRINCIPLES.map((principle, index) => (
            <div
              key={principle.number}
              style={{
                paddingTop: index === 0 ? 0 : "64px",
                paddingBottom: "64px",
                borderBottom: index < QUALITY_PRINCIPLES.length - 1 ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "rgb(138, 143, 152)",
                  marginBottom: "12px",
                  marginTop: 0,
                }}
              >
                {principle.number}
              </p>
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: 500,
                  lineHeight: "44px",
                  letterSpacing: "-0.5px",
                  color: "rgb(247, 248, 248)",
                  marginBottom: "28px",
                  marginTop: 0,
                }}
              >
                {principle.title}
              </h2>
              {principle.paragraphs.map((para, pIndex) => (
                <p
                  key={pIndex}
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "30px",
                    color: "rgb(138, 143, 152)",
                    marginBottom: pIndex < principle.paragraphs.length - 1 ? "20px" : 0,
                    marginTop: 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

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
              marginBottom: "24px",
              marginTop: 0,
            }}
          >
            Our stack
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
            Technology chosen with intent.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            }}
          >
            {STACK_ITEMS.map((item) => (
              <div
                key={item.name}
                style={{
                  backgroundColor: "rgb(13, 14, 15)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "12px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 510,
                    color: "rgb(247, 248, 248)",
                    marginBottom: "8px",
                  }}
                >
                  {item.name}
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    color: "rgb(138, 143, 152)",
                    margin: 0,
                  }}
                >
                  {item.description}
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
