import Link from "next/link";
import { LinearIcon } from "@/components/icons";

interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

const footerColumns: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Intake", href: "#" },
      { label: "Plan", href: "#" },
      { label: "Build", href: "#" },
      { label: "Diffs", href: "#" },
      { label: "Monitor", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
  {
    heading: "Features",
    links: [
      { label: "Asks", href: "#" },
      { label: "Agents", href: "#" },
      { label: "Coding Sessions", href: "#" },
      { label: "Customer Requests", href: "#" },
      { label: "Insights", href: "#" },
      { label: "Mobile", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Method", href: "#" },
      { label: "Quality", href: "#" },
      { label: "Brand", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Switch", href: "#" },
      { label: "Download", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Developers", href: "#" },
      { label: "Status", href: "#" },
      { label: "Enterprise", href: "#" },
      { label: "Startups", href: "#" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact us", href: "#" },
      { label: "Community", href: "#" },
      { label: "X (Twitter)", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "DPA", href: "#" },
  { label: "AUP", href: "#" },
];

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "rgb(8, 9, 10)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "48px 64px 32px",
      }}
    >
      {/* Main grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "160px repeat(5, 1fr)",
          gap: "0 32px",
          alignItems: "start",
          marginBottom: "48px",
        }}
      >
        {/* Logo column */}
        <div>
          <LinearIcon width={24} height={24} className="opacity-70" />
        </div>

        {/* Content columns */}
        {footerColumns.map((column) => (
          <div key={column.heading}>
            <h3
              style={{
                fontSize: "13px",
                fontWeight: 510,
                color: "rgb(247, 248, 248)",
                marginBottom: "16px",
                marginTop: 0,
              }}
            >
              {column.heading}
            </h3>
            <nav>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block transition-colors duration-150 ease-in-out hover:text-[rgb(247,248,248)]"
                  style={{
                    marginBottom: "12px",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "rgb(138, 143, 152)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>

      {/* Legal row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          paddingTop: "24px",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        {legalLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            style={{
              fontSize: "12px",
              color: "rgb(138, 143, 152)",
              textDecoration: "none",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
