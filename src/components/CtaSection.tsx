import Link from "next/link";

export function CtaSection() {
  return (
    <section
      className="flex flex-col items-center text-center"
      style={{
        backgroundColor: "rgb(8, 9, 10)",
        padding: "120px 64px",
      }}
    >
      <h2
        style={{
          fontSize: "72px",
          fontWeight: 510,
          lineHeight: "76px",
          letterSpacing: "-1.44px",
          color: "rgb(247, 248, 248)",
          marginBottom: "40px",
          maxWidth: "680px",
          textAlign: "center",
        }}
      >
        Built for the future. Available today.
      </h2>

      <div className="flex items-center" style={{ gap: "12px" }}>
        <Link
          href="/signup"
          style={{
            backgroundColor: "rgb(229, 229, 230)",
            color: "rgb(8, 9, 10)",
            fontSize: "16px",
            fontWeight: 510,
            padding: "0 20px",
            height: "44px",
            borderRadius: "9999px",
            border: "1px solid rgb(229, 229, 230)",
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Get started
        </Link>

        <Link
          href="/contact"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            color: "rgb(247, 248, 248)",
            fontSize: "16px",
            fontWeight: 510,
            padding: "0 20px",
            height: "44px",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Contact sales
        </Link>
      </div>
    </section>
  );
}
