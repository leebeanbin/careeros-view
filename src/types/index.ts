export interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

export interface FeatureSectionData {
  id: string;
  number: string;
  heading: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}

export interface PillarCard {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface ChangelogPost {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export interface TestimonialCard {
  quote: string;
  author: string;
  role: string;
  company: string;
  variant: "primary" | "secondary";
}

export interface FooterColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}
