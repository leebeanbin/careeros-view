interface Author {
  initials: string;
  name: string;
  role: string;
}

interface TestimonialCardProps {
  quote: string;
  companyLogo: React.ReactNode;
  author: Author;
  background: string;
  avatarBg: string;
  avatarColor: string;
}

function TestimonialCard({
  quote,
  companyLogo,
  author,
  background,
  avatarBg,
  avatarColor,
}: TestimonialCardProps) {
  return (
    <div
      style={{
        background,
        borderRadius: 8,
        padding: 32,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 360,
      }}
    >
      <p
        style={{
          fontSize: 32,
          fontWeight: 400,
          lineHeight: "40px",
          color: "rgb(8, 9, 10)",
          marginBottom: 40,
          margin: "0 0 40px 0",
        }}
      >
        {quote}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {companyLogo}

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: avatarBg,
              color: avatarColor,
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {author.initials}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 14,
                fontWeight: 510,
                color: "rgb(8, 9, 10)",
              }}
            >
              {author.name}
            </span>
            <span
              style={{
                fontSize: 13,
                color: "rgba(8, 9, 10, 0.55)",
              }}
            >
              {author.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <div
      style={{
        backgroundColor: "rgb(8, 9, 10)",
        padding: "0 12px 12px",
        maxWidth: 1440,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
        }}
      >
        <TestimonialCard
          quote="You'll probably build a better product, just because of the craft that using Linear infuses on your brain."
          background="linear-gradient(0deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%), linear-gradient(180deg, #b2d5ff 0%, #dfd1ff 100%)"
          avatarBg="rgb(8, 9, 10)"
          avatarColor="white"
          author={{
            initials: "GP",
            name: "Gabriel Peal",
            role: "Staff Software Engineer, OpenAI",
          }}
          companyLogo={
            <span
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "rgb(8, 9, 10)",
                fontFamily: "serif",
              }}
            >
              OpenAI
            </span>
          }
        />

        <TestimonialCard
          quote="Our speed is intense and Linear helps us be action biased."
          background="#e4f222"
          avatarBg="rgb(8, 9, 10)"
          avatarColor="#e4f222"
          author={{
            initials: "NK",
            name: "Nik Koblov",
            role: "Head of Engineering, Ramp",
          }}
          companyLogo={
            <span style={{ display: "inline-flex", alignItems: "baseline", gap: 4 }}>
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "rgb(8, 9, 10)",
                  letterSpacing: "-0.5px",
                }}
              >
                ramp
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(8, 9, 10, 0.5)",
                }}
              >
                ↗
              </span>
            </span>
          }
        />
      </div>
    </div>
  );
}
