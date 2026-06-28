import { PillarCards } from "./PillarCards";

export function NewSpeciesSection() {
  return (
    <div
      style={{
        backgroundColor: "rgb(8, 9, 10)",
        padding: "80px 64px",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "48px",
          fontWeight: 510,
          lineHeight: "56px",
          letterSpacing: "-0.96px",
          marginBottom: "64px",
          maxWidth: "900px",
          margin: "0 0 64px 0",
        }}
      >
        <span style={{ color: "rgb(247, 248, 248)" }}>
          A new species of product tool.{" "}
        </span>
        <span style={{ color: "rgb(138, 143, 152)" }}>
          Purpose-built for modern teams with AI workflows at its core, Linear
          sets a new standard for planning and building products.
        </span>
      </h2>
      <PillarCards />
    </div>
  );
}
