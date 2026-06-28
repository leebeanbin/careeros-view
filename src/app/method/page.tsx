import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";

interface Principle {
  number: string;
  title: string;
  paragraphs: string[];
}

const PRINCIPLES: Principle[] = [
  {
    number: "1",
    title: "Be opinionated",
    paragraphs: [
      "Software should be opinionated. Tools that try to please everyone end up pleasing no one. When you design for every possible workflow, you end up with a bloated product full of settings and escape hatches that make the common case harder.",
      "We make deliberate choices about how Linear works. Not every user will agree with every decision, and that's okay. A strong point of view gives the product coherence and helps users build good habits. The best tools shape behavior, they don't just react to it.",
    ],
  },
  {
    number: "2",
    title: "Build for the long term",
    paragraphs: [
      "Shortcuts that save a day today often cost a week later. We build with quality in mind from the start — not because we're perfectionists, but because the compounding cost of technical debt is real and eventually becomes paralyzing.",
      "This means choosing good abstractions, writing code that's easy to change, and resisting the temptation to hack something in quickly when the right solution would take a bit more time. The long-term health of the product is always a consideration.",
      "It also means being willing to revisit and refactor decisions that didn't age well. Staying nimble requires ongoing maintenance of the foundation.",
    ],
  },
  {
    number: "3",
    title: "Move fast",
    paragraphs: [
      "Speed is a feature. The faster you can iterate, the faster you learn. A product that ships frequently gets better feedback, catches bugs earlier, and builds user trust through visible progress.",
      "Moving fast doesn't mean cutting corners — it means prioritizing ruthlessly, keeping scope small, and being willing to ship something that's 80% complete rather than waiting for 100%. The remaining 20% is almost never worth the delay.",
      "Internal tooling, automation, and process design all exist in service of speed. We remove anything that slows the team down.",
    ],
  },
  {
    number: "4",
    title: "Focus on what matters",
    paragraphs: [
      "Say no more often than yes. Every feature added is a feature that needs to be maintained, documented, and tested. Every option added is cognitive load for the user. Restraint is a design skill.",
      "We evaluate every potential addition against a high bar: does this make the product meaningfully better for most users? If it only helps a small percentage in a niche case, the cost may not be worth it.",
    ],
  },
  {
    number: "5",
    title: "Craft every detail",
    paragraphs: [
      "Details matter. The space between elements, the easing on an animation, the exact wording of an error message — these micro-decisions accumulate into a perception of quality that users feel even when they can't articulate it.",
      "We slow down to get details right. This is especially true for interactions: the way a modal opens, the feedback on a button click, the way a list item responds to hover. These moments happen dozens of times per session and add up to the overall experience.",
      "Good craft is not about perfection for its own sake. It's about respect for the user's time and attention.",
    ],
  },
  {
    number: "6",
    title: "Work in the open",
    paragraphs: [
      "Transparency builds trust. Share your roadmap, your mistakes, and your thinking with your users. People who understand why you made a decision are more forgiving of imperfect outcomes than people who feel surprised.",
      "Internally, working in the open means making decisions visible, documenting reasoning, and building a culture where anyone can understand what's happening and why. This is especially important at scale, where information asymmetry becomes a real problem.",
    ],
  },
  {
    number: "7",
    title: "Automate relentlessly",
    paragraphs: [
      "Every manual process is an opportunity for automation. The best work happens when tools get out of the way. If someone on your team is doing the same task repeatedly, that's a signal — not a system working as intended.",
      "Automation isn't just about saving time; it's about reducing error and freeing human attention for higher-leverage work. Engineers should spend their time solving interesting problems, not running deployments or triaging alerts that a system could handle.",
      "This principle applies to your own workflow too. If you find yourself doing something repetitive, stop and ask whether it can be automated before doing it a second time.",
    ],
  },
];

export default function MethodPage() {
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
            The Linear Method
          </h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "32px",
              color: "rgb(138, 143, 152)",
            }}
          >
            Principles for building high-quality products.
          </p>
        </section>

        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "0 32px 120px",
          }}
        >
          {PRINCIPLES.map((principle, index) => (
            <div
              key={principle.number}
              style={{
                paddingTop: index === 0 ? 0 : "72px",
                paddingBottom: "72px",
                borderBottom: index < PRINCIPLES.length - 1 ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
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
      </div>
      <CtaSection />
      <Footer />
    </main>
  );
}
