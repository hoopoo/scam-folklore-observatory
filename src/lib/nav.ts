import { RELATED_PROJECTS } from "@/config/projects";

export type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

const HEADER_NAV: NavItem[] = [
  { href: "/observations", label: "Observations" },
  { href: "/articles", label: "Articles" },
  { href: "/questions", label: "Questions" },
  { href: "/#relationship-map", label: "Relationship Map" },
  { href: "/#machine-model", label: "Machine's Model" },
  { href: "/about", label: "About" },
];

const FOOTER_NAV: NavItem[] = [
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
  { href: "/related-projects", label: "Related Projects" },
  { href: "/privacy", label: "Privacy" },
  { href: "/sources", label: "Sources" },
];

export function getHeaderNav(): NavItem[] {
  return HEADER_NAV;
}

export function getFooterNav(): NavItem[] {
  return FOOTER_NAV;
}

export function getRelatedProjectLinks() {
  return RELATED_PROJECTS;
}
